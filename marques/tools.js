/* ===== Ferramentas de investigação: Quadro, Linha do tempo, Interrogatórios ===== */
(function(){
const C=window.TOOLS_CFG; if(!C) return;
const K=C.key;
const ld=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(K+'_'+k));return v==null?d:v;}catch(e){return d;}};
const sv=(k,v)=>{try{localStorage.setItem(K+'_'+k,JSON.stringify(v));}catch(e){}};
let B=ld('board',{items:[],links:[]}), TL=ld('timeline',[]), IQ=ld('interrog',{});
let sub='quadro', linkMode=false, linkFrom=null, selLink=-1, tlFilter='';
const st=()=>C.stage();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const css=`
#v-invest .tsub{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px}
#v-invest .tsub button{font-family:"Special Elite",monospace;background:#2b3138;color:#e4dcc6;border:1px solid #4a535e;padding:8px 14px;border-radius:3px;cursor:pointer}
#v-invest .tsub button.on{background:#c09a4a;color:#111;border-color:#c09a4a}
.tb{display:flex;flex-wrap:wrap;gap:8px;align-items:center;background:#20262d;border:1px solid #3a434e;padding:8px 10px;border-radius:4px;margin-bottom:10px;font-family:"Special Elite",monospace;font-size:13px;color:#ddd}
.tb button,.tb select,.tb input{font-family:inherit;font-size:13px;background:#f1ead8;color:#222;border:1px solid #8b8066;border-radius:3px;padding:6px 9px;cursor:pointer}
.tb button.on{background:#8f1d21;color:#fff;border-color:#8f1d21}
.bwrap{display:grid;grid-template-columns:220px 1fr;gap:10px}
@media(max-width:820px){.bwrap{grid-template-columns:1fr}}
.pal{background:#20262d;border:1px solid #3a434e;border-radius:4px;padding:8px;max-height:640px;overflow:auto}
.pal h5{font-family:"Special Elite";color:#c09a4a;margin:10px 4px 6px;font-weight:normal;font-size:12px;letter-spacing:.08em}
.pal .pi{display:flex;align-items:center;gap:8px;padding:5px;border-radius:3px;cursor:pointer;color:#ddd;font-size:13px}
.pal .pi:hover{background:#2f3742}.pal .pi img{width:34px;height:34px;object-fit:cover;border:2px solid #fff}
.pal .pi .ic{width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:#f1ead8;color:#222;font-size:16px}
.board{position:relative;height:640px;overflow:auto;border-radius:4px;border:1px solid #3a434e;background:#8a6a45 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Ccircle cx='1' cy='1' r='.8' fill='%23735534'/%3E%3C/svg%3E")}
.binner{position:relative;width:1800px;height:1200px}
.binner svg{position:absolute;inset:0;width:1800px;height:1200px;z-index:5;pointer-events:none}
.binner svg g{pointer-events:visibleStroke}
.bcard{position:absolute;width:150px;background:#fbf8ef;color:#222;box-shadow:0 6px 14px rgba(0,0,0,.45);border-radius:2px;user-select:none;touch-action:none}
.bcard.sel{outline:3px solid #c09a4a}
.bcard .h{cursor:move;font-family:"Special Elite";font-size:11px;padding:4px 22px 4px 6px;background:#e9e0c8;position:relative;line-height:1.2}
.bcard .h .x{position:absolute;right:4px;top:2px;cursor:pointer;color:#8f1d21;font-size:14px}
.bcard img{width:100%;height:100px;object-fit:cover;display:block}
.bcard .t{padding:5px 6px;font-size:12.5px;font-family:"Source Serif 4",serif}
.bcard.note{background:#fff59a;width:160px}.bcard.note .h{background:#f2e470}
.bcard.note .t{min-height:60px;font-family:"Caveat",cursive;font-size:20px;line-height:1.1;outline:none}
.pin{position:absolute;top:-7px;left:50%;width:14px;height:14px;border-radius:50%;background:#c0392b;box-shadow:0 2px 3px rgba(0,0,0,.5);transform:translateX(-50%)}
.tlist{position:relative;margin:10px 0 0 10px;border-left:3px solid #c09a4a;padding-left:18px}
.tli{position:relative;background:#f1ead8;color:#222;padding:8px 34px 8px 12px;margin:10px 0;border-radius:2px;box-shadow:0 4px 10px rgba(0,0,0,.35)}
.tli::before{content:"";position:absolute;left:-27px;top:12px;width:14px;height:14px;border-radius:50%;background:var(--c,#c09a4a);border:2px solid #15171b}
.tli b{font-family:"Special Elite";color:#8f1d21;margin-right:8px}
.tli .who{font-family:"Special Elite";font-size:11px;padding:1px 6px;border-radius:8px;color:#fff;background:var(--c,#666);margin-left:6px}
.tli .src{display:block;font-size:12px;color:#6b6352;margin-top:2px}
.tli .del{position:absolute;right:8px;top:6px;cursor:pointer;color:#8f1d21;font-size:16px;background:none;border:0}
.iq{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}
.iqc{background:#f1ead8;color:#222;border-radius:2px;padding:14px;box-shadow:0 6px 14px rgba(0,0,0,.4)}
.iqc .hd{display:flex;gap:10px;align-items:center;margin-bottom:8px}.iqc .hd img{width:54px;height:66px;object-fit:cover;border:3px solid #fff;box-shadow:0 2px 5px rgba(0,0,0,.3)}
.iqc h4{margin:0;font-family:"Playfair Display",serif;font-size:18px}
.iqq{border-top:1px dashed #c8ba98;padding:8px 0}
.iqq .q{font-weight:600;font-size:14.5px}
.iqq .a{font-family:"Special Elite",monospace;font-size:13.5px;margin-top:6px;background:#fff;padding:8px;border-left:3px solid #8f1d21;line-height:1.5}
.iqq button{font-family:"Special Elite";font-size:12px;background:#8f1d21;color:#fff;border:0;padding:5px 9px;border-radius:3px;cursor:pointer;margin-top:5px}
.iqq button:disabled{background:#999;cursor:not-allowed}
.fichas{text-align:center;font-family:"Special Elite";color:#e4dcc6;margin-bottom:14px}
.fichas span{display:inline-block;width:16px;height:22px;background:#c09a4a;margin:0 2px;border-radius:2px;vertical-align:middle}.fichas span.u{background:#3a434e}
.lockq{font-size:13px;color:#8a8270;font-style:italic;padding:6px 0;border-top:1px dashed #c8ba98}
`;
const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);

