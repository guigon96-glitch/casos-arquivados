/* ================== APP ================== */
const LS='barqueiro_v1';
let S={stage:1,read:{},notes:{},hints:{}};
try{const s=JSON.parse(localStorage.getItem(LS));if(s)S=Object.assign(S,s);}catch(e){}
function save(){try{localStorage.setItem(LS,JSON.stringify(S));}catch(e){}}
function resetAll(){S={stage:1,read:{},notes:{},hints:{}};save();location.reload();}
function go(v){document.querySelectorAll('section.view').forEach(s=>s.classList.toggle('active',s.id==='v-'+v));document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('active',b.dataset.v===v));try{history.replaceState(null,'','#'+v);}catch(e){}window.scrollTo({top:0,behavior:'smooth'});if(v==='mapa')renderMaps();}
document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>go(b.dataset.v));

document.getElementById('regras').innerHTML=RULES;
document.getElementById('caso').innerHTML=CASE;
document.getElementById('victims').innerHTML=VICTIMS.map(v=>`<div class="card victim"><img class="portrait" src="img/${v.id}.jpg" alt="${v.name}"><div class="role">${v.n} vítima · ${v.role}</div><h4>${v.name}</h4><div class="small" style="color:#6b6352">${v.age} anos</div><p>${v.desc}</p><div class="facts">${v.when}</div></div>`).join('');
document.getElementById('chars').innerHTML=CHARS.map(c=>`<div class="card"><img class="portrait" src="img/${c.id}.jpg" alt="${c.name}"><div class="role">${c.role}</div><h4>${c.name}</h4><div class="small" style="color:#6b6352">${c.age} anos</div><p>${c.desc}</p><div class="facts">${c.facts}</div></div>`).join('');
document.getElementById('witness').innerHTML=WIT.map(w=>`<div class="card">${w[0]?`<img class="portrait" style="width:90px;height:112px" src="img/${w[0]}.jpg">`:''}<div class="role">Testemunha</div><h4 style="font-size:17px">${w[1]}</h4><p style="font-size:14px">${w[2]}</p></div>`).join('');

