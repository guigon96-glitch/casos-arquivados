/* ================== APP ================== */
const LS='marques_v1';
const FRESH=()=>({stage:1,read:{},notes:{},hints:{},cofre:0,cofreLog:[]});
let S=FRESH();
try{const s=JSON.parse(localStorage.getItem(LS));if(s)S=Object.assign(S,s);}catch(e){}
function save(){try{localStorage.setItem(LS,JSON.stringify(S));}catch(e){}}
function resetAll(){S=FRESH();save();location.reload();}
function go(v){if(v==='cofre'&&S.stage<3)return;document.querySelectorAll('section.view').forEach(s=>s.classList.toggle('active',s.id==='v-'+v));document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('active',b.dataset.v===v));try{history.replaceState(null,'','#'+v);}catch(e){}window.scrollTo({top:0,behavior:'smooth'});if(v==='mapa')renderMaps();if(v==='cofre')renderCofre();}
document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>go(b.dataset.v));

document.getElementById('regras').innerHTML=RULES;
document.getElementById('caso').innerHTML=CASE;
document.getElementById('victims').innerHTML=VICTIMS.map(v=>`<div class="card victim"><img class="portrait" src="img/${v.id}.jpg" alt="${v.name}"><div class="role">${v.n} · ${v.role}</div><h4>${v.name}</h4><div class="small" style="color:#6b6352">${v.age} anos</div><p>${v.desc}</p><div class="facts">${v.when}</div></div>`).join('');
document.getElementById('chars').innerHTML=CHARS.map(c=>`<div class="card"><img class="portrait" src="img/${c.id}.jpg" alt="${c.name}"><div class="role">${c.role}</div><h4>${c.name}</h4><div class="small" style="color:#6b6352">${c.age} anos</div><p>${c.desc}</p><div class="facts">${c.facts}</div></div>`).join('');
document.getElementById('witness').innerHTML=WIT.map(w=>`<div class="card"><div class="role">Outros</div><h4 style="font-size:17px">${w[1]}</h4><p style="font-size:14px">${w[2]}</p></div>`).join('');

/* ---------- CONTAGEM ---------- */
function renderCount(){const el=document.getElementById('countdown');if(!el)return;
 el.innerHTML=[1,2,3,4,5].map(d=>`<span class="day ${d<S.stage?'past':d===S.stage?'now':''}">${['SEG','TER','QUA','QUI','SEX'][d-1]}<b>${16+d}/09</b></span>`).join('')+`<span class="cdtext">Dia ${S.stage} de 5 · ${DAYS[S.stage]} · o caso vai para a gaveta na sexta, às 18h</span>`;
 document.querySelector('#tabs [data-v=cofre]').classList.toggle('dis',S.stage<3);}

/* ---------- ARQUIVO ---------- */
let current=null;
const NAMES={1:'Envelope 1 · Segunda · A contratação',2:'Envelope 2 · Terça · O hotel',3:'Envelope 3 · Quarta · A família',4:'Envelope 4 · Quinta · Dinheiro e concreto',5:'Envelope 5 · Sexta · O último dia'};
function visible(d){return d.stage<=S.stage&&(!d.cofre||S.cofre);}
function renderList(){
 const L=document.getElementById('doclist');let h='';
 for(let st=1;st<=5;st++){
  h+=`<div class="stage-h">${NAMES[st]}</div>`;
  if(st>S.stage){
   if(st===S.stage+1){const g=GATES[st];h+=`<div class="locked gate"><div class="lockt">🔒 Envelope lacrado</div><p style="margin:6px 0">${g.q}</p><select id="gate${st}">${g.opts.map(o=>`<option>${o}</option>`).join('')}</select><button class="btn" onclick="tryGate(${st})">Romper o lacre</button><div class="feedback" id="fb${st}"></div></div>`;}
   else h+=`<div class="locked">🔒 Lacrado.</div>`;continue;}
  let lg='';D.filter(d=>d.stage===st&&visible(d)).forEach(d=>{if(d.group!==lg){h+=`<div class="grp">${d.group.toUpperCase()}</div>`;lg=d.group;}h+=`<button class="docbtn ${current===d.id?'active':''} ${S.read[d.id]?'read':''}" onclick="openDoc('${d.id}')">${d.title}<small>${d.sub}</small></button>`;});
  if(st===3&&!S.cofre)h+=`<div class="locked" style="cursor:pointer" onclick="go('cofre')">🔐 Cofre da suíte 704: fechado. <u>Tentar a senha</u></div>`;
 }
 L.innerHTML=h;renderCount();
}
function openDoc(id){current=id;const d=D.find(x=>x.id===id);S.read[id]=1;save();document.getElementById('docview').innerHTML=d.html;if(id==='planta1946')document.getElementById('planta1946svg').innerHTML=planta1946();renderList();if(window.innerWidth<860)document.getElementById('docview').scrollIntoView({behavior:'smooth'});}
function tryGate(st){const v=document.getElementById('gate'+st).value,fb=document.getElementById('fb'+st),g=GATES[st];
 if(v===g.a){S.stage=st;save();renderList();renderPhotos();renderHints();document.getElementById('docview').innerHTML=`<div class="paper typed"><div class="stamp">${DAYS[st].split(',')[0].toUpperCase()}</div><h2>${NAMES[st]}</h2><p>Correto. Amanhece ${DAYS[st].toLowerCase()}. Há documentos novos na lista, fotos novas e marcadores novos nas plantas do hotel${st===3?'. A aba 🔐 Cofre 704 foi liberada':''}${st===4?', incluindo a planta de 1946 sobreposta':''}.</p>${st===5?'<p><b>Último dia.</b> O delegado arquiva o caso às 18h.</p>':''}</div>`;}
 else{fb.className='feedback bad';fb.textContent=v?g.bad:'Escolham uma resposta.';}}

