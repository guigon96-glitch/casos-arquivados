/* ================== CORE DATA ================== */
const D=[];
function doc(stage,id,group,title,sub,html,cofre){D.push({stage,id,group,title,sub,html,cofre:!!cofre});}
const ent=(nome,quem,data,body,extra='')=>`<div class="paper typed">${extra}<div class="meta">ENTREVISTA GRAVADA · Investigação particular "Marquês" · ${nome} · ${quem} · ${data}</div>${body}<p style="margin-top:22px;font-size:13px;color:#6b6352">[fim da transcrição · fita K7 nº ${Math.abs(nome.length*7%40)+1}]</p></div>`;
const pic=(k,cap)=>`<img class="inlinepic" src="img/${k}.jpg" alt="${cap||''}">`;
const DAYS={1:'Segunda, 17/09/2007',2:'Terça, 18/09/2007',3:'Quarta, 19/09/2007',4:'Quinta, 20/09/2007',5:'Sexta, 21/09/2007'};

const RULES=`
<h2>Bem-vindos ao caso, detetives.</h2>
<p>São Paulo, setembro de 2007. No sábado, 15, o <b>Hotel Marquês de Itu</b>, um clássico de 1946 nos Jardins, recebeu o casamento mais comentado da temporada: Helena Toledo e Rodrigo Saad. Às <b>01h12</b> de domingo uma câmera filmou a madrinha, <b>Marina Toledo</b>, irmã da noiva, subindo sozinha de elevador ao 7º andar. Depois disso ninguém mais a viu.</p>
<p>A polícia registrou o desaparecimento, mas acredita que uma mulher adulta, solteira e com problemas na família "foi espairecer". Na segunda-feira a família contrata vocês: <b>detetives particulares</b>, sem distintivo, sem mandado, dependendo da boa vontade de quem quiser falar.</p>
<h3>O prazo</h3>
<p>O delegado avisou que, se nada de novo aparecer, o caso vai para a gaveta na <b>sexta-feira, às 18h</b>. Vocês têm <b>cinco dias</b>. Cada envelope é um dia de investigação.</p>
<h3>Objetivo final</h3>
<ul>
<li><b>Quem</b> é responsável pelo desaparecimento de Marina? Alguém ajudou?</li>
<li><b>Como</b> ela foi levada até o 7º andar, e <b>por quê</b>?</li>
<li><b>O destino:</b> o que aconteceu com Marina, e onde ela está?</li>
</ul>
<h3>Os cinco envelopes</h3>
<ul>
<li><b>Envelope 1 · Segunda · A contratação</b></li>
<li><b>Envelope 2 · Terça · O hotel</b></li>
<li><b>Envelope 3 · Quarta · A família</b> (e o cofre da suíte 704)</li>
<li><b>Envelope 4 · Quinta · Dinheiro e concreto</b></li>
<li><b>Envelope 5 · Sexta · O último dia</b></li>
</ul>
<p>Cada envelope só abre quando vocês acertam a pergunta do lacre. Errar não tem punição.</p>
<h3>O cofre</h3>
<p>A partir do Envelope 3, a aba <b>🔐 Cofre 704</b> fica disponível. A senha tem quatro dígitos e está escondida nos documentos. Tentativas são ilimitadas, mas o cofre registra cada erro, e há senhas que <i>parecem</i> certas.</p>
<h3>Para jogar em casal</h3>
<ul>
<li>Leiam juntos <b>O caso</b>, <b>A desaparecida</b> e <b>Os suspeitos</b>.</li>
<li>Deixem as <b>Plantas do hotel</b> abertas num segundo aparelho e conferam cada horário com o andar onde a pessoa diz que estava.</li>
<li>Na aba <b>🔎 Investigação</b> há um quadro com fios, uma linha do tempo que se ordena sozinha e <b>interrogatórios extras</b>: cada envelope aberto dá 3 fichas para perguntas novas.</li>
<li>Duração estimada: <b>6 a 9 horas</b>, em duas ou três noites. O progresso fica salvo neste navegador.</li>
</ul>
<p class="small">Contexto: 2007. Celulares de flip, torpedos (SMS), MSN Messenger e Orkut no auge. Câmeras de segurança gravam em DVR com imagem granulada. O apagão aéreo ainda é assunto, e o Pan do Rio terminou em julho.</p>
<p><button class="btn" onclick="go('caso')">Abrir o caso →</button> &nbsp; <button class="btn ghost" onclick="resetAll()">Reiniciar progresso</button></p>`;

