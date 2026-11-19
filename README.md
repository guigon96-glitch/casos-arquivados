# Casos Arquivados

Catálogo de jogos de detetive para jogar em casa. Publicado no Cloudflare Pages: https://casos-arquivados-detetive.pages.dev

## Estrutura

```
index.html        → catálogo (lê a lista de casos de casos.json)
casos.json        → lista de casos exibida no catálogo
brinde/           → Caso 1 · O Último Brinde (+ impressao.pdf)
barqueiro/        → Caso 2 · O Barqueiro de Ouro Preto (+ impressao.pdf)
```

## Como adicionar um caso novo

1. Crie uma pasta com um nome curto, sem espaços nem acentos (ex.: `farol/`), com o `index.html` do jogo, as imagens em `img/` e, se houver, o `impressao.pdf`.
2. Acrescente uma entrada em `casos.json` com `slug` igual ao nome da pasta, a `capa` (ex.: `farol/img/cover.jpg`) e os demais campos.
3. Faça commit e push. O Cloudflare publica sozinho em 1 ou 2 minutos.

Os QR codes de cada PDF apontam para `https://casos-arquivados-detetive.pages.dev/<slug>/`.

Campos de `dificuldade` aceitos: Iniciante, Intermediário, Avançado, Especialista.
