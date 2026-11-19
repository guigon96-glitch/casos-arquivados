/* ================== ENVELOPE 1 ================== */
const bo=(n,dt,loc,vit,quem,hist)=>`<div class="paper typed"><div class="stamp">B.O.</div><div class="meta">POLÍCIA CIVIL DE MINAS GERAIS · DELEGACIA REGIONAL DE OURO PRETO · BOLETIM DE OCORRÊNCIA Nº ${n}</div>
<table><tr><th>Natureza</th><td>Homicídio consumado</td></tr><tr><th>Data/hora da comunicação</th><td>${dt}</td></tr><tr><th>Local</th><td>${loc}</td></tr><tr><th>Vítima</th><td>${vit}</td></tr><tr><th>Quem encontrou</th><td>${quem}</td></tr></table><h3>HISTÓRICO</h3>${hist}</div>`;

doc(1,'reserva','Instruções','Nota de serviço: informações reservadas','Força-Tarefa · 06/07/1998',`<div class="paper typed"><div class="stamp">RESERVADO</div>
<div class="meta">NOTA DE SERVIÇO Nº 01/98 · Força-Tarefa "Barqueiro" · 06/07/1998 (atualizada em 14/07)</div>
<p>Para distinguir o verdadeiro autor de imitadores e de falsas confissões, os seguintes detalhes <b>NÃO DEVEM SER DIVULGADOS</b> à imprensa nem comentados fora da equipe:</p>
<ol>
<li>O <b>tipo de moeda</b> colocado sobre os olhos.</li>
<li>O <b>santo</b> representado no santinho e a <b>anotação manuscrita no verso</b>.</li>
<li>O <b>material do laço</b> usado no estrangulamento.</li>
<li>A <b>posição das mãos</b>: cruzadas, a esquerda sobre a direita.</li>
</ol>
<p>À imprensa pode-se confirmar apenas que havia "moedas sobre os olhos" e "um objeto religioso".</p>
<p>Quem descumprir esta nota responderá administrativamente.</p>
<p>— <span class="sig">M. Quintão</span></p></div>`);

/* ---------- VÍTIMA 1 ---------- */
doc(1,'bo1','1ª vítima · Wanderley Pires','B.O. nº 2.211/98','05/07/1998',bo('2.211/98','05/07/1998, 05h52, telefone da sacristia','Adro (pátio murado) da Igreja de São Francisco de Assis, Largo de Coimbra','WANDERLEY PIRES, 66 anos, delegado de polícia aposentado','Irmão Bento Siqueira, sacristão',
`<p>O sacristão abriu o portão lateral do adro às 05h40 para preparar a missa das 7h e encontrou um homem sentado no chão, encostado na parede lateral da igreja, sem vida. Reconheceu o Dr. Wanderley Pires, ex-delegado da cidade.</p>
<p>A vítima vestia terno marrom e tinha <b>duas moedas sobre os olhos</b> e as mãos cruzadas no colo. No bolso interno esquerdo do paletó havia um santinho.</p>
<p>O <b>portão do adro estava trancado</b> a cadeado quando o sacristão chegou. O muro do adro tem cerca de 2,20 m de altura.</p>
<p>A guarnição isolou o local às 06h05. O filho da vítima, Cabo PM Vicente Pires, apareceu às 06h30, muito alterado, e teve de ser contido pelos colegas.</p>`));