const CASE=`
<div class="paper typed"><div class="stamp">CONFIDENCIAL</div>
<div class="meta">CARTA DE CONTRATAÇÃO · Toledo Engenharia S.A. · Av. Brig. Faria Lima, 1.811 · São Paulo, 17/09/2007</div>
<p>Prezados,</p>
<p>Escrevo em nome da família Toledo, de quem sou amigo há trinta anos e sócio há vinte.</p>
<p>No último sábado, 15, casamos a Helena, filha caçula do meu sócio Augusto. A festa foi no Hotel Marquês de Itu, que a nossa construtora restaurou entre 2005 e 2006. Foi uma noite bonita. Terminou por volta de uma da manhã.</p>
<p>A irmã da noiva, <b>Marina</b>, 29 anos, arquiteta, minha afilhada de batismo, subiu para a suíte 704, onde estava hospedada, e não foi mais vista. A cama não foi desfeita. A bolsa, o celular e a carteira sumiram com ela. O carro continua na garagem do prédio dela, na Vila Madalena.</p>
<p>A polícia do 78º DP fez o boletim e disse, com toda a delicadeza possível, que "moças crescidas às vezes precisam de um tempo". O Augusto não está em condições de cuidar disso. A Dona Vera também não. A Helena cancelou a lua de mel.</p>
<p>Por isso tomei a liberdade de contratá-los. Peço discrição: a imprensa já farejou e a empresa atravessa um momento delicado. Peço também que os relatórios diários sejam enviados <b>a mim</b>. Eu repasso à família o que for necessário, para poupá-los.</p>
<p>O gerente do hotel, Sr. Fábio Montenegro, foi orientado a colaborar. Os demais convidados e funcionários, vocês sabem melhor do que eu como abordar.</p>
<p>Encontrem a Marina.</p>
<p class="sig">Otávio Lacerda</p>
<p style="font-size:13px">Diretor de Engenharia · Toledo Engenharia S.A. · padrinho da noiva</p>
</div>
<div class="paper">
<h2>A lore: o Marquês de Itu</h2>
<p>O prédio de nove andares na Alameda Lorena foi inaugurado em <b>1946</b>, no auge do café e da indústria paulista. O térreo abrigou, até 1971, uma agência do <b>Banco Paulista do Comércio</b>; os andares de cima eram o hotel onde se hospedavam fazendeiros, cantores do rádio e, dizem, um governador com uma amante no 7º andar.</p>
<p>Nos anos 80 e 90 o hotel decaiu: carpete puído, elevador pantográfico quebrado, o restaurante fechado. Em 2004 um grupo de investidores comprou o prédio e contratou a <b>Toledo Engenharia</b> para o restauro. A arquiteta responsável pelo levantamento histórico foi a própria Marina Toledo, então com 26 anos. O hotel reabriu em agosto de 2006 com 64 quartos, o <b>Salão Imperial</b> restaurado e uma clientela que paga caro por elevadores de grade dourada e banheiras de pé.</p>
<p>Algumas coisas ficaram como eram: o elevador social pantográfico (agora com motor novo), a escadaria de mármore, os vitrais do lobby. Outras foram fechadas, porque um prédio de 1946 tem mais portas do que um hotel de 2007 precisa.</p>
<h3>A noite de 15 de setembro de 2007</h3>
<div class="timeline">
<div><b>19h00</b> Cerimônia religiosa na Igreja N. Sra. do Brasil.</div>
<div><b>21h00</b> Recepção no Salão Imperial do hotel (térreo). 280 convidados.</div>
<div><b>00h30</b> Bolo e buquê.</div>
<div><b>00h40</b> Primeiros convidados se recolhem.</div>
<div><b>01h05</b> Fim da música. Os noivos sobem à suíte presidencial (801).</div>
<div><b>01h12</b> Câmera do elevador social: Marina sobe sozinha ao 7º andar.</div>
<div><b>03h10</b> Helena liga para o celular da irmã: desligado.</div>
<div><b>Domingo, 16, 11h</b> Marina não aparece no almoço da família. A suíte 704 está intacta.</div>
<div><b>Domingo, 16, 18h</b> Boletim de ocorrência no 78º DP.</div>
<div><b>Segunda, 17, 9h</b> Vocês são contratados.</div>
</div>
</div>`;