/* ---------- COFRE ---------- */
let CODE='';
function renderCofre(){const el=document.getElementById('cofre');
 if(S.stage<3){el.innerHTML='<div class="locked" style="max-width:500px;margin:auto">🔒 Liberado no Envelope 3.</div>';return;}
 const disp=S.cofre?'OPEN':(CODE+'____').slice(0,4).split('').join(' ');
 el.innerHTML=`<div class="safe"><div class="safebrand">SAFETEL · ST-24</div><div class="safedisp ${S.cofre?'ok':''}" id="safedisp">${disp}</div>
 <div class="keys">${[1,2,3,4,5,6,7,8,9,'C',0,'#'].map(k=>`<button onclick="key('${k}')" ${S.cofre?'disabled':''}>${k}</button>`).join('')}</div>
 <div class="small" style="text-align:center;margin-top:8px;color:#9d9580">Digitem 4 dígitos e apertem #. C apaga.</div></div>
 <div class="paper telex" style="max-width:520px"><div class="meta" style="font-family:'IBM Plex Mono'">MEMÓRIA DE AUDITORIA DO COFRE</div><pre style="font-family:'IBM Plex Mono';font-size:13px;white-space:pre-wrap">${S.cofreLog.length?S.cofreLog.map(l=>l).join('\n'):'(nenhuma tentativa registrada desde 15/09 15:31, CÓDIGO DEFINIDO PELO HÓSPEDE)'}</pre>
 ${S.cofre?`<p style="font-family:'Source Serif 4'">Dentro do cofre: <b>um pen drive</b> de 1 GB, e só isso. Os arquivos estão no Arquivo, no Envelope 3, em "Pen drive (cofre 704)".</p><button class="btn" onclick="go('arquivo')">Ler o pen drive →</button>`:''}</div>`;}
function key(k){if(S.cofre)return;
 if(k==='C')CODE='';
 else if(k==='#'){if(CODE.length<4){CODE='';renderCofre();return;}
  const t=new Date(),stamp=`${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}`;
  if(CODE===COFRE.code){S.cofre=1;S.cofreLog.push(`${stamp}  ****  ABERTO`);save();CODE='';renderCofre();renderList();return;}
  S.cofreLog.push(`${stamp}  ${CODE}  ERRO`);save();CODE='';renderCofre();const d=document.getElementById('safedisp');d.textContent='ERRO';d.classList.add('bad');return;}
 else if(CODE.length<4)CODE+=k;
 renderCofre();}

