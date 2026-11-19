/* ================== CORE DATA ================== */
const D=[];
function doc(stage,id,group,title,sub,html){D.push({stage,id,group,title,sub,html});}
const dep=(nome,quem,data,body,extra='')=>`<div class="paper typed">${extra}<div class="meta">TERMO DE DECLARAÇÕES · Força-Tarefa Barqueiro · Declarante: ${nome} · ${quem} · ${data}</div>${body}<p style="margin-top:22px">Nada mais disse. Lido e achado conforme.</p></div>`;
const pic=(k,cap)=>`<img class="inlinepic" src="img/${k}.jpg" alt="${cap||''}">`;

const RULES=`
<h2>Bem-vindos à Força-Tarefa, detetives.</h2>
<p>Ouro Preto, julho de 1998. Em dezessete dias, cinco pessoas apareceram mortas na porta de igrejas barrocas, sentadas, de mãos cruzadas e com duas moedas sobre os olhos, como o pagamento que os antigos davam ao barqueiro que leva as almas. A imprensa batizou o assassino de <b>O Barqueiro</b>.</p>
<p>Vocês foram mandados de Belo Horizonte para reforçar a investigação. Recebem o arquivo completo em <b>cinco envelopes lacrados</b>.</p>
<h3>Objetivo final</h3>
<ul>
<li><b>Quem é o Barqueiro?</b></li>
<li><b>Uma das cinco mortes não foi obra dele.</b> Qual, e quem a cometeu?</li>
<li><b>Por que</b> o Barqueiro mata?</li>
<li>Bônus: quem seria a próxima vítima, e quantas moedas foram usadas pelo verdadeiro Barqueiro?</li>
</ul>
<h3>Os cinco envelopes</h3>
<ul>
<li><b>Envelope 1 · As três primeiras mortes</b> (5, 9 e 13 de julho)</li>
<li><b>Envelope 2 · A imprensa e a quarta vítima</b></li>
<li><b>Envelope 3 · A quinta vítima e o cofre</b></li>
<li><b>Envelope 4 · O arquivo de 1978</b></li>
<li><b>Envelope 5 · O Barqueiro</b></li>
</ul>
<p>Cada envelope só abre quando vocês acertam a pergunta do lacre. Errar não tem punição, mas discutam antes de chutar.</p>
<h3>Para jogar em casal</h3>
<ul>
<li>Leiam juntos <b>O caso &amp; a lore</b>, as <b>Vítimas</b> e os <b>Suspeitos</b>.</li>
<li>Um lê os depoimentos em voz alta e o outro mantém a <b>linha do tempo</b> na aba Anotações. A cada envelope, troquem.</li>
<li>Deixem os <b>Mapas</b> abertos num segundo aparelho, porque eles têm pistas.</li>
<li><b>Modo competitivo:</b> antes de abrir o Envelope 5, cada um escreve num papel quem acha que é o Barqueiro. Antes da acusação final, escrevem de novo.</li>
<li>Duração estimada: <b>6 a 9 horas</b>. Dá para jogar em duas ou três noites, porque o progresso fica salvo.</li>
</ul>
<div class="warn">⚠️ Conteúdo adulto: assassinatos em série, fotos de perícia (sem sangue explícito) e temas de morte. A solução só aparece depois da acusação final.</div>
<p class="small">Contexto: julho de 1998. Telefones fixos e orelhões, sem celular popular. O Real foi lançado em 1994. A Copa da França terminou em 12/07 com o Brasil derrotado na final. Ouro Preto recebe o Festival de Inverno da UFMG nesse mês.</p>
<p><button class="btn" onclick="go('caso')">Abrir o caso →</button> &nbsp; <button class="btn ghost" onclick="resetAll()">Reiniciar progresso</button></p>`;