const VICTIMS=[
 {id:'marina',n:'Desaparecida',name:'Marina Toledo',age:29,role:'Madrinha · irmã da noiva · arquiteta',desc:'Filha mais velha de Augusto Toledo. Perdeu a mãe aos 9 anos e foi criada em grande parte pela avó materna, Iolanda. Arquiteta formada pelo Mackenzie, especializada em restauro. Coordenou o levantamento histórico do Hotel Marquês de Itu. Descrita como teimosa, honesta "até a grosseria" e incapaz de sumir sem avisar a irmã.',when:'Vista pela última vez às 01h12 de 16/09/2007, no elevador social, subindo ao 7º andar. Vestido longo verde-escuro, sandálias na mão, bolsa de festa dourada.'}
];

const CHARS=[
 {id:'otavio',name:'Otávio Lacerda',age:54,role:'Padrinho · sócio da Toledo Engenharia · quem contratou vocês',desc:'Engenheiro, sócio minoritário e diretor técnico da construtora há vinte anos. Padrinho de batismo de Marina. Viúvo, elegante, conhece todos os garçons pelo nome. Foi ele quem assinou o contrato de vocês.',facts:'Quarto 512 na noite da festa. Diz que se recolheu às 00h40 e só soube do sumiço no domingo.'},
 {id:'helena',name:'Helena Toledo Saad',age:27,role:'A noiva · irmã de Marina',desc:'Publicitária, alegre, a "filha fácil" segundo a madrasta. Muito ligada à irmã. Cancelou a lua de mel em Fernando de Noronha.',facts:'Suíte presidencial 801. Perdeu o celular durante a festa.'},
 {id:'rodrigo',name:'Rodrigo Saad',age:32,role:'O noivo',desc:'Advogado tributarista, filho de uma família de importadores. Bonito, controlado, pouco à vontade com os Toledo. Discutiu com Marina no terraço às 22h30, diante de testemunhas.',facts:'Suíte 801. Diz que a discussão foi "sobre o discurso".'},
 {id:'augusto',name:'Dr. Augusto Toledo',age:61,role:'Pai de Marina e Helena · fundador da Toledo Engenharia',desc:'Engenheiro da velha guarda, orgulhoso, cardíaco. Construiu metade dos prédios da Faria Lima nos anos 80. Os boatos dizem que a empresa está mal.',facts:'Suíte 702, com a esposa. Tomou um calmante e dormiu antes da 1h.'},
 {id:'vera',name:'Vera Toledo',age:56,role:'Madrasta',desc:'Segunda mulher de Augusto, casada há dezesseis anos. Ex-modelo, organizadora de eventos beneficentes. Relação com Marina: "cordial e gelada". Com Helena: ótima.',facts:'Suíte 702. Diz que algo sumiu da bolsa dela durante a festa.'},
 {id:'debora',name:'Débora Sena',age:35,role:'Jornalista investigativa',desc:'Repórter de economia de um grande jornal paulistano, conhecida por matérias sobre obras públicas superfaturadas. Entrou na lista de convidados de última hora, a pedido de Marina.',facts:'Não estava hospedada. Ficou no bar do lobby até 02h30.'},
 {id:'caio',name:'Caio Mendes ("DJ Kaio")',age:30,role:'DJ da festa · ex-namorado de Marina',desc:'Namorou Marina por quatro anos; terminaram em 2006. Foi contratado para a festa por insistência de Helena, que gosta dele. No Orkut, não esconde a mágoa.',facts:'Saiu às 01h30 pela doca de serviço com o equipamento.'},
 {id:'patricia',name:'Patrícia Albuquerque',age:41,role:'Cerimonialista',desc:'A cerimonialista mais requisitada dos Jardins. Controla horários, seguranças, mesa de presentes e lista de convidados. Sabe onde todos estavam, ou diz que sabe.',facts:'Ficou num quarto de apoio (310) até as 02h.'},
 {id:'sergio',name:'Sérgio Paixão',age:38,role:'Recepcionista noturno do hotel',desc:'Trabalha no Marquês desde a reabertura. Educado, discreto, divorciado, dois filhos. Colegas dizem que "anda nervoso com dinheiro".',facts:'Turno das 23h às 7h. Responsável pela recepção e pelo rack de segurança.'},
 {id:'wilson',name:'Cel. (ref.) Wilson Prado',age:67,role:'Hóspede permanente do quarto 708',desc:'Militar reformado, mora no hotel desde 1996, antes do restauro. Viúvo, insone, anda armado (com porte). Implica com barulho, com funcionários e com o "hotel de novela" que fizeram do prédio.',facts:'Vizinho de corredor da suíte 704. Não era convidado do casamento.'},
 {id:'lucia',name:'Lúcia Ferraz',age:48,role:'Governanta-chefe',desc:'Vinte e dois anos no prédio, desde o tempo do hotel decadente. Conhece cada armário, cada rangido. Fez plantão no casamento até meia-noite e limpou a suíte 704 no domingo de manhã.',facts:'Saiu do hotel às 00h10; voltou no domingo às 8h.'}
];

