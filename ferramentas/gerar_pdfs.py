#!/usr/bin/env python3
"""Gera os PDFs de cada caso (impressao.pdf e kit.pdf) a partir dos próprios jogos.

Uso (na raiz do repositório):
    cd ferramentas && npm install && cd ..
    pip install qrcode[pil]
    python3 ferramentas/gerar_pdfs.py            # todos
    python3 ferramentas/gerar_pdfs.py brinde     # só um caso

Precisa do Google Chrome/Chromium no PATH (modo headless).
Os QR codes apontam para BASE_URL/<slug>/.
"""
import base64, io, json, os, shutil, subprocess, sys
import qrcode

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FERR = os.path.join(RAIZ, 'ferramentas')
BASE_URL = os.environ.get('BASE_URL', 'https://casos-arquivados-detetive.pages.dev')
CHROME = shutil.which('google-chrome') or shutil.which('chromium') or shutil.which('chromium-browser') or 'google-chrome'

def qr(url):
    q = qrcode.QRCode(border=1, box_size=10); q.add_data(url); q.make()
    b = io.BytesIO(); q.make_image().save(b, 'PNG')
    return 'data:image/png;base64,' + base64.b64encode(b.getvalue()).decode()

def fontes():
    F = '../ferramentas/node_modules/@fontsource/'
    faces = [('Special Elite','special-elite','400','normal'),('Caveat','caveat','500','normal'),('Caveat','caveat','700','normal'),
             ('Playfair Display','playfair-display','600','normal'),('Playfair Display','playfair-display','800','normal'),('Playfair Display','playfair-display','600','italic'),
             ('IBM Plex Mono','ibm-plex-mono','400','normal'),('IBM Plex Mono','ibm-plex-mono','600','normal'),
             ('Source Serif 4','source-serif-4','400','normal'),('Source Serif 4','source-serif-4','600','normal'),('Source Serif 4','source-serif-4','400','italic')]
    return ''.join(f"@font-face{{font-family:'{n}';font-weight:{w};font-style:{st};src:url({F}{d}/files/{d}-latin-{w}-{st}.woff2) format('woff2');}}"
                   f"@font-face{{font-family:'{n}';font-weight:{w};font-style:{st};src:url({F}{d}/files/{d}-latin-ext-{w}-{st}.woff2) format('woff2');unicode-range:U+0100-024F;}}" for n,d,w,st in faces)