const CASE=`
<div class="paper typed"><div class="stamp">URGENTE</div>
<div class="meta">OFÍCIO RESERVADO Nº 77/98 · Delegacia Regional de Ouro Preto · 24/07/1998 · De: Delegada Marta Quintão · Para: Equipe de reforço (DHPP/BH)</div>
<p>Colegas,</p>
<p>Agradeço a vinda de vocês. Não vou fingir que temos o controle da situação.</p>
<p>Desde o dia 5 temos cinco mortos. Quatro homens e uma mulher, todos encontrados de madrugada ou ao amanhecer diante de igrejas, sentados ou caídos junto às paredes, com duas moedas sobre os olhos e um santinho no bolso. A cidade está em pânico, o Festival de Inverno está esvaziando e o jornal local já deu nome ao assassino.</p>
<p>O que me tira o sono é que <b>as vítimas não são aleatórias</b>. Um delegado aposentado, um médico, um padre, um empresário e a esposa dele. Gente graúda, de outra geração. Alguma coisa liga essas pessoas, e eu ainda não sei o quê.</p>
<p>A quinta morte foi anteontem. Se o ritmo continuar, a próxima acontece no fim de semana.</p>
<p>O arquivo está organizado em envelopes, na ordem em que as coisas aconteceram. <b>Algumas informações nunca foram divulgadas à imprensa.</b> Prestem atenção a elas.</p>
<p>— <span class="sig">Marta Quintão</span><br>Delegada Regional</p></div>
<div class="prose">
<h2>Ouro Preto, a cidade das igrejas</h2>
<p>Antiga Vila Rica, capital do ouro no século XVIII, Ouro Preto se espalha por morros íngremes, ladeiras de pedra e mais de vinte igrejas barrocas. No inverno a neblina sobe dos vales e engole as torres ao amanhecer. Em 1998 a cidade vive de turismo, de estudantes das repúblicas da Universidade e da memória.</p>
<p>A tradição popular diz que os mortos devem ser enterrados com moedas sobre os olhos, para pagar o barqueiro que atravessa as almas para o outro lado. Nas casas mais antigas ainda se faz isso, ou ao menos se conta que se fazia.</p>
<h2>O verão de 1978, que ninguém comenta</h2>
<p>Os mais velhos lembram, em voz baixa, do <b>incêndio do casarão da Rua do Pilar</b>, uma pensão de estudantes que pegou fogo numa madrugada de agosto de 1978. Três jovens morreram. O inquérito concluiu que foi um acidente com velas. O casarão nunca foi reconstruído: as ruínas enegrecidas continuam lá, ao lado da Matriz do Pilar, cercadas de mato e de uma disputa judicial que já dura vinte anos.</p>
<h2>Julho de 1998</h2>
<div class="timeline">
<div><b>05/07 (dom)</b> 1ª vítima: Wanderley Pires, adro da Igreja de São Francisco de Assis</div>
<div><b>09/07 (qui)</b> 2ª vítima: Dr. Hélio Arantes, escadaria da Igreja do Carmo</div>
<div><b>12/07 (dom)</b> O Brasil perde a final da Copa para a França por 3 a 0</div>
<div><b>13/07 (seg)</b> 3ª vítima: Padre Ernesto Valadares, Capela do Padre Faria</div>
<div><b>15/07 (qua)</b> O jornal <i>O Inconfidente</i> publica "O BARQUEIRO DE OURO PRETO"</div>
<div><b>18/07 (sáb)</b> 4ª vítima: Sônia Mendes Lisboa, adro da Igreja de Santa Efigênia</div>
<div><b>22/07 (qua)</b> 5ª vítima: Armando Teixeira Lisboa, adro da Matriz do Pilar</div>
<div><b>24/07 (sex)</b> Vocês chegam a Ouro Preto</div>
</div></div>`;

