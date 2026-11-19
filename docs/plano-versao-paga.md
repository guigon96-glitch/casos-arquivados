# Plano — versão paga

Ponto de partida para o Claude Code. Nada disso está implementado ainda.

## O problema a resolver primeiro
Hoje o site é estático: qualquer pessoa que abra o DevTools (ou o repositório, ou a URL
`/barqueiro/docs5.js`) vê **todos os documentos, as respostas dos envelopes e a solução**.
Para cobrar, o conteúdo precisa sair do JS público e ser entregue pelo servidor só para quem pagou,
e só a etapa que a pessoa já destravou.

> O Cloudflare Pages publica a raiz do repositório inteira. Pastas como `docs/` e `ferramentas/`
> também ficam acessíveis pela URL. Na versão paga, o conteúdo dos casos não pode ficar em pasta publicada.

## Arquitetura sugerida (tudo na Cloudflare, custo quase zero no começo)

| Peça | Escolha | Papel |
|---|---|---|
| Front | Cloudflare Pages (este repo) | catálogo, vitrine, "casca" do jogo (UI, mapa, ferramentas) |
| API | Pages Functions (`/functions`) | login, checkout, entrega de conteúdo, checar respostas |
| Banco | D1 (SQLite) | usuários, compras, progresso, códigos de acesso |
| Arquivos | R2 (bucket privado) | JSON de conteúdo por caso/etapa, fotos, PDFs |
| Pagamento | Mercado Pago (Pix + cartão) ou Stripe | checkout + webhook confirmando o pagamento |
| Login | link mágico por e-mail (ex.: Resend) ou Google | sem senha para guardar |

Alternativa equivalente: Supabase (Auth + Postgres + Storage + Edge Functions).

## Como o jogo muda
1. Separar cada caso em **casca** (HTML/CSS/JS da interface, pode ser público) e **conteúdo**
   (`CHARS`, `PH`, documentos, `GATES`, `HINTS`, `SOLUTION`) exportado para JSON **por etapa** no R2.
2. A casca chama `GET /api/caso/:slug/etapa/:n`. O servidor confere a compra e o progresso.
   Só então devolve o JSON daquela etapa.
3. Envelope: `POST /api/caso/:slug/destravar {etapa, resposta}`. O servidor compara com a resposta
   (que nunca vai ao navegador), grava o progresso e devolve o conteúdo da próxima etapa.
4. Acusação: `POST /api/caso/:slug/acusar`. O servidor calcula a pontuação e só então libera a solução.
5. Fotos e PDFs servidos por URL assinada, que expira (R2 + Function).
6. O progresso sai do `localStorage` e vai para o banco. O jogador continua em outro aparelho e o casal joga junto.

## Modelo de venda (ideias)
- Caso avulso; pacote com todos os casos; Caso 1 grátis como amostra (ou só o Envelope 1).
- **Kit físico / PDF impresso com código de acesso**: cada compra gera um código único, impresso
  ao lado do QR. Digitar o código no site libera as respostas online daquele caso.
- Licença por "mesa" (um código = um grupo), não por pessoa.

## Tabelas mínimas (D1)
```
usuarios(id, email, criado_em)
compras(id, usuario_id, caso_slug|pacote, provedor, ref_pagamento, status, criado_em)
codigos(codigo, caso_slug, usado_por, usado_em)
progresso(usuario_id, caso_slug, etapa, dados_json, atualizado_em)
```

## Ordem sugerida de trabalho
1. Script que extrai o conteúdo dos casos atuais para JSON por etapa e remove as respostas da casca.
2. Functions de conteúdo + destravar + acusar, com um usuário "de teste" fixo (sem pagamento).
3. Login por e-mail.
4. Checkout + webhook (começar no modo sandbox do provedor).
5. Códigos de acesso para os PDFs/kits. Regenerar os PDFs sem a página de respostas.
6. Página de vendas, termos de uso, política de privacidade (LGPD) e emissão de nota fiscal.

## Segredos
Chaves do provedor de pagamento, de e-mail etc. ficam em variáveis de ambiente do
Cloudflare (`wrangler secret put` / painel). Nunca no repositório.