/* ---------- FOTOS ---------- */
function renderPhotos(){let h='';for(let st=1;st<=S.stage;st++){const ks=Object.keys(PH).filter(k=>PH[k].stage===st);if(!ks.length)continue;h+=`<div class="stageph">${NAMES[st].toUpperCase()}</div><div class="photos">`+ks.map(k=>`<div class="polaroid ${k[0]==='c'?'cftv':''}" style="--r:${PH[k].r}" onclick="openPhoto('${k}')"><img src="img/${k}.jpg" alt=""><div class="cap">${PH[k].cap}</div><div class="num">${k.toUpperCase()}</div></div>`).join('')+`</div>`;}document.getElementById('photos').innerHTML=h;}
function openPhoto(k){const p=PH[k];document.getElementById('modalInner').innerHTML=`<div><img src="img/${k}.jpg"></div><div class="back">${p.back}<div class="tech">${p.tech}</div></div>`;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ---------- ANOTAÇÕES / DICAS ---------- */
document.getElementById('notefields').innerHTML=CHARS.map(c=>`<label>${c.name}</label><textarea data-note="${c.id}" placeholder="motivo, oportunidade, onde estava, contradições..."></textarea>`).join('');
document.querySelectorAll('textarea[data-note]').forEach(t=>{t.value=S.notes[t.dataset.note]||'';t.addEventListener('input',()=>{S.notes[t.dataset.note]=t.value;save();});});
function renderHints(){document.getElementById('hints').innerHTML=[1,2,3,4,5].map(st=>`<div class="hint"><h4>${NAMES[st].toUpperCase()}${st>S.stage?' · 🔒':''}</h4>${st<=S.stage?HINTS[st].map((h,i)=>{const k=st+'-'+i;return `<button class="btn ghost" style="margin:4px 4px 0 0" onclick="showHint('${k}')">Dica ${i+1}</button><div class="h ${S.hints[k]?'show':''}" id="h${k}">${h}</div>`}).join(''):''}</div>`).join('');}
function showHint(k){S.hints[k]=1;save();document.getElementById('h'+k).classList.add('show');}

/* ---------- RELATÓRIO FINAL ---------- */
document.getElementById('accuse').innerHTML=`<div class="stamp blue">RELATÓRIO FINAL</div><div class="meta">RELATÓRIO FINAL DA INVESTIGAÇÃO PARTICULAR · Para: Delegado Paulo Ramos, 78º DP · Sexta, 21/09/2007, antes das 18h</div>
<p style="font-style:italic">Recomendamos abrir os cinco envelopes antes de entregar. O relatório vai direto ao delegado, não ao nosso cliente.</p>`+ACCUSE_Q.map(q=>`<div class="row"><label>${q[1]}</label><select id="a-${q[0]}"><option value="">— escolham —</option>${q[2].map(o=>`<option value="${o[0]}">${o[1]}</option>`).join('')}</select></div>`).join('')+`<button class="btn" onclick="accuse()">Entregar ao delegado</button><div id="acc-result"></div>`;
function accuse(){
 const v=ACCUSE_Q.map(q=>document.getElementById('a-'+q[0]).value),R=document.getElementById('acc-result');
 if(v.slice(0,5).some(x=>!x)){R.innerHTML='<div class="result">O delegado quer as cinco primeiras respostas.</div>';return;}
 const ok=ACCUSE_Q.map((q,i)=>v[i]===q[3]);
 const pts=ok.slice(0,5).filter(Boolean).length+(ok[5]?0.5:0);
 let verdict;
 if(ok[0]&&ok[4])verdict=ok.slice(0,5).every(Boolean)?'🏆 CASO RESOLVIDO. Às 17h40 o delegado Ramos manda abrir o depósito D-3. Marina está viva.':'✔️ Vocês acharam Marina e o responsável. O relatório tem furos que a defesa vai explorar, mas ela está viva.';
 else if(ok[4])verdict='⚠️ A polícia encontra Marina viva graças ao relatório de vocês, mas o culpado está errado. Ele embarca para Lisboa no sábado.';
 else if(ok[0])verdict='⚠️ Vocês apontaram o culpado, mas não onde ela está. A polícia prende o suspeito e ele não diz nada. Correm contra o tempo.';
 else verdict='❌ O caso vai para a gaveta às 18h. Leiam a solução.';
 R.innerHTML=`<div class="result">${ACCUSE_Q.map((q,i)=>`${q[1].replace(/^\d\.\s*/,'').replace(/\(Bônus\)\s*/,'')} ${ok[i]?'✔️':'✖️'}`).join('<br>')}<br><br>Pontuação: ${pts} / 5,5<br><br>${verdict}</div><p><button class="btn" onclick="showSolution()">Ler a solução completa</button></p>`;
}
function showSolution(){const s=document.getElementById('solution');s.style.display='block';s.innerHTML=SOLUTION;s.scrollIntoView({behavior:'smooth'});}

/* ---------- INIT ---------- */
renderList();renderPhotos();renderHints();renderMaps();renderCofre();
document.getElementById('docview').innerHTML=`<div class="paper typed"><h2>Arquivo da investigação</h2><p>Comecem pelo <b>bilhete de vocês para vocês</b> e pelo <b>B.O.</b>. Depois sigam o roteiro da noite: câmeras, portas, telefone, entrevistas.</p><p>Documentos lidos ficam marcados com ✓.</p></div>`;
const hh=(location.hash||'').slice(1);if(hh&&document.getElementById('v-'+hh))go(hh);
if(window.PRINT_HOOK)window.PRINT_HOOK();