/* ---------- PEOPLE ---------- */
const VICTIMS=[
 {id:'wanderley',n:'1ª',name:'Wanderley Pires',age:66,role:'Delegado aposentado',when:'Encontrado em 05/07, 5h40 · Igreja de São Francisco de Assis',desc:'Delegado de Ouro Preto entre 1971 e 1989. Viúvo, morava sozinho no Largo de Coimbra. Bebia todas as noites no Bar do Lúcio. Pai do cabo PM Vicente Pires. Conhecido pela truculência e por "resolver" inquéritos depressa.'},
 {id:'helio',n:'2ª',name:'Dr. Hélio Arantes',age:61,role:'Médico, ex-legista',when:'Encontrado em 09/07, 6h10 · Escadaria da Igreja do Carmo',desc:'Foi médico-legista do posto de Ouro Preto nos anos 70. Hoje dono da Clínica Arantes, a mais cara da cidade. Viúvo, pai da Dra. Celina Arantes. Vaidoso e influente.'},
 {id:'ernesto',n:'3ª',name:'Padre Ernesto Valadares',age:70,role:'Padre aposentado',when:'Encontrado em 13/07, 5h50 · Capela do Padre Faria',desc:'Vigário de várias paróquias de Ouro Preto por quarenta anos. Aposentado, morava numa casinha ao lado da Capela do Padre Faria. Respeitado, mas com fama de conservador e de "amigo dos ricos".'},
 {id:'sonia',n:'4ª',name:'Sônia Mendes Lisboa',age:49,role:'Esposa de Armando Lisboa',when:'Encontrada em 18/07, 6h00 · Igreja de Santa Efigênia',desc:'Natural de Belo Horizonte, casou-se com Armando em 1986. Elegante e ativa na sociedade local. Segundo boatos, o casamento estava acabando. Madrasta de Mariana Lisboa.'},
 {id:'armando',n:'5ª',name:'Armando Teixeira Lisboa',age:64,role:'Empresário',when:'Encontrado em 22/07, 5h30 · Matriz de N. Sra. do Pilar',desc:'Dono do Hotel Pilar Palace e de meia cidade. Nos anos 70 tinha imóveis alugados a estudantes, entre eles o casarão da Rua do Pilar. Esteve detido para averiguação pela morte da esposa e foi liberado em 20/07.'}
];
const CHARS=[
 {id:'ruy',name:'Ruy Campello',age:57,role:'Jornalista · O Inconfidente',desc:'Editor e principal repórter do jornal semanal da cidade. Foi ele quem batizou o assassino. Parece sempre saber mais que a polícia. Trabalha no jornal desde 1970.',facts:'Fuma muito. Tem um Opala marrom.'},
 {id:'bento',name:'Irmão Bento Siqueira',age:45,role:'Sacristão de São Francisco de Assis',desc:'Leigo consagrado, cuida da igreja há vinte anos. Encontrou a primeira vítima. Tem as chaves de São Francisco. É estranho, solitário e muito devoto. Os moradores o acham sinistro.',facts:'Mora nos fundos da igreja.'},
 {id:'celina',name:'Dra. Celina Arantes',age:34,role:'Médica · filha da 2ª vítima',desc:'Clínica geral na Santa Casa. Relação péssima com o pai, que a deserdou de fato da clínica. Única herdeira. Fria no depoimento.',facts:'Tem acesso a sedativos.'},
 {id:'vicente',name:'Cabo Vicente Pires',age:40,role:'Policial Militar · filho da 1ª vítima',desc:'Cabo da PM em Ouro Preto. Violento, já respondeu a três sindicâncias. Jurou "pegar o desgraçado". Ronda as igrejas de madrugada por conta própria.',facts:'Foi quem encontrou a 5ª vítima.'},
 {id:'mariana',name:'Mariana Teixeira Lisboa',age:24,role:'Estudante · filha de Armando',desc:'Estuda Geologia e mora numa república estudantil. Brigou com o pai e odiava a madrasta, Sônia. Herdeira de uma fortuna enorme.',facts:'Estuda na mesma escola que as vítimas de 1978.'},
 {id:'lidia',name:'Profa. Lídia Salles',age:41,role:'Professora de História',desc:'Leciona na Escola de Minas e pesquisa a história da cidade. Irmã de uma das estudantes mortas no incêndio de 1978. Há anos tenta reabrir o caso.',facts:'Escreveu ao Ministério Público em 1997.'},
 {id:'daniel',name:'Daniel R. Sá',age:38,role:'Restaurador de arte sacra',desc:'Contratado pela Fundação de Arte de Ouro Preto para restaurar os altares de São Francisco e do Carmo. Calmo, educado e meticuloso. Trabalha muitas vezes de madrugada, "quando a igreja fica em silêncio". Mora em BH há vinte anos e voltou à cidade em janeiro.',facts:'Usa uma luva branca de algodão na mão esquerda.'},
 {id:'lucio',name:'Lúcio Bragança',age:55,role:'Dono do Bar do Lúcio · ex-bombeiro',desc:'Foi bombeiro até 1979, quando saiu "por problemas de saúde". Hoje tem um botequim na Rua São José. Bebe tanto quanto vende. A 1ª vítima era freguês diário.',facts:'Viu de perto o incêndio de 1978.'}
];
const WIT=[
 ['zelia','Dona Zélia Vilela','Mãe de Tiago Vilela, morto no incêndio de 1978. Leva flores às ruínas todo 14 de agosto.'],
 ['marta','Delegada Marta Quintão','Chefe da força-tarefa. Assumiu a Regional em 1996. Não tem ligação com a cidade antiga.'],
 [null,'Dona Iraci Moura','Governanta da casa dos Lisboa há 15 anos.'],
 [null,'Dona Cota (Maria Aparecida Rocha)','Dona da pensão na Rua do Carmo onde Daniel Sá está hospedado.'],
 [null,'Seu Geraldo Fonseca','Dono de pousada na Rua Brigadeiro Musqueira. Sofre de insônia.'],
 [null,'Seu Tião (Sebastião Reis)','Caseiro da Capela do Padre Faria, vizinho do Padre Ernesto.'],
 [null,'Seu Jonas','Gari da prefeitura. Encontrou a 2ª vítima.'],
 [null,'Dr. Fausto Brum','Médico-legista do IML de Ouro Preto, responsável pelas necropsias de 1998.'],
 [null,'Perita Sandra Lage','Instituto de Criminalística, seção de Ouro Preto.']
];