doc(1,'local1','1ª vítima · Wanderley Pires','Relatório de local','Perita Sandra Lage',`<div class="paper typed"><div class="stamp blue">PERÍCIA</div>
<div class="meta">INSTITUTO DE CRIMINALÍSTICA · SEÇÃO OURO PRETO · LEVANTAMENTO DE LOCAL Nº 1/98 · Perita Sandra Lage · 05/07/1998</div>
<h3>1. LOCAL</h3><p>O adro de São Francisco de Assis é cercado por muro de pedra, com portão de ferro no lado do Largo de Coimbra. O cadeado não tem sinais de arrombamento. A parede da igreja, na face sul, está coberta de orvalho. Neblina densa até as 7h.</p>
<h3>2. CORPO</h3><p>Sentado no lajeado, com as costas na parede, as pernas estendidas e as mãos cruzadas no colo, <b>a esquerda sobre a direita</b>. Cabeça pendida para a frente. Duas moedas de cobre sobre as pálpebras. Ao redor do pescoço, um sulco fino e horizontal. Os sapatos estão limpos, sem barro, apesar de a rua estar molhada.</p>
<h3>3. VESTÍGIOS</h3><ul><li>No lajeado, a uns 4 m do corpo, há duas trilhas de arrasto curtas, vindas do portão. O corpo foi trazido de fora para dentro do adro.</li>
<li>Na lapela esquerda, partículas brilhantes douradas e um pó avermelhado. Recolhidos.</li>
<li>No bolso interno esquerdo, um santinho (ver laudo de objetos).</li>
<li>Carteira, relógio e aliança intactos. <b>Não foi roubo.</b></li></ul>
<h3>4. OBSERVAÇÃO</h3><p>Quem trouxe o corpo tinha a chave do cadeado, ou abriu e fechou o portão de algum outro modo. Não há marcas no muro.</p>
<p><span class="sig">Sandra Lage</span></p></div>`);

doc(1,'nec1','1ª vítima · Wanderley Pires','Laudo de necropsia nº 188/98','IML · Dr. Fausto Brum',`<div class="paper typed"><div class="stamp">LAUDO</div>
<div class="meta">INSTITUTO MÉDICO-LEGAL · POSTO DE OURO PRETO · NECROPSIA Nº 188/98 · Legista Dr. Fausto Brum · 05/07/1998</div>
<p><b>Examinado:</b> Wanderley Pires, 66 anos.</p>
<h3>CAUSA DA MORTE</h3><p><b>Asfixia mecânica por estrangulamento com laço.</b> O sulco é horizontal e uniforme, com 4 mm de largura e padrão trançado. Na pele foram recolhidas <b>fibras de algodão impregnadas de cera de abelha</b>, de um cordão fino e encerado.</p>
<h3>HORÁRIO</h3><p>Morte estimada entre <b>2h e 4h de 05/07</b>, pela temperatura e pela rigidez. As manchas de hipóstase são compatíveis com a posição sentada em que o corpo foi encontrado: ele foi posicionado logo após a morte.</p>
<h3>TOXICOLOGIA</h3><p>Alcoolemia de <b>2,1 g/L</b> (embriaguez acentuada). <b>Diazepam</b> no sangue em nível acima do terapêutico. É um sedativo, ingerido entre 30 e 90 minutos antes da morte.</p>
<h3>OUTROS ACHADOS</h3><p>Não há lesões de defesa nem material sob as unhas. A vítima provavelmente estava sonolenta e sem reação quando foi estrangulada, por trás.</p>
<p><span class="sig">Dr. Fausto Brum</span></p></div>`);

doc(1,'arrec1','1ª vítima · Wanderley Pires','Auto de arrecadação · casa da vítima','05/07/1998',`<div class="paper typed">
<div class="meta">AUTO DE ARRECADAÇÃO · Residência de Wanderley Pires, Largo de Coimbra, 14 · 05/07/1998, 15h</div>
<p>Arrecadados na gaveta da escrivaninha da vítima:</p>
<ol><li>Uma pasta de cartolina verde, com a etiqueta "PILAR 37" escrita à mão. Dentro havia apenas uma fotografia colorida antiga de três jovens numa escadaria de igreja (ver foto), com a anotação a lápis no verso: "T., B. e C. — julho/78".</li>
<li>Um envelope branco sem remetente, carimbado pelo correio de Ouro Preto em 29/06/1998, endereçado à vítima em letra de forma. Dentro, um cartão com a frase:
<p style="text-align:center;font-size:20px;margin:14px 0">"XIV · VIII · MCMLXXVIII<br>Vinte anos. O barqueiro cobra."</p></li>
<li>Uma garrafa de cachaça pela metade e dois copos.</li></ol>
<span class="margin-note">XIV·VIII·MCMLXXVIII = 14/08/1978. Algarismos romanos. — M.Q.</span></div>`);