const WIT=[
 ['','Fábio Montenegro','Gerente-geral do hotel. Colabora, mas protege a imagem do Marquês: "nenhum hóspede some de um hotel cinco estrelas".'],
 ['','Delegado Paulo Ramos','78º DP (Jardins). Simpático, sobrecarregado. Arquiva o caso na sexta, às 18h, se nada novo surgir.'],
 ['','Nilton Araújo','Segurança do turno da noite. Fazia ronda externa (calçada e garagem) entre 00h30 e 02h.'],
 ['','Jair Bezerra','Manobrista do turno da noite (valet). Cuida da garagem no subsolo.'],
 ['','Dona Iolanda Prado (1917-2006)','Avó materna de Marina e Helena. Morreu em agosto de 2006. Marina a chamava de "minha mãe de verdade".']
];

const PH={
 c1:{stage:1,r:'-1.5deg',cap:'CFTV · elevador social · 01:12',back:'Câmera 04 (DVR 1), dentro da cabine do elevador social. Marina entra sozinha no térreo às 01:12:06 e aperta o 7. Segura as sandálias na mão esquerda e o celular na direita, olhando a tela.',tech:'Imagem gravada em DVR 1 (lobby, elevador social, recepção, entrada principal). Resolução 352×240. Cópia fornecida pelo gerente Fábio Montenegro.'},
 c2:{stage:1,r:'1deg',cap:'CFTV · bar do lobby · 01:09',back:'Câmera 02 (DVR 1). Marina e Débora Sena no balcão do bar do lobby. Às 01:09 Marina olha o celular, fala algo e se afasta em direção ao elevador.',tech:'DVR 1. O áudio não é gravado.'},
 f1:{stage:1,r:'-2deg',cap:'Festa · 00:35 · foto do fotógrafo oficial',back:'Hora do buquê. Em primeiro plano, Helena de costas. Ao fundo, a mesa dos noivos vazia, com taças, a bolsa dourada de Marina e um celular rosa de flip. Sentado na ponta da mesa, de smoking, Otávio Lacerda olha para a pista.',tech:'Foto digital, câmera Canon, horário do arquivo: 00:35:41. Cedida pelo estúdio contratado.'},
 f2:{stage:1,r:'1.5deg',cap:'Suíte 704 · segunda, 10h',back:'Estado da suíte quando chegamos. Cama feita, sem uso. Mala aberta sobre o banco. Nenhum sinal de luta. A governança já tinha feito a limpeza no domingo.',tech:'Foto nossa. O armário tem um cofre digital fechado, de quatro dígitos.'},
 c3:{stage:2,r:'-1deg',cap:'DVR 2 · tela de reprodução',back:'O monitor do DVR 2 (câmeras de serviço) ao reproduzir a madrugada de domingo: tela azul com a mensagem SEM SINAL entre 00:50:12 e 01:37:40.',tech:'DVR 2 cobre: escada de serviço (só os patamares do térreo e do subsolo), doca de carga, porta lateral (Al. Lorena), garagem do subsolo e corredor da lavanderia.'},
 f3:{stage:2,r:'2deg',cap:'Celular de Helena · achado na escada',back:'Motorola V3 rosa encontrado pela camareira Rosa às 7h40 de segunda, no patamar da escada de serviço entre o 6º e o 7º andar. Bateria quase no fim. Sem senha.',tech:'Item 31/09 do livro de achados e perdidos.'},
 f4:{stage:2,r:'-2deg',cap:'Santinho da missa de 7º dia',back:'Achado na nécessaire de Marina, dentro da mala. Frente: Nossa Senhora Aparecida. Verso: "Iolanda Prado · ✶ 15/01/1918 · ✝ 22/08/2006 · Saudades eternas de suas netas".',tech:'Item do inventário da suíte 704.'},
 f5:{stage:2,r:'1deg',cap:'Rouparia do 7º andar',back:'Pequeno depósito de roupa de cama ao lado da escada de serviço, porta com fechadura de cartão. Prateleiras de lençóis, um carrinho e, na parede do fundo, uma peça antiga de madeira escura, alta e estreita, sem puxador: a governança chama de "o armário velho". Notem o risco no piso de taco logo à frente.',tech:'Foto nossa, tirada na terça com autorização da governanta.'},
 f6:{stage:3,r:'-1.5deg',cap:'Frasco de clonazepam (vazio)',back:'Frasco de 20 ml de clonazepam em gotas, receita em nome de Vera Toledo. Achado vazio por um faxineiro numa lixeira do corredor do 7º andar, na segunda à tarde, e guardado "porque parecia remédio caro".',tech:'O frasco que Vera diz ter sumido da bolsa durante a festa.'},
 f7:{stage:3,r:'2deg',cap:'Agenda de Marina · setembro',back:'Agenda de papel que Marina deixava no apartamento. Página da semana do casamento, cheia de setas e abreviações.',tech:'Entregue por Helena, que tem a chave do apartamento da irmã.'},
 f8:{stage:3,r:'-1deg',cap:'O cofre da suíte 704',back:'Cofre digital de hotel, fixado no armário. Teclado numérico, visor de quatro dígitos. O gerente confirma que só o hóspede sabe o código; a abertura forçada exige técnico do fabricante e ordem judicial.',tech:'Visor: "LOCKED".'},
 c4:{stage:4,r:'1.5deg',cap:'CFTV · porta lateral · 01:40',back:'Câmera 11 (DVR 2), já religado. A porta lateral da Al. Lorena se abre por dentro às 01:40:22. Ninguém sai. Só se vê um braço de terno escuro segurando a porta por dois segundos e soltando.',tech:'No mesmo segundo, o sistema de portas registra o cartão da suíte 704 (Marina) na saída lateral.'},
 f9:{stage:4,r:'-2deg',cap:'Quadro elétrico da rouparia',back:'Quadro de disjuntores dentro da rouparia do 7º. Etiquetas datilografadas da obra de 2006. O disjuntor marcado "MC-7 (DESATIVADO)" estava na posição LIGADO.',tech:'Foto de Lúcia Ferraz, quinta de manhã.'},
 c5:{stage:5,r:'1deg',cap:'CFTV · garagem · 17/09 · 23:04',back:'Câmera 14 (DVR 2), rampa da garagem do subsolo. Um Mercedes C180 prata entra às 23:04 de segunda-feira, 17/09. Na quarta, 19/09, o mesmo carro entra às 22:58.',tech:'Nenhum hóspede com esse carro estava registrado no hotel nessas noites.'},
 f10:{stage:5,r:'-1.5deg',cap:'Foto de obra · 2005 · subsolo',back:'Do arquivo pessoal de Marina, levantamento de 2005: uma porta circular de aço, enorme, com volante e placa "BANCO PAULISTA DO COMMERCIO · 1946". Anotação dela na foto: "preservar! lacrar sem remover".',tech:'Arquivo digital de Marina, cedido por Helena.'}
};
