# Casos Arquivados — guia para o Claude Code

Jogos de detetive em português (estilo "A Queda de Mosco"): o jogador lê documentos, laudos,
fotos e mapas, abre "envelopes" (etapas) respondendo perguntas e no fim faz a acusação.
Hoje é um site **estático** publicado no Cloudflare Pages a partir da branch `main`.
O objetivo atual é evoluir para uma **versão paga** — veja `docs/plano-versao-paga.md`.

## Estrutura

```
index.html          catálogo; lê casos.json e lista os casos
casos.json          metadados de cada caso (slug, título, sinopse, capa, pdf, kit…)
brinde/             Caso 1 "O Último Brinde" — tudo num único index.html (4 envelopes)
barqueiro/          Caso 2 "O Barqueiro de Ouro Preto" — multi-arquivo (5 envelopes)
  data_core.js      RULES, CASE, VICTIMS, CHARS, WIT, PH (fotos com etapa)
  docs1-5.js        documentos por etapa: doc(stage,id,group,title,sub,html) → D[]
  docs5.js          também GATES, HINTS, ACCUSE_Q, SOLUTION  ← respostas!
  map.js / app.js   mapas SVG, arquivo, roteamento go(v), acusação
  tools_cfg.js      configuração das ferramentas de investigação deste caso
  tools.js          Quadro (cartões + barbantes), Linha do tempo, Interrogatórios
<caso>/img/         fotos .jpg
<caso>/impressao.pdf  versão para imprimir (sem a solução, com QR para o site)
<caso>/kit.pdf        kit físico (envelopes, cartões recortáveis, adereços, relatório)
ferramentas/        geração dos PDFs (ver abaixo)
docs/               documentação interna
```

### Padrões dos dados (iguais nos dois casos)
- `doc(stage, id, grupo, título, subtítulo, html)` — um documento liberado na etapa `stage`.
- `GATES[n] = {q, opts, a, ...}` — pergunta que destrava a etapa n; resposta `a` em texto puro.
- `PH = {id: {stage, cap, back, ...}}` — fotos por etapa (verso com descrição técnica).
- `HINTS`, `CHARS`, `VICTIMS`, `ACCUSE_Q`, `SOLUTION`.
- Estado do jogador em `localStorage` (`valmorbida_v1`, `barqueiro_v1`; ferramentas em `*_tools_*`).
- Navegação por abas: `go('docs'|'map'|'invest'|...)`.

**Atenção:** como é estático, todas as respostas, a solução e os documentos de todas as etapas
estão no JS público. Ok para a versão grátis; inaceitável para a paga.

## Gerar os PDFs

```bash
cd ferramentas && npm install && cd ..   # fontes (@fontsource)
pip install "qrcode[pil]"
python3 ferramentas/gerar_pdfs.py          # todos os casos
python3 ferramentas/gerar_pdfs.py brinde   # só um
BASE_URL=https://meu-dominio.com python3 ferramentas/gerar_pdfs.py   # QR para outro domínio
```
Precisa de Chrome/Chromium (usa `--headless --print-to-pdf`). O script injeta
`ferramentas/print_*.html` ou `ferramentas/kit.html` no `index.html` do caso, gera e apaga o temporário.
Rode de novo sempre que mudar texto, fotos ou mapa de um caso.

## Adicionar um caso novo
1. Criar a pasta `<slug>/` seguindo o padrão do `barqueiro/` (multi-arquivo é mais fácil de editar).
2. Incluir o link "← Todos os casos" antes de `<header class="top"` (como nos outros).
3. Adicionar a entrada em `casos.json` e a função do caso em `ferramentas/gerar_pdfs.py`.
4. Gerar os PDFs e testar o caso inteiro no navegador (todas as etapas + acusação).

## Convenções
- Todo o texto do jogo em português do Brasil; datas/lugares coerentes com a época do caso.
- Ao mudar uma pista, conferir que ela continua batendo com fotos, mapa, linha do tempo e solução.
- Testar localmente com `python3 -m http.server` na raiz.
- `main` publica direto no site: trabalhe em branch e abra PR.