doc(1,'d-bento','1ª vítima · Wanderley Pires','Depoimento · Irmão Bento','sacristão',dep('BENTO SIQUEIRA (Irmão Bento)','45 anos, sacristão','05/07/1998, 08h',`
<p>Abro o portão do adro todos os dias às 5h40. Estava trancado, com o cadeado fechado, como eu deixei na véspera às 19h. Quando entrei vi o homem sentado na parede, com as moedas nos olhos, e achei que fosse uma brincadeira de estudante. Depois vi que estava morto e corri para o telefone da sacristia.</p>
<p>Só três pessoas têm a chave daquele cadeado: eu, o Frei Guardião, que está em Roma desde maio, e o pessoal da <b>restauração do altar</b>. A Fundação deixou uma cópia com o restaurador, o senhor Daniel, porque ele trabalha à noite.</p>
<p>Ontem à noite dormi nos fundos da igreja, como sempre. Não ouvi nada. O sino não tocou.</p>
<p>Perguntado se conhecia a vítima: "Todo mundo conhecia o Dr. Wanderley. Ele mandou na cidade muitos anos. Não era homem de igreja."</p>
<p>Perguntado sobre o santinho: "É uma imagem antiga do nosso padroeiro, São Francisco. Coisa de gráfica antiga, não se faz mais assim. Não é da nossa sacristia, os nossos são de papel brilhante."</p>`));

doc(1,'d-lucio','1ª vítima · Wanderley Pires','Depoimento · Lúcio Bragança','dono do bar',dep('LÚCIO BRAGANÇA','55 anos, comerciante (ex-bombeiro)','05/07/1998, 14h',`
<p>O Wanderley bebia no meu bar todas as noites havia quinze anos. No sábado chegou às oito e saiu às 23h30, bem bêbado. Não quis que ninguém o levasse para casa. Ele morava a três quadras.</p>
<p>Ele andava esquisito nas últimas semanas, falando sozinho do "casarão" e de "dívida velha". Na quarta-feira mostrou um cartão com uns números romanos e disse: "Estão me cobrando o casarão, Lúcio. Vinte anos depois." Eu disse que não queria saber. Não quero saber até hoje.</p>
<p>Fechei o bar meia-noite e meia e fui para casa. Moro sozinho, ninguém pode confirmar.</p>
<p>Perguntado sobre qual casarão, respondeu: "O da Rua do Pilar. O que pegou fogo em setenta e oito. Eu era bombeiro naquela época. Não gosto de falar nisso."</p>
<p>Perguntado se alguém no bar se aproximou da vítima, disse que "um rapaz quieto, de boné" sentou duas mesas adiante e pagou uma dose para o Wanderley lá pelas onze, mas que não reparou no rosto. "Tinha muita gente por causa do Festival."</p>`));

doc(1,'d-vicente1','1ª vítima · Wanderley Pires','Depoimento · Cabo Vicente Pires','filho da vítima',dep('VICENTE PIRES','40 anos, Cabo da Polícia Militar','06/07/1998',`
<p>Meu pai tinha inimigos, sim. Foi delegado vinte anos e prendeu muito vagabundo. Qualquer um desses pode ter feito isso.</p>
<p>Na noite de sábado eu estava de serviço na viatura 2310 com o Soldado Rocha, das 19h às 7h. Fomos chamados ao local às 6h25 pelo rádio.</p>
<p>Perguntado sobre o casarão de 1978, disse: "Eu tinha vinte anos. Meu pai fez o inquérito. Foi acidente, umas velas. Isso não tem nada a ver."</p>
<p>Ao final, declarou: "Se a polícia civil não achar o desgraçado, eu acho."</p>`,'<div class="stamp blue">ESCALA CONFIRMADA</div>'));

