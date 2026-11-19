window.TOOLS_CFG={
 key:'barqueiro_tools', stageWord:'envelope', fichasPorEtapa:3, defaultDay:705, dayRollover:0, whenHint:'05/07 02:30',
 stage:()=>S.stage,
 people:[...CHARS.map(c=>({id:c.id,name:c.name,role:c.role,img:'img/'+c.id+'.jpg'})),{id:'zelia',name:'Dona Zélia Vilela',role:'Mãe de Tiago (1978)',img:'img/zelia.jpg'},...VICTIMS.map(v=>({id:v.id,name:v.name,role:v.n+' vítima',img:'img/'+v.id+'.jpg'}))],
 evidence:()=>[...Object.entries(PH).map(([k,p])=>({id:k,label:p.cap,img:'img/'+k+'.jpg',stage:p.stage})),...D.map(d=>({id:d.id,label:d.title,sub:d.sub,stage:d.stage}))],
 questions:{
  ruy:[
   {s:1,q:'O senhor conhecia as três primeiras vítimas?',a:'Todo mundo aqui se conhece. Cobri o Wanderley por vinte anos, o Hélio era meu médico, o padre fez o meu casamento.'},
   {s:2,q:'Por que publicou detalhes que a polícia escondia?',a:'Porque o povo tem direito de saber… (pausa) e porque eu queria que o assassino lesse e soubesse que eu estava do lado dos mortos. Esqueça que eu disse isso.'},
   {s:4,q:'O senhor recebeu dinheiro em agosto de 1978?',a:'(longo silêncio) Recebi. Cinquenta mil. Minha mulher estava grávida. Eu escrevi o que me mandaram escrever.'}],
  bento:[
   {s:1,q:'Quem mais entra no adro de São Francisco à noite?',a:'Só o restaurador. Às vezes ouço o andaime ranger às duas, três da manhã. Ele fala baixinho enquanto trabalha. Acho que reza.'},
   {s:2,q:'Onde o senhor estava de 11 a 14 de julho?',a:'Em retiro na Casa de Retiro de Mariana, com doze irmãos. Voltei no dia 14 à tarde e já encontrei a cidade sabendo do padre.'},
   {s:5,q:'O senhor viu o restaurador mexer nas moedas do altar?',a:'Limpava uma por uma, com um pincel, como se fossem relíquias. Uma vez disse: "cada uma delas tem dono".'}],
  celina:[
   {s:1,q:'Seu pai falava do incêndio de 1978?',a:'Nunca. Uma vez, bêbado, disse que tinha feito "um favor ao Armando que valeu um terreno". Eu não entendi.'},
   {s:3,q:'Alguém lhe pediu receita de diazepam?',a:'Não. Mas qualquer farmácia da Rua São José vende com receita velha. E muita gente nesta cidade dorme mal.'}],
  vicente:[
   {s:1,q:'Onde o senhor estava quando seu pai morreu?',a:'Na viatura 2310 com o Soldado Rocha, a noite inteira. Está na escala.'},
   {s:2,q:'Por que passou detalhes ao jornal?',a:'Pra polícia civil se mexer. E o Ruy me pagou umas cervejas. Os detalhes eu chutei metade, admito.'},
   {s:4,q:'Seu pai falava de 1978?',a:'Dizia que o casarão foi "o dia de trabalho mais bem pago da vida dele". Eu achava que era piada de bêbado.'}],
  mariana:[
   {s:2,q:'Onde você estava na noite de 17 de julho?',a:'Na festa da Vaticano das nove às quatro. Trinta pessoas e um rolo de fotos.'},
   {s:3,q:'Onde a Sônia guardou as cópias dos papéis?',a:'Ela disse: "na casa de quem perdeu mais naquele incêndio". Eu não sei quem é.'},
   {s:4,q:'Seu pai alguma vez comentou o incêndio?',a:'Só que "foi a melhor coisa que aconteceu na vida dele". Hoje eu entendo, e tenho nojo.'}],
  lidia:[
   {s:1,q:'O que significa 14 de agosto de 1978 para a senhora?',a:'O dia em que a minha irmã morreu queimada.'},
   {s:4,q:'Quem teve acesso à sua carta ao Ministério Público?',a:'Muita gente. Deixei uma cópia no arquivo da biblioteca da Escola de Minas, na pasta do casarão. O livro de consulta registra quem pegou… lembro de uma assinatura de janeiro deste ano: "D. R. Sá".'},
   {s:5,q:'A senhora reconhece o nome Daniel Rennó de Sá?',a:'(empalidece) Era o irmão do Caio. O menino da mão enfaixada no enterro.'}],
  daniel:[
   {s:1,q:'Por que o senhor trabalha de madrugada?',a:'O ouro só mostra a verdade sob luz baixa. E uma igreja vazia é o único lugar onde eu consigo pensar.'},
   {s:2,q:'Onde o senhor estava na noite de 17 de julho?',a:'Falando de ouro para quarenta pessoas no Carmo. Pergunte ao padre Joaquim. Saímos juntos às 23h40.'},
   {s:3,q:'O senhor conhecia o Padre Ernesto?',a:'Ele me deu a primeira comunhão. Depois deu outras coisas às pessoas erradas.'},
   {s:5,q:'Onde estão as oito moedas que faltam?',a:'Onde deviam estar. Sobre os olhos de quem tinha uma dívida a pagar.'}],
  lucio:[
   {s:1,q:'O que o Wanderley disse sobre o cartão?',a:'"Estão me cobrando o casarão, Lúcio." Riu, mas a mão tremia no copo.'},
   {s:4,q:'Por que o senhor guardou o rascunho por vinte anos?',a:'Porque um dia alguém ia perguntar. Demorou, hein.'}],
  zelia:[
   {s:4,q:'Quem a senhora acha que está fazendo isso?',a:'Alguém que perdeu tanto quanto eu e não teve fé para esperar a justiça de Deus. A Ana Lúcia sempre escrevia que o caçula nunca se curou.'}]
 }
};