/* ---------- PHOTOS ---------- */
const PH={
 v1:{stage:1,r:'-2deg',cap:'05/07 · São Francisco de Assis',back:'Wanderley Pires, sentado contra a parede lateral do adro, mãos cruzadas, a esquerda sobre a direita. Duas moedas de cobre sobre os olhos.',tech:'IC/OP · Foto 1-04 · 05/07/98 06h20 · Perita S. Lage'},
 v2:{stage:1,r:'1.5deg',cap:'09/07 · Escadaria do Carmo',back:'Dr. Hélio Arantes, sentado no penúltimo degrau, encostado no portal de pedra-sabão. Mesma posição das mãos. Mesmas moedas.',tech:'IC/OP · Foto 2-02 · 09/07/98 06h45'},
 v3:{stage:1,r:'-1deg',cap:'13/07 · Capela do Padre Faria',back:'Padre Ernesto Valadares, encostado na porta da capela, de batina. Mãos cruzadas, a esquerda sobre a direita. Moedas de cobre.',tech:'IC/OP · Foto 3-01 · 13/07/98 06h30'},
 iml1:{stage:1,r:'-1deg',cap:'IML · o pescoço da 1ª vítima',back:'Wanderley Pires na mesa de necropsia. Sulco horizontal e contínuo, de 4 mm, com o padrão trançado do cordão impresso na pele. Petéquias (pontinhos de sangue) acima e abaixo do sulco: ele estava vivo quando o laço apertou.',tech:'IML/OP · Necropsia 188/98 · Foto 07 · Dr. Fausto Brum'},
 olhos:{stage:1,r:'2deg',cap:'Detalhe: as moedas',back:'Detalhe do rosto da 1ª vítima, já no IML, com as moedas mantidas na posição original. Foram colocadas com cuidado, com o lado da coroa portuguesa para cima.',tech:'IML/OP · Foto 1-07 · ⚠ INFORMAÇÃO RESERVADA: não divulgar o tipo de moeda'},
 santinhos:{stage:1,r:'-2.5deg',cap:'Santinhos das vítimas 1 a 3',back:'Os santinhos encontrados no bolso interno esquerdo do paletó ou da batina, fotografados pela frente. A data manuscrita está no verso (ver laudo).',tech:'IC/OP · Lab. · 16/07/98 · ⚠ INFORMAÇÃO RESERVADA: não divulgar a data do verso'},
 estudantes:{stage:1,r:'1deg',cap:'Foto antiga na casa de W. Pires',back:'Encontrada pela perícia numa gaveta da casa de Wanderley Pires, dentro de uma pasta sem identificação. Três jovens numa escadaria de igreja.',tech:'Verso da foto, a lápis, letra antiga: "T., B. e C. — julho/78". Apreendida em 05/07.'},
 v4:{stage:2,r:'2deg',cap:'18/07 · Santa Efigênia',back:'Sônia Mendes Lisboa, caída de lado contra o muro do adro, braços soltos. Sangue escuro na nuca. Um fio de náilon frouxo no pescoço. Uma moeda pequena sobre o olho e a outra caída na poça. Marcas de pneu na lama.',tech:'IC/OP · Foto 4-03 · 18/07/98 06h40 · chuva fina durante a noite'},
 moedasreal:{stage:2,r:'-1.5deg',cap:'Moedas e santinho da 4ª vítima',back:'Duas moedas de 1 centavo do Real (cunhagem de 1997) e um santinho de São Miguel Arcanjo. Verso em branco.',tech:'IC/OP · Lab. · 19/07/98'},
 v5:{stage:3,r:'-2deg',cap:'22/07 · Matriz do Pilar',back:'Armando Teixeira Lisboa, sentado contra a parede da Matriz. À direita, o muro das ruínas do casarão. Mãos cruzadas, a esquerda sobre a direita. Moedas de cobre.',tech:'IC/OP · Foto 5-01 · 22/07/98 06h05'},
 cofre:{stage:3,r:'1deg',cap:'Cofre do escritório de A. Lisboa',back:'Cofre embutido atrás de um quadro no escritório da mansão. Aberto com ordem judicial em 22/07.',tech:'IC/OP · Foto 5-14'},
 chave:{stage:3,r:'-1deg',cap:'Porta-malas do Santana de A. Lisboa',back:'Chave de roda encontrada sob o carpete do porta-malas, fora do lugar original (o suporte fica na lateral).',tech:'IC/OP · Foto 5-22 · 22/07/98'},
 luminol:{stage:3,r:'2deg',cap:'Luminol no porta-malas',back:'Reação positiva no carpete do porta-malas, que tinha sido lavado.',tech:'IC/OP · Foto 5-25 · 22/07/98 · ambiente escurecido'},
 incendio:{stage:4,r:'-1.5deg',cap:'14/08/1978 · O incêndio',back:'Recorte do arquivo do jornal O Inconfidente, edição de 17/08/1978. O casarão da Rua do Pilar em chamas.',tech:'Arquivo O Inconfidente · fotógrafo não identificado'},
 porta:{stage:4,r:'1deg',cap:'1978 · Porta principal do casarão',back:'Foto encontrada entre os papéis guardados por Lúcio Bragança. Não consta do inquérito oficial.',tech:'Verso, letra de Lúcio: "Tirada às 5h20 de 14/8/78. A corrente estava do lado de FORA. Me mandaram esquecer."'},
 ruinas:{stage:4,r:'-2deg',cap:'1998 · As ruínas',back:'As ruínas do casarão da Rua do Pilar, vinte anos depois. Ao fundo, a torre da Matriz do Pilar.',tech:'IC/OP · Foto 5-30 · 23/07/98'},
 vintens:{stage:5,r:'1.5deg',cap:'As moedas de cobre',back:'As oito moedas de cobre recolhidas nas vítimas 1, 2, 3 e 5, lado a lado.',tech:'IC/OP · Lab. · 23/07/98 · ver laudo numismático'},
 andaime:{stage:5,r:'-1.5deg',cap:'Andaime no altar do Carmo',back:'Andaime da restauração no altar-mor da Igreja do Carmo, fotografado à noite durante a vistoria de 24/07. Sobre a tábua, uma luva de algodão.',tech:'IC/OP · Foto 6-02 · 24/07/98 02h10'}
};