doc(1,'d-daniel1','1ª vítima · Wanderley Pires','Depoimento · Daniel R. Sá','restaurador',dep('DANIEL R. SÁ','38 anos, restaurador de bens culturais','05/07/1998, 10h',`
<p>Fui contratado pela Fundação de Arte de Ouro Preto em janeiro para restaurar o altar-mor de São Francisco. Desde junho cuido também do altar do Carmo. Tenho a cópia da chave do adro de São Francisco e da porta lateral do Carmo, porque trabalho muitas vezes à noite. A luz é melhor para o douramento e não há turistas.</p>
<p>Ontem, sábado, não trabalhei. Fiquei na pensão da Dona Cota, na Rua do Carmo, e dormi cedo. Cheguei hoje às 6h50 para trabalhar e encontrei a polícia.</p>
<p>Nasci aqui em Ouro Preto, mas moro em Belo Horizonte desde 1979. Voltei por causa do contrato.</p>
<p>Perguntado sobre a luva na mão esquerda: "Uso por causa de uma alergia de contato com a cola de coelho. É coisa do ofício."</p>
<p>Perguntado se conhecia a vítima: "De nome. Era delegado quando eu era menino."</p>
<p>Ofereceu-se espontaneamente para entregar a chave do adro à polícia, o que foi feito.</p>`));

/* ---------- VÍTIMA 2 ---------- */
doc(1,'bo2','2ª vítima · Dr. Hélio Arantes','B.O. nº 2.290/98','09/07/1998',bo('2.290/98','09/07/1998, 06h18, orelhão da Praça Tiradentes','Escadaria da Igreja de Nossa Senhora do Carmo, Praça Tiradentes','HÉLIO ARANTES, 61 anos, médico','Jonas Pereira, gari',
`<p>O gari varria a escadaria do Carmo às 06h10 e encontrou um homem sentado no penúltimo degrau, encostado no portal lateral de pedra-sabão, com moedas sobre os olhos. Reconheceu o Dr. Hélio Arantes.</p>
<p>O automóvel da vítima, um Omega preto, estava estacionado na Praça Tiradentes, trancado.</p>
<p>A cena é idêntica à da morte de Wanderley Pires em 05/07. A Força-Tarefa foi criada nesta data.</p>`));

doc(1,'local2','2ª vítima · Dr. Hélio Arantes','Relatório de local','Perita Sandra Lage',`<div class="paper typed"><div class="stamp blue">PERÍCIA</div>
<div class="meta">INSTITUTO DE CRIMINALÍSTICA · LEVANTAMENTO DE LOCAL Nº 2/98 · 09/07/1998</div>
<p><b>Posição:</b> sentado, com as costas no portal, as mãos cruzadas no colo (<b>a esquerda sobre a direita</b>) e duas moedas de cobre sobre os olhos. Santinho no bolso interno esquerdo do paletó.</p>
<p><b>Vestes:</b> terno cinza e gravata. Paletó com <b>partículas douradas e pó avermelhado</b> na lapela e nos ombros. As costas do paletó e as mangas, perto das axilas, estão amassadas, como se alguém o tivesse segurado por baixo dos braços.</p>
<p><b>Carro da vítima:</b> nada de anormal. No banco do passageiro havia uma maleta médica fechada.</p>
<p><b>Entorno:</b> a porta lateral do Carmo, usada pela equipe de restauração, estava trancada. A escadaria é pública e sem portão.</p>
<p><span class="sig">Sandra Lage</span></p></div>`);

