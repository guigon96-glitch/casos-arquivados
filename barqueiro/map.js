/* ================== MAPA DE OURO PRETO (interativo) ================== */
const PINS=[
 // id, x, y, layer, stage, title, text, kind
 ['sf',712,418,'cena',1,'Igreja de São Francisco de Assis','<b>1ª vítima · 05/07.</b> Wanderley Pires, encontrado às 5h40 dentro do adro murado. O portão estava trancado a cadeado. Têm chave o Irmão Bento, o Frei Guardião (em Roma) e a equipe de restauração.','igreja','1'],
 ['carmo',492,282,'cena',1,'Igreja de N. Sra. do Carmo','<b>2ª vítima · 09/07.</b> Dr. Hélio Arantes, sentado na escadaria. A escadaria é pública. A porta lateral é usada pela restauração (canteiro de obras, armário trancado).','igreja','2'],
 ['pfaria',1118,182,'cena',1,'Capela do Padre Faria (N. Sra. do Rosário)','<b>3ª vítima · 13/07.</b> Padre Ernesto Valadares, na soleira da capela. A casa do padre fica a 30 m. É o local mais afastado do centro, a uns 25 minutos a pé da praça.','igreja','3'],
 ['sefig',1000,318,'cena',2,'Igreja de Santa Efigênia (Alto da Cruz)','<b>4ª vítima · 18/07.</b> Sônia Lisboa, caída junto ao muro do adro. Marcas de pneu na lama. A mansão Lisboa fica 600 m ladeira abaixo.','igreja','4'],
 ['pilar',188,500,'cena',3,'Matriz de N. Sra. do Pilar','<b>5ª vítima · 22/07.</b> Armando Lisboa, sentado contra a parede lateral, ao lado do muro das ruínas do casarão nº 37.','igreja','5'],
 ['merces',612,168,'cena',5,'Igreja das Mercês','A única igreja da lista da missa de sétimo dia de 1978 que ainda não "recebeu" um corpo. Santinho das Mercês deixado na redação de Ruy Campello em 23/07.','igreja','?'],
 ['ruinas',236,528,'pista',4,'Ruínas do casarão · Rua do Pilar, 37','Pensão de estudantes destruída pelo incêndio de 14/08/1978. Três mortos: Tiago, Beatriz e Caio. Disputa judicial há vinte anos.','x'],
 ['ruinas0',236,528,'pista',1,'Terreno em ruínas · Rua do Pilar','Ruínas de um sobrado queimado há muitos anos, cercadas por tela. Os moradores evitam falar dele.','x'],
 ['wpires',768,398,'pessoa',1,'Casa de Wanderley Pires','Largo de Coimbra, 14. A pasta "PILAR 37" e o cartão de 29/06 foram encontrados aqui.','casa'],
 ['bar',326,414,'pessoa',1,'Bar do Lúcio','Rua São José. Wanderley bebeu aqui de 20h a 23h30 de 04/07. Um "rapaz quieto de boné" pagou-lhe uma dose.','bar'],
 ['redacao',384,446,'pessoa',2,'Redação de O Inconfidente','Rua São José. Mesa de Ruy Campello. Recebeu ligação da sala de rádio da PM em 14/07, às 21h50.','casa'],
 ['cota',420,236,'pessoa',1,'Pensão Dona Cota','Rua do Carmo. Hospedagem do restaurador Daniel R. Sá desde janeiro. A dona tem sono leve.','casa'],
 ['lisboa',902,420,'pessoa',2,'Mansão Lisboa','Rua Santa Efigênia, 210. Garagem com portão para a rua. Residência de Armando e Sônia Lisboa.','casa'],
 ['ernesto',1160,148,'pessoa',1,'Casa do Pe. Ernesto','A 30 m da capela. Duas xícaras de chá na mesa, uma lavada.','casa'],
 ['vaticano',700,560,'pessoa',2,'República Vaticano','República estudantil. Festa de 17/07, das 21h às 4h. Mariana Lisboa mora aqui.','casa'],
 ['zelia',300,600,'pessoa',4,'Casa de Dona Zélia Vilela','Mãe de Tiago Vilela. Guardou o envelope que Sônia lhe confiou em 13/07.','casa'],
 ['orelhao',604,292,'pista',1,'Orelhão em frente ao Museu','De onde partiu a ligação para a casa do Dr. Hélio às 0h12 de 09/07.','tel'],
 ['geraldo',468,372,'pista',5,'Pousada de Seu Geraldo (janela)','Rua Brigadeiro Musqueira. Às 2h40 de 09/07 viu um homem magro, de luva branca numa mão só, amparando um homem careca ladeira acima rumo ao Carmo.','olho'],
 ['posto',92,158,'pista',3,'Auto Posto Itacolomi','Entrada da cidade pela BR-356. Nota fiscal do Santana de Armando Lisboa às 21h05 de 17/07, e ligação do orelhão do posto às 21h20.','posto'],
 ['casaparoq',130,566,'pista',3,'Casa Paroquial do Pilar (loja)','Venda de santinhos de São Miguel a Armando Lisboa em 16/07, um dia depois da reportagem.','loja'],
 ['delegacia',648,372,'servico',1,'Delegacia Regional','Sede da Força-Tarefa "Barqueiro".','servico'],
 ['santacasa',398,176,'servico',1,'Santa Casa','Plantão da Dra. Celina Arantes na noite de 08 para 09/07.','servico'],
 ['escola',566,378,'servico',1,'Escola de Minas','No antigo Palácio dos Governadores. Lídia Salles leciona aqui.','servico'],
 ['museu',566,296,'servico',1,'Museu da Inconfidência','Guarda o acervo numismático da cidade.','servico'],
 ['rodov',214,196,'servico',1,'Rodoviária','Ônibus para Belo Horizonte (~1h40) e Mariana.','servico']
];
const LBL={museu:[0,-16,'middle'],orelhao:[12,4,'start'],delegacia:[12,4,'start'],geraldo:[-12,4,'end'],escola:[0,22,'middle'],cota:[-12,4,'end'],ruinas:[30,8,'start'],ruinas0:[30,8,'start'],ernesto:[-12,4,'end'],wpires:[12,4,'start'],lisboa:[0,20,'middle'],casaparoq:[0,22,'middle'],santacasa:[12,4,'start'],rodov:[0,20,'middle']};
const LAYERS={cena:'Cenas dos crimes',pessoa:'Casas & pontos de encontro',pista:'Pistas & testemunhas',servico:'Serviços públicos'};
let MAPON={cena:1,pessoa:1,pista:1,servico:1};

