window.TOOLS_CFG={
 key:'marques_tools', stageWord:'envelope', fichasPorEtapa:3, defaultDay:915, dayRollover:12, whenHint:'01:13 ou 17/09 23:04',
 stage:()=>S.stage,
 people:[...VICTIMS.map(v=>({id:v.id,name:v.name,role:'Desaparecida',img:'img/'+v.id+'.jpg'})),...CHARS.map(c=>({id:c.id,name:c.name,role:c.role,img:'img/'+c.id+'.jpg'}))],
 evidence:()=>[...Object.entries(PH).map(([k,p])=>({id:k,label:p.cap,img:'img/'+k+'.jpg',stage:p.stage})),...D.filter(d=>!d.cofre||S.cofre).map(d=>({id:d.id,label:d.title,sub:d.sub,stage:d.stage}))],
 questions:{
  otavio:[
   {s:1,q:'O senhor tem a chave de alguma área do hotel?',a:'Tive todas, durante a obra. Entreguei o molho ao hotel na reabertura. Algumas coisas de acervo ainda estão sob guarda da construtora, burocracia.'},
   {s:2,q:'O senhor usa a escada de serviço?',a:'Com este joelho? Escada é o meu inimigo pessoal, meu caro.'},
   {s:4,q:'O que o senhor comprou na segunda à noite?',a:'(pausa curta) Remédio, provavelmente. Não me lembro. Que tipo de pergunta é essa para o homem que paga vocês?'}],
  helena:[
   {s:1,q:'Quem sabia que a Marina ia dormir no hotel?',a:'A família toda. Ela estava na lista de quartos. A Patrícia distribuiu para todo mundo.'},
   {s:3,q:'Qual é a senha "de sempre" da Marina?',a:'A vó. Mas qual coisa da vó… o aniversário, acho. Eu nunca lembro se ela usava o de janeiro ou o de novembro. Eu sempre usei o de janeiro pra tudo, é o do RG.'},
   {s:4,q:'O tio Otávio e a Marina se davam bem?',a:'Ele é padrinho dela. Levava ela em obra desde criança. Este ano ela não quis convidar ele para o aniversário dela, em março. Achei estranho.'}],
  rodrigo:[
   {s:1,q:'Onde você estava às 01h15?',a:'No 801. A Helena chorando no banheiro por causa do celular. Eu no telefone do quarto, ligando para o meu irmão para ele procurar o aparelho no salão.'},
   {s:3,q:'O que havia no contrato que o Augusto te pediu para olhar?',a:'Uma prestadora de serviços estruturais. Lumen alguma coisa. Valor alto para uma empresa com capital de dez mil reais. Eu disse ao Otávio que aquilo não passaria numa auditoria. Ele riu e disse: "nunca passou por nenhuma".'}],
  augusto:[
   {s:2,q:'Quem cuidava das chaves e do acervo do prédio depois da obra?',a:'A Diretoria de Engenharia. O Otávio. Ele tem um apego àquele prédio quase maior do que o da Marina.'},
   {s:4,q:'O senhor conhece a Lumen Serviços?',a:'(lê os papéis, fica muito pálido) Eu assinei esses cheques. O Otávio me trazia as notas com o visto dele e eu assinava. Vinte anos assinando o que ele trazia.'}],
  vera:[
   {s:2,q:'A senhora viu alguém perto da sua bolsa?',a:'O Otávio estava sentado do lado. Ele sempre senta perto das bolsas, é o cavalheiro da família. Ele até me disse "pode ir, Verinha, eu tomo conta".'},
   {s:3,q:'A senhora acha que a Marina fugiu?',a:'A Marina não foge, a Marina enfrenta. Foi isso que sempre me irritou nela.'}],
  debora:[
   {s:1,q:'Do que tratava a denúncia?',a:'Não vou dizer o conteúdo. Vou dizer que era uma obra conhecida e que a Marina disse: "se chover forte num dia de festa, aquilo pode cair na cabeça de alguém".'},
   {s:3,q:'Você contou a alguém sobre o encontro?',a:'Ao meu editor e a mais ninguém. Mas o meu editor almoça com metade dos empreiteiros da cidade. Não é a primeira vez que vaza.'}],
  caio:[
   {s:2,q:'Você viu alguém de smoking na área de serviço?',a:'Quando eu desci a última caixa, umas 01h25, ouvi passos na escada de serviço, descendo devagar, de lado, tipo quem tem dor no joelho. Não vi quem era.'},
   {s:3,q:'A Marina falava da obra do hotel com você?',a:'O tempo todo. Ela tinha um tesão por aquele porão. Dizia que tinha um cofre de banco lá embaixo "do tamanho do meu apartamento".'}],
  patricia:[
   {s:1,q:'Quem pediu o quarto 512 para o Otávio?',a:'Ele mesmo. Eu tinha posto ele no 7º, com a família. Ele pediu para trocar: "quero dormir longe da bagunça". Ficou no 5º.'},
   {s:3,q:'Quem sentou na mesa dos noivos durante a festa?',a:'Os noivos, os pais, os padrinhos principais. Otávio, ao lado da Vera, de frente para o lugar da Helena.'}],
  sergio:[
   {s:2,q:'Quem tem a outra chave do rack?',a:'A gerência. E a recepção, na gaveta. Só.'},
   {s:4,q:'O senhor que te pagou: alguma outra coisa que você lembre?',a:'O perfume. Perfume caro, de velho. E a aliança de viúvo no dedo, dessas que a pessoa usa no dedo errado depois que a mulher morre.'}],
  wilson:[
   {s:2,q:'O senhor ouviu a voz do homem de novo esta semana?',a:'Ouvi uma voz parecida, sim. No lobby, ontem, falando com o gerente sobre "devolver chaves do acervo". Um senhor grisalho que mancava. Não posso jurar.'},
   {s:3,q:'O senhor viu alguém no corredor às 01h31?',a:'Ninguém. Mas o corredor tinha cheiro de espumante e de um perfume caro, de homem velho. Desses que ficam no ar.'}],
  lucia:[
   {s:2,q:'Quem tem a chave do armário velho da rouparia?',a:'Ninguém do hotel. Disseram que é chave de elevador, quadrada, e ficou com a construtora.'},
   {s:4,q:'O que fica no depósito D-3 da garagem?',a:'Material da obra, dizem. Nunca vi abrirem. A porta é da construtora, o hotel não tem a chave. Meu pessoal da lavanderia jura que de noite sai um ventinho frio pelas grelhas da parede ao lado.'}]
 }
};