def pdf(slug, html, saida):
    tmp = os.path.join(RAIZ, slug, '_tmp_' + saida.replace('.pdf', '.html'))
    open(tmp, 'w').write(html)
    try:
        subprocess.run([CHROME, '--headless=new', '--no-sandbox', '--disable-gpu', '--allow-file-access-from-files',
                        '--virtual-time-budget=10000', '--no-pdf-header-footer',
                        '--print-to-pdf=' + os.path.join(RAIZ, slug, saida), 'file://' + tmp],
                       check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print('ok', slug, saida)
    finally:
        os.remove(tmp)

def base(slug):
    s = open(os.path.join(RAIZ, slug, 'index.html')).read()
    return s.replace('</head>', f'<style>{fontes()}</style></head>')

def brinde():
    url = BASE_URL + '/brinde/'
    s = base('brinde').replace('</body>', open(os.path.join(FERR, 'print_brinde.html')).read() + f"<script>buildPrint('{qr(url)}','{url}');</script></body>")
    pdf('brinde', s, 'impressao.pdf')
    slots = [f'{h:02d}:{m:02d}' for h in [20,21,22,23] for m in (0,15,30,45)] + ['00:00','00:15','00:30']
    cfg = """{title:'O Último Brinde',caseLine:'INQUÉRITO 1.047/94 · VINÍCOLA VALMORBIDA',cover:'img/casa.jpg',qr:'%s',url:'%s',nEnv:4,
stageNames:{1:'Arquivo inicial',2:'Perícia e laudos',3:'Papéis do escritório',4:'O cúmplice'},gates:GATES,
people:CHARS.filter(c=>!c.victim),victims:CHARS.filter(c=>c.victim),
props:{1:['caderno'],2:['telefone','relogio'],3:['autoriz','jucergs','telex','cobranca','bilhete','lavanderia'],4:['bilhete-ivo','bloco','extrato-tan']},
timeSlots:%s,
finalQs:['1. Quem matou Otávio Valmorbida?','2. Com o quê?','3. Por quê?','4. Onde e quando ele realmente morreu?','5. Alguém ajudou a encobrir o crime? Quem, e como?','6. Provas principais:']}""" % (qr(url), url, json.dumps(slots))
    s = base('brinde').replace('</body>', open(os.path.join(FERR, 'kit.html')).read() + f"<script>buildKit({cfg});</script></body>")
    pdf('brinde', s, 'kit.pdf')

def barqueiro():
    url = BASE_URL + '/barqueiro/'
    s = base('barqueiro').replace('</head>', f"<script>window.QRDATA='{qr(url)}';window.QRURL='{url}';</script>" + open(os.path.join(FERR, 'print_barqueiro.html')).read() + '</head>')
    pdf('barqueiro', s, 'impressao.pdf')
    slots = ['04/07 (sáb) noite','05/07 madrugada','05/07 manhã','08/07 noite','09/07 madrugada','09/07 manhã','12/07 (final da Copa)','13/07 madrugada','13/07 manhã','14/07','15/07 (jornal)','16/07','17/07 noite','18/07 madrugada','18/07 manhã','19/07','20/07','21/07 noite','22/07 madrugada','22/07 manhã','23/07','24/07','14/08/1978 (o incêndio)','1997 (carta ao MP)','jan/1998 (contrato)','mar/1998 (as moedas)']
    D8 = 'XIV · VIII · MCMLXXVIII'
    sants = [dict(stage=1,icon='✝',name='São Francisco de Assis',back=D8),dict(stage=1,icon='✦',name='N. Sra. do Carmo',back=D8),dict(stage=1,icon='❀',name='N. Sra. do Rosário',back=D8),
             dict(stage=2,icon='⚔',name='São Miguel Arcanjo',back='',glossy=True),dict(stage=3,icon='✠',name='N. Sra. do Pilar',back=D8),dict(stage=5,icon='☩',name='N. Sra. das Mercês',back=D8)]
    cfg = """{title:'O Barqueiro de Ouro Preto',caseLine:'FORÇA-TAREFA BARQUEIRO · OURO PRETO · 1998',cover:'img/cover.jpg',qr:'%s',url:'%s',nEnv:5,
stageNames:{1:'As três primeiras',2:'A imprensa e a 4ª vítima',3:'A 5ª vítima e o cofre',4:'O arquivo de 1978',5:'O Barqueiro'},gates:GATES,
people:CHARS,victims:VICTIMS,santinhos:%s,
props:{1:['reserva','arrec1'],2:['jornal','tel-pm'],3:['bilhete5','caderneta','apolice','advogada','notas17'],4:['bomb-orig','missa78','jornal78','lidia-mp'],5:['rest','invent','contrato','ruy-busca']},
timeSlots:%s,
finalQs:ACCUSE_Q.map(q=>q[1]).concat(['Provas principais:'])}""" % (qr(url), url, json.dumps(sants, ensure_ascii=False), json.dumps(slots, ensure_ascii=False))
    s = base('barqueiro').replace('</body>', open(os.path.join(FERR, 'kit.html')).read() + f"<script>buildKit({cfg});</script></body>")
    pdf('barqueiro', s, 'kit.pdf')

def marques():
    url = BASE_URL + '/marques/'
    s = base('marques').replace('</head>', f"<script>window.QRDATA='{qr(url)}';window.QRURL='{url}';</script>" + open(os.path.join(FERR, 'print_marques.html')).read() + '</head>')
    pdf('marques', s, 'impressao.pdf')
    slots = ['15/09 19:00 cerimônia','21:00 recepção','22:30 terraço','23:40','23:51','00:30 buquê','00:35','00:40','00:41','00:49','00:50','00:52','00:58','01:05','01:07','01:09','01:12','01:13','01:15','01:20','01:22','01:30','01:31','01:34','01:37','01:40','01:47','02:30','03:10','06:28','16/09 09:02','17/09 07:40','17/09 23:04','18/09 23:10','19/09 22:58','20/09 23:20']
    cfg = """{title:'A Madrinha do 7º Andar',caseLine:'INVESTIGAÇÃO PARTICULAR · HOTEL MARQUÊS DE ITU · SÃO PAULO · 2007',cover:'img/cover.jpg',qr:'%s',url:'%s',nEnv:5,
stageNames:{1:'Segunda · A contratação',2:'Terça · O hotel',3:'Quarta · A família',4:'Quinta · Dinheiro e concreto',5:'Sexta · O último dia'},gates:GATES,
people:CHARS,victims:VICTIMS.map(v=>Object.assign({},v,{n:''})),
props:{1:['briefing','portas1','detalh'],2:['livro','achados','cel-helena'],3:['agenda','autoriz','receita'],4:['portas2','comprov','disjuntor','pagto'],5:['valet','cupom','memorial']},
timeSlots:%s,
finalQs:ACCUSE_Q.map(q=>q[1]).concat(['Provas principais:'])}""" % (qr(url), url, json.dumps(slots, ensure_ascii=False))
    s = base('marques').replace('</body>', open(os.path.join(FERR, 'kit.html')).read() + f"<script>buildKit({cfg});</script>" + open(os.path.join(FERR, 'kit_marques_extra.html')).read() + '</body>')
    pdf('marques', s, 'kit.pdf')

CASOS = {'brinde': brinde, 'barqueiro': barqueiro, 'marques': marques}
if __name__ == '__main__':
    for slug in (sys.argv[1:] or CASOS):
        CASOS[slug]()