function icon(kind,lbl){
 switch(kind){
  case 'igreja': return `<path d="M-13 12 V-4 L0 -15 L13 -4 V12Z" fill="#f4ecd6" stroke="#2a221a" stroke-width="2"/><rect x="-4" y="2" width="8" height="10" fill="#2a221a"/><path d="M0 -26 V-15 M-4 -22 H4" stroke="#2a221a" stroke-width="2.2"/>`+(lbl?`<circle cx="17" cy="-17" r="11" fill="${lbl==='?'?'#4a4a4a':'#8f1d21'}" stroke="#fff" stroke-width="1.5"/><text x="17" y="-12.5" text-anchor="middle" font-family="Special Elite" font-size="13" fill="#fff">${lbl}</text>`:'');
  case 'casa': return `<path d="M-8 7 V-2 L0 -9 L8 -2 V7Z" fill="#2b4a7a"/>`;
  case 'bar': return `<rect x="-7" y="-7" width="14" height="14" rx="2" fill="#7a4a1a"/><text y="4" text-anchor="middle" font-size="10" fill="#fff">🍶</text>`;
  case 'tel': return `<circle r="8" fill="#2b4a7a"/><text y="4" text-anchor="middle" font-size="10" fill="#fff">☎</text>`;
  case 'olho': return `<circle r="8" fill="#6b2f7a"/><text y="4" text-anchor="middle" font-size="10" fill="#fff">👁</text>`;
  case 'posto': return `<circle r="9" fill="#8f1d21"/><text y="4" text-anchor="middle" font-size="10" fill="#fff">⛽</text>`;
  case 'loja': return `<circle r="8" fill="#8a6a1a"/><text y="4" text-anchor="middle" font-size="9" fill="#fff">✝</text>`;
  case 'x': return `<path d="M-9 -9 L9 9 M9 -9 L-9 9" stroke="#8f1d21" stroke-width="4"/>`;
  default: return `<circle r="6" fill="#55606d"/>`;
 }
}
function cityMap(interactive){
 const t=(x,y,s,o={})=>`<text x="${x}" y="${y}" font-family="${o.f||'Special Elite'}" font-size="${o.sz||12}" fill="${o.c||'#2a221a'}" text-anchor="${o.a||'middle'}" ${o.it?'font-style="italic"':''} ${o.ls?`letter-spacing="${o.ls}"`:''} ${o.op?`opacity="${o.op}"`:''}>${s}</text>`;
 let s=`<defs>
  <radialGradient id="pap" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#f3ead2"/><stop offset=".75" stop-color="#e6d6b0"/><stop offset="1" stop-color="#c9b282"/></radialGradient>
  <radialGradient id="hill" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#b9a272" stop-opacity=".55"/><stop offset="1" stop-color="#b9a272" stop-opacity="0"/></radialGradient>
  <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="6" stroke="#7a6440" stroke-width="1" opacity=".35"/></pattern>
  <filter id="rough"><feTurbulence baseFrequency=".9" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="2.2"/></filter>
  <filter id="shadow"><feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-opacity=".35"/></filter>
 </defs>
 <rect width="1200" height="800" fill="url(#pap)"/>`;
 // morros
 [[600,70,260,110],[1010,270,200,140],[300,180,180,110],[880,640,240,110],[120,700,180,90],[1150,80,120,90]].forEach(h=>{s+=`<ellipse cx="${h[0]}" cy="${h[1]}" rx="${h[2]}" ry="${h[3]}" fill="url(#hill)"/>`;});
 // curvas de nível
 const ring=(cx,cy,rx,ry,n)=>{let r='';for(let i=0;i<n;i++){const k=1-i*0.18;r+=`<ellipse cx="${cx+i*4}" cy="${cy-i*3}" rx="${rx*k}" ry="${ry*k}" fill="none" stroke="#8a7350" stroke-width=".8" stroke-dasharray="${i%2?'3 3':'none'}" opacity=".45" filter="url(#rough)"/>`;}return r;};
 s+=ring(600,80,250,100,5)+ring(1010,280,190,130,5)+ring(300,190,170,100,4)+ring(880,650,230,100,4)+ring(1150,90,110,80,3);
 s+=t(600,60,'MORRO DA QUEIMADA',{sz:13,c:'#6b5a3a',ls:4,it:1})+t(880,300,'ALTO DA CRUZ',{sz:13,c:'#6b5a3a',ls:4,it:1})+t(880,700,'MORRO DO CRUZEIRO',{sz:12,c:'#6b5a3a',ls:3,it:1});
 // ribeirão
 s+=`<path d="M0 712 C160 690 260 735 420 705 S700 660 820 690 S1050 735 1200 676" stroke="#7f9fb8" stroke-width="16" fill="none" opacity=".55"/><path id="rib" d="M0 712 C160 690 260 735 420 705 S700 660 820 690 S1050 735 1200 676" stroke="#5f84a3" stroke-width="2" fill="none"/>`;
 s+=`<text font-family="Playfair Display" font-style="italic" font-size="15" fill="#3f6585"><textPath href="#rib" startOffset="38%">Ribeirão do Funil</textPath></text>`;
 // ruas
 const R=[
  ['bh','M0 138 C60 150 90 160 140 180 S200 196 230 205 C300 228 380 270 440 300 S520 318 548 330','Estrada de BH (BR-356) · Rua Pe. Rolim',11],
  ['sj','M548 340 C500 370 430 400 380 425 S280 470 230 490 S170 510 120 540','Rua São José · Rua do Pilar',12],
  ['mus','M462 430 C470 400 476 360 484 330 S492 300 496 292','R. Brig. Musqueira',8],
  ['carmo','M440 236 C460 250 480 268 494 284','R. do Carmo',7],
  ['cm','M612 342 C640 360 670 385 708 412','R. Cláudio Manoel',9],
  ['efig','M716 426 C760 450 800 470 840 478 S900 448 930 420 S980 350 998 326','Rua Santa Efigênia (ladeira)',10],
  ['pf','M1004 316 C1040 280 1080 230 1112 196','Rua Padre Faria',8],
  ['mer','M572 314 C580 270 594 220 608 182','R. das Mercês',7],
  ['ad','M840 478 C870 520 860 560 830 600','R. de Antônio Dias',7],
  ['vat','M640 352 C660 420 690 500 700 556','R. Pandiá Calógeras',7],
  ['sc','M440 300 C425 260 410 220 400 186','',6],
  ['zel','M300 470 C300 520 300 560 302 596','',6]
 ];
 R.forEach(r=>{s+=`<path d="${r[1]}" stroke="#a8946a" stroke-width="${r[3]+5}" fill="none" stroke-linecap="round"/><path id="r_${r[0]}" d="${r[1]}" stroke="#fbf5e4" stroke-width="${r[3]}" fill="none" stroke-linecap="round"/><path d="${r[1]}" stroke="#d9c9a2" stroke-width="${r[3]}" stroke-dasharray="1 4" fill="none" opacity=".7"/>`;});
 R.forEach(r=>{if(r[2])s+=`<text font-family="Special Elite" font-size="10.5" fill="#5a4a30" dy="-${r[3]/2+3}"><textPath href="#r_${r[0]}" startOffset="22%">${r[2]}</textPath></text>`;});
 // praça
 s+=`<g filter="url(#shadow)"><rect x="506" y="314" width="134" height="50" fill="#d8c69a" stroke="#2a221a" stroke-width="2"/></g>`+t(573,336,'PRAÇA',{sz:12,f:'Playfair Display'})+t(573,352,'TIRADENTES',{sz:12,f:'Playfair Display'});
 // adro SF
 s+=`<rect x="688" y="396" width="52" height="40" fill="url(#hatch)" stroke="#8f1d21" stroke-width="1.5" stroke-dasharray="4 2"/>`;
 // ruínas
 s+=`<rect x="214" y="510" width="48" height="34" fill="#4a3a2a" opacity=".35" stroke="#2a221a" stroke-dasharray="3 2"/>`;
 // quadras / casario
 const blocks=[[330,380,40,18],[400,410,30,16],[420,320,26,20],[460,200,30,18],[620,250,30,18],[650,400,26,16],[760,430,30,14],[860,500,26,18],[950,380,26,14],[260,460,26,18],[160,470,22,16],[700,300,30,16],[540,420,30,14],[1060,250,22,14],[350,500,30,16],[740,520,26,16]];
 blocks.forEach(b=>{s+=`<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" fill="#c4a57a" opacity=".55" stroke="#8a6a44" stroke-width=".6"/>`;});
 // setas
 s+=t(24,124,'← Belo Horizonte · 100 km (~1h40)',{a:'start',sz:12,c:'#8f1d21'})+t(1188,470,'Mariana · 12 km →',{a:'end',sz:12,c:'#8f1d21'})+t(1188,488,'(Casa de Retiro)',{a:'end',sz:10,c:'#8f1d21'})+t(60,780,'↓ Pico do Itacolomi',{a:'start',sz:11,c:'#6b5a3a'});
 // pins
 PINS.forEach(p=>{const [id,x,y,layer,st,title,txt,kind,lbl]=p;
  if(st>S.stage||!MAPON[layer])return;
  if(id==='ruinas0'&&S.stage>=4)return;
  const showLbl=kind==='igreja';
  s+=`<g class="mpin" data-id="${id}" transform="translate(${x} ${y})" style="cursor:pointer">${icon(kind,lbl)}</g>`;
  const short=title.replace(/^Igreja de |^Igreja das |^Capela do |^Matriz de /,'').replace(/ \(.*\)/,'').replace(/ · .*/,'').replace('Orelhão em frente ao Museu','Orelhão').replace('Pousada de Seu Geraldo','Pousada S. Geraldo').replace('Museu da Inconfidência','Museu');
  const o=LBL[id]||[0,kind==='igreja'?30:20,'middle'];
  s+=t(x+o[0],y+o[1],short,{a:o[2],sz:kind==='igreja'?12.5:10.5,c:kind==='igreja'?'#2a221a':'#2b4a7a',f:kind==='igreja'?'Playfair Display':'Special Elite'});
 });
 // cartucho
 s+=`<g filter="url(#shadow)"><rect x="24" y="18" width="330" height="86" fill="#f6efdc" stroke="#2a221a" stroke-width="2"/><rect x="30" y="24" width="318" height="74" fill="none" stroke="#2a221a" stroke-width=".8"/></g>`+t(189,52,'OURO PRETO',{sz:26,f:'Playfair Display',ls:3})+t(189,72,'Planta da Força-Tarefa "Barqueiro"',{sz:11.5})+t(189,88,'julho de 1998 · uso reservado',{sz:10,c:'#8f1d21'});
 // rosa dos ventos
 s+=`<g transform="translate(1120 720)"><circle r="34" fill="#f6efdc" stroke="#2a221a"/><path d="M0 -30 L6 0 L0 30 L-6 0Z" fill="#2a221a"/><path d="M-30 0 L0 -6 L30 0 L0 6Z" fill="#8a7350"/>${t(0,-38,'N',{sz:13})}</g>`;
 // escala
 s+=`<g transform="translate(420 770)"><rect width="60" height="6" fill="#2a221a"/><rect x="60" width="60" height="6" fill="#f6efdc" stroke="#2a221a"/>${t(0,-4,'0',{sz:9})}${t(60,-4,'200 m',{sz:9})}${t(120,-4,'400 m',{sz:9})}</g>`;
 return `<svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}
function renderMaps(){
 const el=document.getElementById('maps');if(!el)return;
 el.innerHTML=`<div class="mapwrap"><div class="maph">PLANTA DE OURO PRETO · clique nos marcadores · os marcadores novos aparecem a cada envelope aberto</div>
 <div style="display:flex;flex-wrap:wrap;gap:14px;margin:0 0 10px;font-family:'Special Elite';font-size:13px">${Object.entries(LAYERS).map(([k,v])=>`<label style="cursor:pointer"><input type="checkbox" ${MAPON[k]?'checked':''} onchange="MAPON['${k}']=this.checked?1:0;renderMaps()"> ${v}</label>`).join('')}</div>
 <div id="citymap">${cityMap(true)}</div>
 <div id="mapinfo" style="margin-top:12px;padding:14px 16px;background:#fbf6e8;border:1px solid #b9aa86;border-left:5px solid #8f1d21;min-height:60px;font-size:15px"><i style="color:#6b6352">Clique num marcador do mapa para ver os detalhes.</i></div>
 <div style="display:flex;flex-wrap:wrap;gap:16px;margin-top:10px;font-size:13px;font-family:'Special Elite'"><span>⛪ com nº vermelho = vítima</span><span>⛪ cinza = igreja sem vítima</span><span style="color:#2b4a7a">▲ casas &amp; pontos de encontro</span><span style="color:#8f1d21">✕ ruínas</span><span>☎ orelhão · 👁 testemunha · ⛽ posto</span><span>▨ adro murado</span></div></div>`+
 (S.stage>=4?`<div class="mapwrap"><div class="maph">CROQUI DO CASARÃO DA RUA DO PILAR, 37 (1978)</div>${casaraoMap()}</div>`:`<div class="locked" style="max-width:600px;margin:auto">🔒 Um segundo mapa será liberado no Envelope 4.</div>`);
 el.querySelectorAll('.mpin').forEach(g=>g.addEventListener('click',()=>{const p=PINS.find(x=>x[0]===g.dataset.id);document.getElementById('mapinfo').innerHTML=`<div style="font-family:'Playfair Display';font-size:20px;margin-bottom:4px">${p[5]}</div><div>${p[6]}</div><div style="font-family:'Special Elite';font-size:11px;color:#6b6352;margin-top:6px">${LAYERS[p[3]]} · Envelope ${p[4]}</div>`;el.querySelectorAll('.mpin').forEach(x=>x.style.opacity=x===g?1:.55);}));
}
