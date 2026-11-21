/* ================== PLANTAS DO HOTEL ================== */
const T=(x,y,s,sz=12,c='#23201b',a='middle',w='normal')=>`<text x="${x}" y="${y}" font-family="Special Elite" font-size="${sz}" fill="${c}" text-anchor="${a}" font-weight="${w}">${s}</text>`;
const R=(x,y,w,h,l='',f='#efe4c8',sz=12,dash='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="#23201b" stroke-width="2.5" ${dash?`stroke-dasharray="${dash}"`:''}/>`+(l?l.split('|').map((ln,i,a)=>T(x+w/2,y+h/2+4+(i-(a.length-1)/2)*15,ln,sz)).join(''):'');
const HATCH=`<defs><pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#8b8066" stroke-width="2"/></pattern><pattern id="tile" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#ede3c6"/><path d="M0 0H14V14" fill="none" stroke="#d9cba6" stroke-width="1"/></pattern></defs>`;
const FLOORS={
 terreo:{name:'Térreo',draw:()=>{let s=R(40,40,920,470,'','url(#tile)');
  s+=R(40,40,300,230,'Salão Imperial|(festa)','#e9dcb8',15);
  s+=R(340,40,200,120,'Bar do lobby','#efe4c8');
  s+=R(340,160,200,180,'LOBBY|vitrais de 1946','#f4ecd6',13);
  s+=R(540,40,140,110,'Recepção','#efe4c8');
  s+=R(680,40,110,110,'Sala técnica|(rack DVR 1 e 2)','#e2d6b6',10);
  s+=R(790,40,170,110,'Escritório|"sala de trás"','#efe4c8',11);
  s+=R(540,150,90,90,'Elev.|social','#d8ccaa',11);
  s+=R(630,150,90,90,'Escadaria|social','#e8dcbc',10);
  s+=R(870,150,90,110,'Escada de|serviço','#cfc3a0',10);
  s+=R(40,270,180,140,'Cozinha','#efe4c8');
  s+=R(220,270,120,140,'Elevador|de serviço|(cozinha)','#d8ccaa',11);
  s+=R(40,410,300,100,'Doca de carga|(saída R. Haddock Lobo)','#e2d6b6',12);
  s+=R(720,150,150,110,'Corredor|de serviço','#e8dcbc',11);
  s+=R(340,340,620,170,'','#f1ead8');
  s+=T(650,420,'ALAMEDA LORENA (calçada)',14,'#6b6352');
  s+=`<rect x="420" y="505" width="120" height="10" fill="#2b4a7a"/>`+T(480,535,'ENTRADA PRINCIPAL',11,'#2b4a7a');
  s+=`<rect x="900" y="505" width="50" height="10" fill="#8f1d21"/>`+T(925,535,'PORTA LATERAL',11,'#8f1d21');
  s+=`<path d="M935 260 V505" stroke="#8f1d21" stroke-width="2" stroke-dasharray="6 4"/>`+T(905,380,'passagem de serviço',9,'#8f1d21','end');
  return s;},
  pins:[
   ['cam02',1,360,60,'cam','Cam 02 · bar (DVR 1)','Filmou Marina e Débora no balcão. Às 01:09 Marina olha o celular e vai para o elevador.'],
   ['cam04',1,558,168,'cam','Cam 04 · cabine do elevador social (DVR 1)','01:12: Marina sobe sozinha ao 7º. 00:40: Otávio sobe ao 5º.'],
   ['cam01',1,558,58,'cam','Cam 01 · balcão da recepção (DVR 1)','Grava o recepcionista a noite inteira.'+'<br>'],
   ['rack',2,698,58,'pista','Rack técnico','DVR 1 e DVR 2 no mesmo rack e no mesmo no-break. Só o DVR 2 parou, de 00:50:12 a 01:37:40, desligado pelo botão frontal.'],
   ['doca',2,58,428,'cam','Cam 12 · doca (DVR 2)','Caio saiu por aqui às 01:30 com o equipamento. O DVR 2 estava desligado.'],
   ['eserv',2,238,288,'pista','Elevador de serviço','Painel: cabine parada no térreo de 00:45 às 06:10. Caio a usou entre 01:10 e 01:25 só para descer caixas do mezanino ao térreo. Não foi isso que o coronel ouviu.'],
   ['lateral',4,925,490,'porta','Porta lateral · Cam 11 (DVR 2)','01:40:22: cartão 704-A na saída. A câmera, já religada, mostra só um braço de terno escuro segurando a porta.'],
   ['escT',4,888,168,'porta','ESC-SERV-T','01:34:40: o cartão-mestre MST-03 entra no térreo vindo da escada de serviço, ao lado da sala de trás.']
  ]},
 andar5:{name:'5º andar',draw:()=>{let s=R(40,40,920,470,'','url(#tile)');
  s+=R(40,40,200,200,'Hall dos|elevadores','#f4ecd6',13)+R(40,240,200,120,'Elev.|social','#d8ccaa',11);
  s+=R(240,180,600,100,'CORREDOR','#e8dcbc',13);
  [['501',240],['503',360],['505',480],['507',600],['509',720]].forEach(([n,x])=>s+=R(x,40,120,140,n,'#efe4c8'));
  [['502',240],['506',360],['510',480],['512',600]].forEach(([n,x])=>s+=R(x,280,n==='512'?240:120,230,n==='512'?'512|(Otávio)':n,n==='512'?'#f2dcc8':'#efe4c8',13));
  s+=R(840,40,120,240,'Escada de|serviço','#cfc3a0',11)+R(840,280,120,230,'Rouparia|5º','#e2d6b6',11);
  s+=`<path d="M140 140 L230 100 L230 180Z" fill="#6b2f7a" opacity=".15"/>`+T(150,215,'campo da Cam 07',9,'#6b2f7a');
  return s;},
  pins:[
   ['cam07',1,58,58,'cam','Cam 07 · hall do 5º (DVR 1)','00:41: Otávio sai do elevador e vai em direção ao 512. A câmera não vê o corredor nem a escada de serviço.'],
   ['q512',1,618,298,'pessoa','Quarto 512 · Otávio','Diz que entrou às 00:40 e dormiu até as 10h.'],
   ['q512b',4,822,298,'porta','512 · registro completo','00:41:05 abertura (512-A) · <b>01:47:03 abertura (512-A)</b>. Para abrir de novo com o cartão, ele precisou ter saído.'],
   ['esc5',4,858,58,'porta','ESC-SERV-5','01:46:31: o cartão-mestre MST-03 entra no 5º vindo da escada de serviço.'],
  ]},
 andar7:{name:'7º andar',draw:()=>{let s=R(40,40,920,470,'','url(#tile)');
  s+=R(40,40,200,200,'Hall dos|elevadores','#f4ecd6',13)+R(40,240,200,120,'Elev.|social','#d8ccaa',11);
  s+=R(240,180,560,100,'CORREDOR (em "L", fora do campo da câmera)','#e8dcbc',11);
  [['701',240],['703',380],['705',520],['707',660]].forEach(([n,x])=>s+=R(x,40,140,140,n,'#efe4c8'));
  s+=R(240,280,140,230,'702|(Augusto|e Vera)','#efe4c8',12);
  s+=R(380,280,170,230,'704|(Marina)','#f2dcc8',14);
  s+=R(550,280,250,230,'708|(Cel. Prado)','#efe4c8',13);
  s+=R(800,40,160,240,'Escada de|serviço','#cfc3a0',11);
  s+=R(800,280,160,230,'','#e2d6b6');s+=T(880,300,'ROUPARIA 7º',11);
  s+=`<rect x="905" y="420" width="50" height="80" fill="#5b3a1e" stroke="#23201b" stroke-width="2"/>`+T(880,410,'armário',10,'#5b3a1e')+T(880,395,'antigo',10,'#5b3a1e');
  s+=`<rect x="820" y="320" width="60" height="40" fill="#bfb18c" stroke="#23201b"/>`+T(850,345,'quadro',9);
  s+=`<path d="M140 140 L230 100 L230 180Z" fill="#6b2f7a" opacity=".15"/>`+T(150,215,'campo da Cam 09',9,'#6b2f7a');
  s+=`<rect x="760" y="215" width="18" height="18" fill="#7a7a7a"/>`+T(745,212,'lixeira',9,'#555','end');
  if(S.stage>=4){s+=`<rect x="905" y="420" width="50" height="80" fill="none" stroke="#8f1d21" stroke-width="3" stroke-dasharray="6 4"/>`+T(930,525,'M.C. 1946',10,'#8f1d21','middle','bold');}
  return s;},
  pins:[
   ['cam09',1,58,58,'cam','Cam 09 · hall do 7º (DVR 1)','01:13: Marina sai do elevador e vira à esquerda. Até as 07:00 só registra o coronel abrindo a porta do 708 às 01:31.'],
   ['q704',1,398,298,'pessoa','Suíte 704 · Marina','704-A abre às 01:13:21. Nenhuma saída registrada. Cama intocada, duas taças usadas, espumante do frigobar consumido.'],
   ['q708',2,568,298,'pessoa','708 · Cel. Prado','01:15: vozes de um homem e de uma mulher na 704. 01:20-01:25: monta-carga descendo atrás da parede.'],
   ['lixo',3,769,224,'pista','Lixeira do corredor','Frasco de clonazepam de Vera achado vazio aqui, na segunda à tarde.'],
   ['rouparia',2,880,460,'pista','Rouparia','Carrinho de roupa fora do lugar, encostado no armário velho; risco no piso. Porta com fechadura de cartão (ROUP-7).'],
   ['patamar',2,880,250,'pista','Patamar entre 6º e 7º','O celular rosa de Helena foi achado aqui na segunda às 07:40.'],
   ['esc7',4,818,58,'porta','ESC-SERV-7','<b>00:58:44: cartão-mestre MST-03</b> entra no 7º vindo da escada.'],
   ['roup7',4,818,298,'porta','ROUP-7','01:22:10: cartão-mestre MST-03 abre a rouparia. O disjuntor MC-7 do quadro estava LIGADO.']
  ]},
 subsolo:{name:'Subsolo',draw:()=>{let s=R(40,40,920,470,'','url(#tile)');
  s+=R(40,40,560,300,'GARAGEM','#e8e2d0',16);
  s+=`<path d="M60 360 L240 360 L240 500 L60 500Z" fill="#d8ccaa" stroke="#23201b" stroke-width="2.5"/>`+T(150,435,'Rampa',13)+T(150,452,'(Al. Lorena)',10);
  s+=R(240,340,200,170,'Lavanderia','#efe4c8');
  s+=R(440,340,160,170,'Casa de|máquinas','#e2d6b6',11);
  s+=R(600,40,140,140,'Depósito D-3|"Toledo Eng."','#d9c9a0',11);
  s+=R(740,40,220,300,'','url(#hatch)');s+=`<rect x="760" y="150" width="180" height="60" fill="#f1ead8" opacity=".9"/>`+T(850,175,'ÁREA ISOLADA',13,'#23201b','middle','bold')+T(850,195,'(restauro 2005)',10);
  s+=R(600,180,140,160,'Escada de|serviço','#cfc3a0',11);
  s+=R(740,340,220,170,'Reservatórios','#e2d6b6',11);
  for(let i=0;i<6;i++)s+=`<rect x="${70+i*85}" y="70" width="60" height="100" fill="none" stroke="#9b9078" stroke-dasharray="4 4"/>`;
  if(S.stage>=4){
   s+=`<rect x="750" y="50" width="90" height="120" fill="rgba(143,29,33,.06)" stroke="#8f1d21" stroke-width="2" stroke-dasharray="7 4"/>`+T(795,105,'copa',11,'#8f1d21')+T(795,120,'1946',10,'#8f1d21');
   s+=`<rect x="905" y="50" width="50" height="60" fill="none" stroke="#8f1d21" stroke-width="3" stroke-dasharray="6 4"/>`+T(930,125,'M.C.',10,'#8f1d21','middle','bold');
   s+=`<rect x="750" y="215" width="70" height="115" fill="rgba(143,29,33,.06)" stroke="#8f1d21" stroke-width="2" stroke-dasharray="7 4"/>`+T(785,270,'ante-',10,'#8f1d21')+T(785,283,'câmara',10,'#8f1d21');
   s+=`<circle cx="885" cy="275" r="52" fill="rgba(143,29,33,.08)" stroke="#8f1d21" stroke-width="3" stroke-dasharray="7 4"/>`+T(885,272,'CASA-FORTE',11,'#8f1d21','middle','bold')+T(885,288,'1946',10,'#8f1d21');
   s+=T(850,30,'tracejado vermelho = planta de 1946 sobreposta',10,'#8f1d21');
  }
  return s;},
  pins:[
   ['cam14',2,150,390,'cam','Cam 14 · rampa da garagem (DVR 2)','Grava entradas e saídas de carros. Desligada entre 00:50 e 01:37 da noite do casamento.'],
   ['d3',5,618,58,'porta','Depósito D-3','"Material remanescente da obra". Chave com a Diretoria de Engenharia da Toledo (Otávio). Pelo memorial, a única porta para a copa antiga e a antecâmara da casa-forte.'],
   ['merc',5,520,120,'pessoa','Vaga do Mercedes prata','Segunda, terça, quarta e quinta à noite: o carro de Otávio, por 11 a 52 minutos, "no depósito D-3".'],
   ['cforte',5,845,238,'pista','Casa-forte','Porta circular de aço de 18 t. Ventilação por grelhas para a garagem. "Isso aqui vai ficar fechado para sempre, ninguém nem vai saber que existe."']
  ]}
};
const PINC={cam:['#6b2f7a','◉'],porta:['#2b4a7a','▤'],pessoa:['#8f1d21','●'],pista:['#a77a12','!']};
let FLOOR='andar7';
function floorSVG(k){const f=FLOORS[k];let s=HATCH+f.draw();
 f.pins.filter(p=>p[1]<=S.stage).forEach(p=>{const [c,g]=PINC[p[4]];s+=`<g class="mpin" data-id="${p[0]}" transform="translate(${p[2]},${p[3]})" style="cursor:pointer"><circle r="13" fill="${c}" stroke="#fff" stroke-width="2.5"/><text y="5" text-anchor="middle" font-size="13" fill="#fff" font-family="Arial">${g}</text></g>`;});
 return `<svg viewBox="0 0 1000 550" id="floorsvg">${s}</svg>`;}
function renderMaps(){
 const el=document.getElementById('maps');if(!el)return;
 el.innerHTML=`<div class="mapwrap"><div class="maph">HOTEL MARQUÊS DE ITU · PLANTAS POR ANDAR · clique nos marcadores · novos marcadores aparecem a cada envelope</div>
 <div class="floorbtns">${Object.entries(FLOORS).map(([k,f])=>`<button class="${k===FLOOR?'on':''}" onclick="FLOOR='${k}';renderMaps()">${f.name}</button>`).join('')}</div>
 ${floorSVG(FLOOR)}
 <div id="mapinfo" style="margin-top:12px;padding:14px 16px;background:#fbf6e8;border:1px solid #b9aa86;border-left:5px solid #8f1d21;min-height:60px;font-size:15px"><i style="color:#6b6352">Clique num marcador para ver os detalhes.</i></div>
 <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:10px;font-size:13px;font-family:'Special Elite'">${Object.entries({cam:'câmera',porta:'leitor de cartão / registro',pessoa:'pessoa / quarto',pista:'pista'}).map(([k,v])=>`<span style="color:${PINC[k][0]}">${PINC[k][1]} ${v}</span>`).join('')}<span>Elevador social e escadaria social: câmeras só na cabine e nos halls (DVR 1). Escada de serviço: câmeras só nos patamares do térreo e do subsolo (DVR 2).</span></div></div>`;
 el.querySelectorAll('.mpin').forEach(g=>g.addEventListener('click',()=>{const p=FLOORS[FLOOR].pins.find(x=>x[0]===g.dataset.id);document.getElementById('mapinfo').innerHTML=`<div style="font-family:'Playfair Display';font-size:20px;margin-bottom:4px">${p[5]}</div><div>${p[6]}</div>`;}));
}

/* planta de 1946, desenhada dentro do documento */
function planta1946(){
 const t=(x,y,s,sz=12,c='#3a2f1e',a='middle')=>`<text x="${x}" y="${y}" font-family="Special Elite" font-size="${sz}" fill="${c}" text-anchor="${a}">${s}</text>`;
 const r=(x,y,w,h,l='',f='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="#3a2f1e" stroke-width="2"/>`+(l?t(x+w/2,y+h/2+4,l,11):'');
 let s=`<rect width="1000" height="470" fill="#e9dcb8"/>`;
 s+=t(250,28,'PAVIMENTO TIPO (7º) · 1946',15)+t(750,28,'SUB-SOLO · 1946',15);
 s+=r(30,45,440,380);s+=r(30,45,100,90,'elev.')+r(130,180,250,70,'circulação');
 ['701','703','705','707'].forEach((n,i)=>s+=r(130+i*62,45,62,135,n));
 s+=r(130,250,70,175,'702')+r(200,250,85,175,'704')+r(285,250,95,175,'708');
 s+=r(380,45,90,205,'escada|serv.'.split('|')[0])+r(380,250,90,175,'');s+=t(425,290,'COPA DE',11)+t(425,304,'ANDAR',11);
 s+=`<rect x="430" y="355" width="34" height="50" fill="#8f1d21" opacity=".25" stroke="#8f1d21" stroke-width="2.5"/>`+t(447,420,'M.C.',12,'#8f1d21');
 s+=r(530,45,440,380);s+=r(530,45,250,190,'garagem (1946: depósito)');
 s+=r(780,45,190,110,'');s+=t(875,95,'COPA CENTRAL',11);
 s+=`<rect x="925" y="60" width="34" height="50" fill="#8f1d21" opacity=".25" stroke="#8f1d21" stroke-width="2.5"/>`+t(942,125,'M.C.',12,'#8f1d21');
 s+=r(780,155,80,150,'');s+=t(820,225,'ante-',11)+t(820,240,'câmara',11);
 s+=`<rect x="860" y="155" width="110" height="150" fill="none" stroke="#3a2f1e" stroke-width="5"/><circle cx="915" cy="230" r="42" fill="none" stroke="#3a2f1e" stroke-width="3"/>`+t(915,226,'CASA-',11)+t(915,240,'FORTE',11);
 s+=t(915,320,'Banco Paulista do Commercio',10,'#3a2f1e');
 s+=r(530,235,250,190,'cozinha / lavanderia');
 s+=`<path d="M447 380 C 600 440, 850 440, 942 110" fill="none" stroke="#8f1d21" stroke-width="2" stroke-dasharray="5 5"/>`+t(700,455,'mesmo poço vertical: M.C. do 7º desce direto até a copa central do sub-solo',11,'#8f1d21');
 return `<svg viewBox="0 0 1000 470" style="width:100%;height:auto;display:block;margin:10px 0">${s}</svg>`;
}