doc(1,'nec2','2ª vítima · Dr. Hélio Arantes','Laudo de necropsia nº 193/98','IML',`<div class="paper typed"><div class="stamp">LAUDO</div>
<div class="meta">IML · POSTO DE OURO PRETO · NECROPSIA Nº 193/98 · Dr. Fausto Brum · 09/07/1998</div>
<p><b>Causa da morte:</b> asfixia mecânica por estrangulamento com laço. O sulco é igual ao do caso 188/98: 4 mm, trançado, com <b>fibras de algodão com cera de abelha</b>.</p>
<p><b>Horário:</b> entre <b>1h e 3h de 09/07</b>.</p>
<p><b>Toxicologia:</b> alcoolemia de 0,9 g/L. <b>Diazepam</b> em nível elevado.</p>
<p><b>Outros:</b> equimoses leves nas duas axilas, compatíveis com a vítima ter sido amparada ou carregada por baixo dos braços enquanto ainda estava viva. Não há lesões de defesa.</p>
<p><b>Conclusão:</b> mesmo autor provável do caso 188/98.</p>
<p><span class="sig">Dr. Fausto Brum</span></p></div>`);

doc(1,'tel2','2ª vítima · Dr. Hélio Arantes','Registro de chamadas · casa do Dr. Hélio','TELEMIG · 10/07',`<div class="paper telex">
<div class="meta" style="font-family:'IBM Plex Mono'">TELEMIG · CHAMADAS RECEBIDAS · LINHA (031) 551-2047 · HÉLIO ARANTES · 08 E 09/07/1998</div>
<table><tr><th>DATA</th><th>HORA</th><th>ORIGEM</th><th>DURAÇÃO</th></tr>
<tr><td>08/07</td><td>19:02</td><td>(031) 551-1880 · SANTA CASA OURO PRETO</td><td>02 min</td></tr>
<tr><td>08/07</td><td>21:40</td><td>(031) 551-3302 · CLÍNICA ARANTES</td><td>04 min</td></tr>
<tr><td>09/07</td><td>00:12</td><td>TELEFONE PÚBLICO · PRAÇA TIRADENTES (frente ao Museu)</td><td>03 min</td></tr></table>
<span class="margin-note">Alguém ligou de um orelhão da praça à meia-noite. Ele saiu de carro logo depois e estacionou na própria praça. Marcou com alguém? — M.Q.</span></div>`);

doc(1,'d-celina','2ª vítima · Dr. Hélio Arantes','Depoimento · Dra. Celina Arantes','filha da vítima',dep('CELINA ARANTES','34 anos, médica','09/07/1998, 16h',`
<p>Meu pai e eu não nos falávamos direito havia anos. Na terça discutimos feio sobre a clínica: ele queria vender, e eu disse que não ia trabalhar para ele nunca mais. Sim, sou a única herdeira. Não, não o matei.</p>
<p>Do dia 8, às 19h, até o dia 9, às 7h, eu estava de plantão no pronto-socorro da Santa Casa. Há escala, prontuários assinados e uma equipe inteira comigo.</p>
<p>Na semana passada meu pai recebeu um envelope sem remetente com um cartão com algarismos romanos. Riu e jogou na lareira. Disse: "Coisa de setenta e oito, alguém querendo dinheiro." Eu não sabia do que ele falava. Eu tinha quatorze anos em 1978.</p>
<p>Perguntada sobre o diazepam: "Qualquer médico ou farmácia tem. É o remédio mais receitado do Brasil."</p>`,'<div class="stamp blue">PLANTÃO CONFIRMADO</div>'));

doc(1,'d-jonas','2ª vítima · Dr. Hélio Arantes','Depoimento · Seu Jonas (gari)','testemunha',dep('JONAS PEREIRA','52 anos, gari','09/07/1998',`
<p>Começo na praça às cinco e meia. Às seis e dez subi a escadaria do Carmo com a vassoura e vi o doutor sentado lá em cima, com umas moedas nos olhos. Pensei que estivesse dormindo bêbado. Quando toquei, estava gelado.</p>
<p>Ontem à noite, quando eu saía de casa às cinco, a neblina estava tão grossa que não se via o outro lado da praça.</p>
<p>Não vi ninguém. Só um gato.</p>`));