const PCOL=['#8f1d21','#2b4a7a','#2f6b3a','#7a4a1a','#6b2f7a','#1f6f78','#a0522d','#555f6d','#b8860b','#3f3f8f'];
const pcolor=id=>{const i=C.people.findIndex(p=>p.id===id);return i<0?'#666':PCOL[i%PCOL.length];};

function render(){
 const el=document.getElementById('invest');if(!el)return;
 el.innerHTML=`<div class="tsub">${[['quadro','🧵 Quadro de investigação'],['tempo','🕰 Linha do tempo'],['interrog','🗣 Interrogatórios']].map(([k,l])=>`<button class="${sub===k?'on':''}" data-s="${k}">${l}</button>`).join('')}</div><div id="tbody"></div>`;
 el.querySelectorAll('.tsub button').forEach(b=>b.onclick=()=>{sub=b.dataset.s;render();});
 ({quadro:renderBoard,tempo:renderTL,interrog:renderIQ})[sub]();
}

/* ---------- QUADRO ---------- */
function evidence(){return C.evidence().filter(e=>e.stage<=st());}
function renderBoard(){
 const T=document.getElementById('tbody');
 T.innerHTML=`<div class="tb"><button id="bLink" class="${linkMode?'on':''}">🧵 ${linkMode?'Ligando: clique em 2 cartões':'Ligar cartões com fio'}</button>
 <input id="bLabel" placeholder="texto do fio (opcional)" style="width:180px">
 <select id="bColor"><option value="#c0392b">fio vermelho</option><option value="#1f4f9a">fio azul</option><option value="#1e7a3a">fio verde</option><option value="#222">fio preto</option></select>
 <button id="bNote">＋ Nota</button><button id="bDelLink" ${selLink<0?'disabled':''}>Apagar fio selecionado</button><button id="bClear">Limpar quadro</button>
 <span style="margin-left:auto;opacity:.8">Arraste pelo topo do cartão. Clique num fio para selecioná-lo.</span></div>
 <div class="bwrap"><div class="pal" id="pal"></div><div class="board" id="board"><div class="binner" id="binner"><svg id="bsvg"></svg></div></div></div>`;
 const pal=document.getElementById('pal');
 pal.innerHTML=`<h5>PESSOAS</h5>`+C.people.map(p=>`<div class="pi" data-t="person" data-r="${p.id}">${p.img?`<img src="${p.img}">`:'<div class="ic">👤</div>'}${esc(p.name)}</div>`).join('')+
 `<h5>PROVAS & FOTOS</h5>`+evidence().filter(e=>e.img).map(e=>`<div class="pi" data-t="photo" data-r="${e.id}"><img src="${e.img}">${esc(e.label)}</div>`).join('')+
 `<h5>DOCUMENTOS</h5>`+evidence().filter(e=>!e.img).map(e=>`<div class="pi" data-t="doc" data-r="${e.id}"><div class="ic">📄</div>${esc(e.label)}</div>`).join('');
 pal.querySelectorAll('.pi').forEach(p=>p.onclick=()=>{const bd=document.getElementById('board');B.items.push({id:'i'+Date.now(),t:p.dataset.t,r:p.dataset.r,x:bd.scrollLeft+40+Math.random()*120,y:bd.scrollTop+40+Math.random()*80,text:''});sv('board',B);drawBoard();});
 document.getElementById('bLink').onclick=()=>{linkMode=!linkMode;linkFrom=null;renderBoard();};
 document.getElementById('bNote').onclick=()=>{const bd=document.getElementById('board');B.items.push({id:'i'+Date.now(),t:'note',r:'',x:bd.scrollLeft+60,y:bd.scrollTop+60,text:'Escreva aqui…'});sv('board',B);drawBoard();};
 document.getElementById('bDelLink').onclick=()=>{if(selLink>=0){B.links.splice(selLink,1);selLink=-1;sv('board',B);renderBoard();}};
 const clr=document.getElementById('bClear');clr.onclick=()=>{if(clr.dataset.c){B={items:[],links:[]};sv('board',B);renderBoard();}else{clr.dataset.c=1;clr.textContent='Clique de novo para confirmar';setTimeout(()=>{clr.textContent='Limpar quadro';delete clr.dataset.c;},2500);}};
 drawBoard();
}
function cardHTML(it){
 let title='',body='';
 if(it.t==='person'){const p=C.people.find(x=>x.id===it.r)||{name:'?'};title=p.name;body=(p.img?`<img src="${p.img}">`:'')+(p.role?`<div class="t">${esc(p.role)}</div>`:'');}
 else if(it.t==='photo'||it.t==='doc'){const e=C.evidence().find(x=>x.id===it.r)||{label:'?'};title=e.label;body=(e.img?`<img src="${e.img}">`:'')+(e.sub?`<div class="t">${esc(e.sub)}</div>`:'');}
 else {title='Nota';body=`<div class="t" contenteditable="true" data-note="${it.id}">${esc(it.text)}</div>`;}
 return `<div class="bcard ${it.t==='note'?'note':''} ${linkFrom===it.id?'sel':''}" data-id="${it.id}" style="left:${it.x}px;top:${it.y}px"><div class="pin"></div><div class="h">${esc(title)}<span class="x" data-x="${it.id}">×</span></div>${body}</div>`;
}
function drawBoard(){
 const inner=document.getElementById('binner');if(!inner)return;
 inner.querySelectorAll('.bcard').forEach(n=>n.remove());
 inner.insertAdjacentHTML('beforeend',B.items.map(cardHTML).join(''));
 drawLinks();
 inner.querySelectorAll('.bcard').forEach(card=>{
  const id=card.dataset.id,it=B.items.find(x=>x.id===id);
  card.querySelector('.x').onclick=e=>{e.stopPropagation();B.items=B.items.filter(x=>x.id!==id);B.links=B.links.filter(l=>l.a!==id&&l.b!==id);sv('board',B);drawBoard();};
  const nt=card.querySelector('[data-note]');if(nt){nt.oninput=()=>{it.text=nt.innerText;sv('board',B);};}
  card.addEventListener('click',e=>{if(!linkMode||e.target.closest('.x'))return;
   if(!linkFrom){linkFrom=id;card.classList.add('sel');}
   else if(linkFrom!==id){B.links.push({a:linkFrom,b:id,label:document.getElementById('bLabel').value||'',c:document.getElementById('bColor').value});linkFrom=null;sv('board',B);drawBoard();}});
  const h=card.querySelector('.h');let sx,sy,ox,oy,drag=false;
  h.addEventListener('pointerdown',e=>{if(e.target.closest('.x'))return;drag=true;sx=e.clientX;sy=e.clientY;ox=it.x;oy=it.y;h.setPointerCapture(e.pointerId);});
  h.addEventListener('pointermove',e=>{if(!drag)return;it.x=Math.max(0,Math.min(1650,ox+e.clientX-sx));it.y=Math.max(0,Math.min(1100,oy+e.clientY-sy));card.style.left=it.x+'px';card.style.top=it.y+'px';drawLinks();});
  h.addEventListener('pointerup',()=>{if(drag){drag=false;sv('board',B);}});
 });
}
function drawLinks(){
 const svg=document.getElementById('bsvg');if(!svg)return;
 const pos=id=>{const it=B.items.find(x=>x.id===id);return it?[it.x+75,it.y+4]:null;};
 svg.innerHTML=B.links.map((l,i)=>{const a=pos(l.a),b=pos(l.b);if(!a||!b)return'';const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2+25;
  return `<g data-l="${i}" style="cursor:pointer"><path d="M${a[0]} ${a[1]} Q${mx} ${my} ${b[0]} ${b[1]}" stroke="transparent" stroke-width="14" fill="none"/><path d="M${a[0]} ${a[1]} Q${mx} ${my} ${b[0]} ${b[1]}" stroke="${l.c}" stroke-width="${selLink===i?4:2.4}" fill="none" ${selLink===i?'stroke-dasharray="6 4"':''}/>${l.label?`<text x="${mx}" y="${my-8}" text-anchor="middle" font-family="Special Elite" font-size="13" fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke">${esc(l.label)}</text>`:''}</g>`;}).join('');
 svg.querySelectorAll('g[data-l]').forEach(g=>g.onclick=()=>{selLink=+g.dataset.l;const b=document.getElementById('bDelLink');if(b)b.disabled=false;drawLinks();});
}

/* ---------- LINHA DO TEMPO ---------- */
function tkey(w){const d=w.match(/(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/);const t=w.match(/(\d{1,2})\s*[:h]\s*(\d{2})?/);
 let day=d?(+d[2])*100+(+d[1]):C.defaultDay;let hh=t?+t[1]:0,mm=t&&t[2]?+t[2]:0;if(!d&&C.dayRollover&&hh<C.dayRollover)day+=1;return day*10000+hh*100+mm;}
function renderTL(){
 const T=document.getElementById('tbody');
 T.innerHTML=`<div class="tb"><input id="tWhen" placeholder="${C.whenHint}" style="width:130px"><input id="tText" placeholder="o que aconteceu" style="flex:1;min-width:200px"><select id="tWho"><option value="">— pessoa —</option>${C.people.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select><input id="tSrc" placeholder="fonte (doc.)" style="width:150px"><button id="tAdd">＋ Adicionar</button></div>
 <div class="tb">Filtrar: <select id="tFil"><option value="">todas as pessoas</option>${C.people.map(p=>`<option value="${p.id}" ${tlFilter===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select><span style="margin-left:auto">${TL.length} registro(s) · ordenado por horário · fica salvo neste navegador</span></div>
 <div class="tlist">${TL.filter(e=>!tlFilter||e.who===tlFilter).sort((a,b)=>tkey(a.when)-tkey(b.when)).map(e=>`<div class="tli" style="--c:${e.who?pcolor(e.who):'#c09a4a'}"><b>${esc(e.when)}</b>${esc(e.text)}${e.who?`<span class="who">${esc((C.people.find(p=>p.id===e.who)||{}).name||'')}</span>`:''}${e.src?`<span class="src">fonte: ${esc(e.src)}</span>`:''}<button class="del" data-d="${e.id}">×</button></div>`).join('')||'<p style="color:#a69e88;font-style:italic">Nenhum registro ainda. Comecem pelos horários do Boletim de Ocorrência e dos depoimentos.</p>'}</div>`;
 document.getElementById('tAdd').onclick=()=>{const w=document.getElementById('tWhen').value.trim(),x=document.getElementById('tText').value.trim();if(!w||!x)return;TL.push({id:'t'+Date.now(),when:w,text:x,who:document.getElementById('tWho').value,src:document.getElementById('tSrc').value.trim()});sv('timeline',TL);renderTL();};
 document.getElementById('tText').onkeydown=e=>{if(e.key==='Enter')document.getElementById('tAdd').click();};
 document.getElementById('tFil').onchange=e=>{tlFilter=e.target.value;renderTL();};
 T.querySelectorAll('.del').forEach(b=>b.onclick=()=>{TL=TL.filter(e=>e.id!==b.dataset.d);sv('timeline',TL);renderTL();});
}

/* ---------- INTERROGATÓRIOS ---------- */
function renderIQ(){
 const T=document.getElementById('tbody');
 const total=C.fichasPorEtapa*st(),used=Object.keys(IQ).length,left=Math.max(0,total-used);
 T.innerHTML=`<div class="fichas">Fichas de interrogatório: ${'<span></span>'.repeat(left)}${'<span class="u"></span>'.repeat(Math.min(used,total))} &nbsp; ${left} de ${total} · vocês ganham ${C.fichasPorEtapa} a cada ${C.stageWord} ${C.stageWord==='etapa'?'aberta':'aberto'}. Escolham bem quem pressionar.</div>
 <div class="iq">${C.people.filter(p=>C.questions[p.id]).map(p=>{const qs=C.questions[p.id];return `<div class="iqc"><div class="hd">${p.img?`<img src="${p.img}">`:''}<div><h4>${esc(p.name)}</h4><div style="font-size:12.5px;color:#6b6352">${esc(p.role||'')}</div></div></div>`+
 qs.map((q,i)=>{const k=p.id+'_'+i;if(q.s>st())return `<div class="lockq">🔒 Nova pergunta disponível no ${C.stageWord} ${q.s}.</div>`;
  return `<div class="iqq"><div class="q">“${esc(q.q)}”</div>${IQ[k]?`<div class="a">${q.a}</div>`:`<button data-k="${k}" ${left<1?'disabled':''}>Perguntar (usa 1 ficha)</button>`}</div>`;}).join('')+`</div>`;}).join('')}</div>`;
 T.querySelectorAll('button[data-k]').forEach(b=>b.onclick=()=>{IQ[b.dataset.k]=1;sv('interrog',IQ);renderIQ();});
}

window.TOOLS={render};
const og=window.go;window.go=function(v){og(v);if(v==='invest')render();};
})();
