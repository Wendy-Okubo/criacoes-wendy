---
name: wabfy-revisor-paginas
description: "Revisor de páginas do site da Wabfy. Use para revisar a Home, páginas de pilar, de módulo e LPs do wabfy.com (texto, novidades de produto, prints desatualizados, SEO e AEO, melhorias de conversão), entregando a revisão pronta para o ClickUp, a versão consolidada e os dois HTMLs; roda agendado a cada 15 dias, escolhendo as páginas que mais precisam. Gatilhos: \"revisa a página\", \"revisão da página de\", \"páginas desatualizadas\", \"o que melhorar no site\"."
---

# Revisor de páginas

Carregue antes a skill `wabfy-cerebro` (marca-e-claims, estilo) e leia `claude/wabfy-arquitetura-de-paginas.md`.

## Fila de páginas
Todas as páginas do site podem entrar, mas na ordem que a Wendy pede. A fila fica no painel, coleção `paginas`, id = slug da página: url, nome, pedido_em, status (`fila` | `revisada`), revisada_em, doc. Quando a Wendy pedir uma página na conversa, acrescente-a com status `fila`.

## Modo agendado (a cada 15 dias)
1. Pegue até 2 páginas da fila, na ordem em que foram pedidas, e faça a revisão completa (abaixo). Marque como `revisada`.
2. Se a fila estiver vazia, não revise nada por conta própria: liste as 3 páginas que mais precisam de revisão (cruzando releases, analista, visibilidade-ia e concorrentes do painel) com o motivo, para a Wendy decidir.

## Revisão (vale também quando a Wendy pede uma página)
Dispare `wabfy-agentes:auditor-pagina` com a URL: ele lê a página inteira, dobra por dobra (dobra 1 é o hero; o header não é dobra), e confere com a demo (só leitura) e com os releases.
Checklist de página de módulo:
- Blocos de texto com no máximo 3 a 4 linhas.
- Produto atualizado com a plataforma e os releases; prints e imagens a trocar só onde o layout mudou (manter a maioria das imagens).
- Sem case Caixa (Caixa só na Home e nas páginas de pilar).
- Espaço para o vídeo do módulo, com sugestão do que o vídeo mostraria enquanto ele não existe.
- Estrutura padrão (eyebrows padronizados, dobra Conexões na plataforma com fluxo visual).
- H1 e H2 de conversão com benefício da plataforma; FAQ "O que é" com o diferencial da Wabfy; hero de pilar no modelo "do que o pilar é responsável, com o que ajuda e por meio de quê".
- Balão do WhatsApp e mensagem inicial no padrão; SEO e AEO da arquitetura de páginas.
- Notas e wireframes dizem só o que a página precisa, sem falar do processo do Claude.
- SEO e AEO: título, descrição, H1, perguntas que a página não responde (inclusive as do agente Visibilidade em IA), FAQ e dados estruturados.
- Conversão: CTAs (texto e destino), formulário, botão de WhatsApp e ordem das dobras.
- Concorrentes: como a página equivalente aparece em 2 ou 3 concorrentes (o que eles têm que falta à Wabfy, sem copiar).

## Entrega
1. Revisão por dobra, formatada para colar no ClickUp, com as marcações de mudança.
2. Versão consolidada: todos os textos da página com as mudanças aplicadas.
3. HTML de comparação antes e depois.
4. HTML no layout da página com marcações verdes nas mudanças e botão "Ver versão limpa" (como o arquivo "TEXTO REVISADO" do 9 Box).
Rode a skill `wabfy-revisor` no texto final.

## Gravar
Projeto: `claude/revisoes/AAAA-MM-DD_{pagina}-revisao-v1.md` e os HTMLs. Painel: registro `revisor-paginas-{AAAA-MM-DD-HHMM}` com as páginas revisadas, as que ficaram na fila e o motivo. ClickUp só se a Wendy pedir.