/* ---------- VÍTIMA 3 ---------- */
doc(1,'bo3','3ª vítima · Padre Ernesto','B.O. nº 2.344/98','13/07/1998',bo('2.344/98','13/07/1998, 06h02, telefone da Capela do Padre Faria','Porta principal da Capela de N. Sra. do Rosário do Padre Faria','Padre ERNESTO VALADARES, 70 anos, sacerdote aposentado','Sebastião Reis (Seu Tião), caseiro',
`<p>O caseiro encontrou o padre sentado na soleira da porta principal da capela, de batina, com moedas nos olhos e as mãos cruzadas. A casa do padre, a 30 m da capela, estava com a porta entreaberta e a luz da sala acesa.</p>
<p>A noite anterior foi a da <b>final da Copa do Mundo</b>, perdida pelo Brasil. As ruas da cidade ficaram vazias e silenciosas depois das 18h.</p>`));

doc(1,'local3','3ª vítima · Padre Ernesto','Relatório de local','Perita Sandra Lage',`<div class="paper typed"><div class="stamp blue">PERÍCIA</div>
<div class="meta">INSTITUTO DE CRIMINALÍSTICA · LEVANTAMENTO DE LOCAL Nº 3/98 · 13/07/1998</div>
<p><b>Capela:</b> mesma posição do corpo, mãos cruzadas com a esquerda sobre a direita, moedas de cobre e santinho no bolso da batina. Partículas douradas e pó avermelhado na batina, nos ombros.</p>
<p><b>Casa do padre:</b> sem sinais de arrombamento, então ele abriu a porta. Na mesa da sala, <b>duas xícaras de chá de erva-cidreira</b>, uma vazia e outra pela metade. A metade deu positivo para diazepam. A vazia foi lavada e está no escorredor.</p>
<p>Na gaveta da cômoda do quarto havia um envelope carimbado em 29/06/1998 com um cartão: <b>"XIV · VIII · MCMLXXVIII. Vinte anos. O barqueiro cobra."</b> Ao lado, um terço e uma caderneta de confissões antiga, sem nomes, com a anotação na última página: <i>"Deus me perdoe pelo que eu disse em agosto."</i></p>
<p><span class="sig">Sandra Lage</span></p></div>`);

doc(1,'nec3','3ª vítima · Padre Ernesto','Laudo de necropsia nº 201/98','IML',`<div class="paper typed"><div class="stamp">LAUDO</div>
<div class="meta">IML · POSTO DE OURO PRETO · NECROPSIA Nº 201/98 · Dr. Fausto Brum · 13/07/1998</div>
<p><b>Causa da morte:</b> estrangulamento com laço, com o mesmo padrão: 4 mm, trançado, algodão com cera de abelha.</p>
<p><b>Horário:</b> entre <b>2h e 4h de 13/07</b>.</p>
<p><b>Toxicologia:</b> sem álcool. <b>Diazepam</b> em nível elevado. Conteúdo gástrico: chá.</p>
<p><b>Observação:</b> o padre era frágil (52 kg). Pode ter sido levado no colo da casa até a capela.</p>
<p><b>Conclusão:</b> mesmo autor dos casos 188 e 193/98.</p>
<p><span class="sig">Dr. Fausto Brum</span></p></div>`);

doc(1,'d-tiao','3ª vítima · Padre Ernesto','Depoimento · Seu Tião (caseiro)','testemunha',dep('SEBASTIÃO REIS (Seu Tião)','63 anos, caseiro','13/07/1998',`
<p>Moro nos fundos, do lado da casa do padre. Depois do jogo, todo mundo foi dormir triste. Lá pelas dez para as duas acordei com alguém batendo na porta do padre, devagarzinho.</p>
<p>Ouvi uma voz de homem, nova e calma, educada: <i>"Padre, sou eu. Vim devolver uma coisa que é do senhor, de muito tempo atrás."</i> O padre demorou, mas abriu. Depois ouvi a chaleira.</p>
<p>Achei que fosse algum ex-coroinha, e voltei a dormir. Me arrependo até a alma.</p>
<p>Perguntado se o padre recebia visitas de madrugada: "Nunca. Ele tinha medo de escuro. Depois de agosto de setenta e oito, nunca mais dormiu de luz apagada."</p>`));