/* ---------- MAPS ---------- */
function casaraoMap(){
 const t=(x,y,s,sz=12,c='#23201b',a='middle')=>`<text x="${x}" y="${y}" font-family="Special Elite" font-size="${sz}" fill="${c}" text-anchor="${a}">${s}</text>`;
 const r=(x,y,w,h,l,f='#efe4c8')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="#23201b" stroke-width="3"/>${t(x+w/2,y+h/2+4,l,12)}`;
 let s=`<rect width="1000" height="560" fill="#f1ead8"/>`;
 s+=t(250,30,'TÉRREO',16)+t(750,30,'PORÃO (sob o térreo)',16)+t(250,330,'1º ANDAR + SÓTÃO',16);
 // terreo
 s+=r(40,50,420,240,'');
 s+=r(40,50,140,120,'Sala')+r(180,50,140,120,'Cozinha')+r(320,50,140,120,'Quarto (Tiago)')+r(40,170,200,120,'Corredor / escada')+r(240,170,220,120,'Quarto dos fundos');
 s+=`<rect x="40" y="275" width="60" height="18" fill="#8f1d21"/>`+t(70,310,'PORTA PRINCIPAL',10,'#8f1d21')+t(70,322,'acorrentada por fora',9,'#8f1d21');
 for(let i=0;i<4;i++)s+=`<line x1="${120+i*80}" y1="47" x2="${150+i*80}" y2="47" stroke="#23201b" stroke-width="6" stroke-dasharray="2 3"/>`;
 s+=`<line x1="440" y1="293" x2="460" y2="293" stroke="#23201b" stroke-width="8" stroke-dasharray="2 2"/>`+t(400,285,'janela gradeada',9,'#23201b')+t(430,262,'✕ Caio',13,'#8f1d21');
 s+=t(250,110,'',10)+t(330,140,'(todas as janelas',9,'#6b6352')+t(330,152,'do térreo com grade)',9,'#6b6352');
 // porão
 s+=r(540,50,420,240,'','#e2d6b6');
 s+=`<rect x="600" y="160" width="40" height="50" fill="#8f1d21" opacity=".8"/>`+t(620,230,'lata de querosene',10,'#8f1d21')+t(620,242,'18 L (Lúcio)',10,'#8f1d21');
 s+=`<circle cx="700" cy="170" r="60" fill="#e07a2a" opacity=".25"/>`+t(760,120,'FOCO REAL (rascunho de Lúcio)',12,'#8f1d21','start');
 s+=t(850,250,'escada → térreo',10,'#23201b');
 // andar
 s+=r(40,340,420,180,'');
 s+=r(40,340,140,110,'Quarto (Beatriz)')+r(180,340,140,110,'Quarto (Caio)')+r(320,340,140,110,'Banheiro')+r(40,450,420,70,'Sótão (acesso por alçapão)','#e2d6b6');
 s+=t(250,510,'"foco" segundo o relatório oficial: velas no sótão',10,'#2b4a7a');
 s+=t(540,360,'Notas:',13,'#23201b','start');
 s+=t(540,385,'• Fogo e fumaça sobem: com o foco no porão e a porta',11,'#23201b','start');
 s+=t(540,402,'  acorrentada, quem estava lá em cima ficou sem saída.',11,'#23201b','start');
 s+=t(540,425,'• Caio desceu e tentou a grade dos fundos.',11,'#23201b','start');
 s+=t(540,448,'• O irmão dele, de fora, tentou abrir a corrente da porta.',11,'#23201b','start');
 s+=t(540,471,'• Versão oficial: velas no sótão, porta trancada por dentro.',11,'#23201b','start');
 s+=t(540,500,'Croqui reconstituído a partir do rascunho de L. Bragança (1978)',10,'#6b6352','start');
 return `<svg viewBox="0 0 1000 560">${s}</svg>`;
}

/* ---------- ARCHIVE ---------- */
let current=null;
const NAMES={1:'Envelope 1 · As três primeiras',2:'Envelope 2 · A imprensa e a 4ª vítima',3:'Envelope 3 · A 5ª vítima e o cofre',4:'Envelope 4 · O arquivo de 1978',5:'Envelope 5 · O Barqueiro'};
function renderList(){
 const L=document.getElementById('doclist');let h='';
 for(let st=1;st<=5;st++){
  h+=`<div class="stage-h">${NAMES[st]}</div>`;
  if(st>S.stage){
   if(st===S.stage+1){const g=GATES[st];h+=`<div class="locked gate"><div class="lockt">🔒 Envelope lacrado</div><p style="margin:6px 0">${g.q}</p><select id="gate${st}">${g.opts.map(o=>`<option>${o}</option>`).join('')}</select><button class="btn" onclick="tryGate(${st})">Romper o lacre</button><div class="feedback" id="fb${st}"></div></div>`;}
   else h+=`<div class="locked">🔒 Lacrado.</div>`;continue;}
  let lg='';D.filter(d=>d.stage===st).forEach(d=>{if(d.group!==lg){h+=`<div class="grp">${d.group.toUpperCase()}</div>`;lg=d.group;}h+=`<button class="docbtn ${current===d.id?'active':''} ${S.read[d.id]?'read':''}" onclick="openDoc('${d.id}')">${d.title}<small>${d.sub}</small></button>`;});
 }
 L.innerHTML=h;
}
function openDoc(id){current=id;const d=D.find(x=>x.id===id);S.read[id]=1;save();document.getElementById('docview').innerHTML=d.html;renderList();if(window.innerWidth<860)document.getElementById('docview').scrollIntoView({behavior:'smooth'});}
function tryGate(st){const v=document.getElementById('gate'+st).value,fb=document.getElementById('fb'+st),g=GATES[st];
 if(v===g.a){S.stage=st;save();renderList();renderPhotos();renderHints();document.getElementById('docview').innerHTML=`<div class="paper typed"><div class="stamp">LIBERADO</div><h2>${NAMES[st]}</h2><p>Correto. Os documentos novos estão na lista e há fotos novas na aba Fotos${st===4?' e um novo mapa na aba Mapas':''}.</p></div>`;}
 else{fb.className='feedback bad';fb.textContent=v?g.bad:'Escolham uma resposta.';}}

/* ---------- PHOTOS ---------- */
function renderPhotos(){let h='';for(let st=1;st<=S.stage;st++){const ks=Object.keys(PH).filter(k=>PH[k].stage===st);if(!ks.length)continue;h+=`<div class="stageph">${NAMES[st].toUpperCase()}</div><div class="photos">`+ks.map(k=>`<div class="polaroid" style="--r:${PH[k].r}" onclick="openPhoto('${k}')"><img src="img/${k}.jpg" alt=""><div class="cap">${PH[k].cap}</div><div class="num">${k.toUpperCase()}</div></div>`).join('')+`</div>`;}document.getElementById('photos').innerHTML=h;}
function openPhoto(k){const p=PH[k];document.getElementById('modalInner').innerHTML=`<div><img src="img/${k}.jpg"></div><div class="back">${p.back}<div class="tech">${p.tech}</div></div>`;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ---------- NOTES / HINTS ---------- */
document.getElementById('notefields').innerHTML=CHARS.map(c=>`<label>${c.name}</label><textarea data-note="${c.id}" placeholder="motivo, oportunidade, álibis, contradições..."></textarea>`).join('');
document.querySelectorAll('textarea[data-note]').forEach(t=>{t.value=S.notes[t.dataset.note]||'';t.addEventListener('input',()=>{S.notes[t.dataset.note]=t.value;save();});});
function renderHints(){document.getElementById('hints').innerHTML=[1,2,3,4,5].map(st=>`<div class="hint"><h4>${NAMES[st].toUpperCase()}${st>S.stage?' · 🔒':''}</h4>${st<=S.stage?HINTS[st].map((h,i)=>{const k=st+'-'+i;return `<button class="btn ghost" style="margin:4px 4px 0 0" onclick="showHint('${k}')">Dica ${i+1}</button><div class="h ${S.hints[k]?'show':''}" id="h${k}">${h}</div>`}).join(''):''}</div>`).join('');}
function showHint(k){S.hints[k]=1;save();document.getElementById('h'+k).classList.add('show');}

/* ---------- ACCUSATION ---------- */
document.getElementById('accuse').innerHTML=`<div class="stamp blue">RELATÓRIO FINAL</div><div class="meta">RELATÓRIO FINAL DA EQUIPE DE REFORÇO · Para: Delegada Marta Quintão · 24/07/1998</div>
<p style="font-style:italic">Recomendamos abrir os cinco envelopes antes de acusar.</p>`+ACCUSE_Q.map(q=>`<div class="row"><label>${q[1]}</label><select id="a-${q[0]}"><option value="">— escolham —</option>${q[2].map(o=>`<option value="${o[0]}">${o[1]}</option>`).join('')}</select></div>`).join('')+`<button class="btn" onclick="accuse()">Entregar relatório à delegada</button><div id="acc-result"></div>`;
function accuse(){
 const v=ACCUSE_Q.map(q=>document.getElementById('a-'+q[0]).value),R=document.getElementById('acc-result');
 if(v.slice(0,4).some(x=>!x)){R.innerHTML='<div class="result">A delegada quer pelo menos as quatro primeiras respostas.</div>';return;}
 const ok=ACCUSE_Q.map((q,i)=>v[i]===q[3]);
 const pts=ok.slice(0,4).filter(Boolean).length+ok.slice(4).filter(Boolean).length*0.5;
 const verdict=ok[0]&&ok[1]&&ok[2]&&ok[3]?'🏆 CASO RESOLVIDO. A delegada Quintão pede a prisão ao juiz às 6h do dia 25. Ruy Campello vai viver para escrever a retratação.':ok[0]?'✔️ Vocês acharam o Barqueiro, mas o relatório tem furos que a defesa vai explorar.':'❌ O Barqueiro continua solto, e a Igreja das Mercês espera o próximo corpo. Leiam a solução.';
 R.innerHTML=`<div class="result">${ACCUSE_Q.map((q,i)=>`${q[1].replace(/^\d\.\s*/,'').replace(/\(Bônus\)\s*/,'')} ${ok[i]?'✔️':'✖️'}`).join('<br>')}<br><br>Pontuação: ${pts} / 5<br><br>${verdict}</div><p><button class="btn" onclick="showSolution()">Ler a solução completa</button></p>`;
}
function showSolution(){const s=document.getElementById('solution');s.style.display='block';s.innerHTML=SOLUTION;s.scrollIntoView({behavior:'smooth'});}

/* ---------- INIT ---------- */
renderList();renderPhotos();renderHints();renderMaps();
document.getElementById('docview').innerHTML=`<div class="paper typed"><h2>Arquivo da Força-Tarefa</h2><p>Comecem pela <b>Nota de serviço: informações reservadas</b>. Depois sigam vítima por vítima: B.O., local, necropsia e depoimentos.</p><p>Documentos lidos ficam marcados com ✓.</p></div>`;
const hh=(location.hash||'').slice(1);if(hh&&document.getElementById('v-'+hh))go(hh);
if(window.PRINT_HOOK)window.PRINT_HOOK();