/* ---------- OBJETOS ---------- */
doc(1,'obj123','Laboratório','Laudo de objetos · vítimas 1 a 3','Lab. IC · 16/07',`<div class="paper typed"><div class="stamp">RESERVADO</div>
<div class="meta">INSTITUTO DE CRIMINALÍSTICA · LABORATÓRIO · EXAME DE OBJETOS · casos 188, 193 e 201/98 · 16/07/1998</div>
<h3>1. MOEDAS (6 unidades, 2 por vítima)</h3>
<p>Moedas de <b>cobre</b> de 37 mm, muito gastas, com pátina verde-escura. No anverso, as armas da coroa portuguesa. No reverso, o valor "XX" (vinte réis) e o ano <b>1752</b>. São moedas coloniais autênticas, sem dúvida peças de coleção. Em todos os casos foram colocadas com a coroa para cima.</p>
<p>Há resíduos de <b>cal e cera</b> nas reentrâncias. Elas ficaram muito tempo enterradas ou guardadas em ambiente de alvenaria. Análise detalhada encaminhada a especialista.</p>
<h3>2. SANTINHOS (3 unidades)</h3>
<p>Impressos em papel cartão grosso, em litografia de duas cores. É um processo gráfico dos anos 70, já em desuso. No rodapé, em letra miúda: <i>"Typ. S. José — O. Preto"</i>.</p>
<table><tr><th>Vítima</th><th>Local</th><th>Santo do santinho</th></tr>
<tr><td>Wanderley Pires</td><td>São Francisco de Assis</td><td>São Francisco de Assis</td></tr>
<tr><td>Hélio Arantes</td><td>Igreja do Carmo</td><td>Nossa Senhora do Carmo</td></tr>
<tr><td>Ernesto Valadares</td><td>Capela do Padre Faria (N. Sra. do Rosário)</td><td>Nossa Senhora do Rosário</td></tr></table>
<p>O santo corresponde ao padroeiro da igreja onde o corpo foi deixado.</p>
<p><b>No verso de todos</b>, a caneta esferográfica azul, a mesma inscrição:</p>
<p style="text-align:center;font-size:22px">XIV · VIII · MCMLXXVIII</p>
<p>A letra é cuidadosa, de forma, e os pontos separadores são centralizados. É a mesma notação dos cartões anônimos encontrados nas casas das vítimas 1 e 3.</p>
<span class="margin-note">14 de agosto de 1978. O que aconteceu nesse dia? — M.Q.</span></div>`);

doc(1,'mapa-nota','Laboratório','Nota da delegada sobre os locais','M. Quintão · 14/07',`<div class="paper hand">
<p>14/7 — Pontos:</p>
<p>1. Os três locais ficam a poucos minutos a pé uns dos outros, menos o Padre Faria, que fica mais longe, a leste. Quem faz isso conhece a cidade e as ladeiras no escuro.</p>
<p>2. São Francisco tinha o portão trancado. Ou foi alguém com chave, ou alguém que sabia abrir.</p>
<p>3. Diazepam nas três vítimas. Ele faz a vítima dormir e depois estrangula. Não quer luta. Não quer sangue.</p>
<p>4. Moedas de 1752, que não se compram na esquina, e santinhos impressos aqui há vinte anos. Ele guardou isso por muito tempo, ou achou em algum lugar.</p>
<p>5. Os três receberam o mesmo cartão em 29/06. O que é "Pilar 37"? O que houve em 14/08/78?</p>
<p>6. Pedir ao arquivo os inquéritos de 1978. Ninguém aqui quer falar disso.</p>
</div>`);
