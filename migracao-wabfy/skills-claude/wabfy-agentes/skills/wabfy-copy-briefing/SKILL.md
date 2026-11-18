---
name: wabfy-copy-briefing
description: "Copy e briefing de design da Wabfy. Use para escrever posts, carrosséis, stories, documentos e posts de LinkedIn, legendas e o briefing para o designer no template da Wendy, com esboço em grade e direção visual. Substitui a antiga wabfy-content-studio. Gatilhos: \"copy do post\", \"carrossel\", \"legenda\", \"story\", \"briefing para o Nallan\", \"post de LinkedIn\", \"esboço em grade\"."
---

# Copy + briefing de design

Carregue antes a skill `wabfy-cerebro` (marca-e-claims, estilo e briefing-e-visual são obrigatórios aqui).

## Antes de escrever
- Leia a linha do calendário da peça (data, canal, formato, pilar, editoria, funil, teste) e a pauta ou conceito escolhido.
- Veja na coleção `insights_comercial` do painel se há frases reais de clientes sobre o tema (use o jeito de falar, nunca a identificação).
- Releia 2 peças aprovadas do mesmo formato em `claude/briefings/` para o tom.
- Se citar tela da plataforma, confira na demo (só leitura) o caminho exato do print.

## Como escrever
Cena e tensão de uma pessoa real de RH, leitura útil, virada, próximo passo. Produto entra como consequência útil, nomeando o módulo e o pilar. Formato nasce da ideia: carrossel e documento para raciocínio em etapas, vídeo para tensão e fluxo, estático e meme para conversa e alcance, enquete para escuta.

## Entrega em duas etapas, num doc que a Wendy edita
Entregue num documento do Claude Docs (um doc por semana ou campanha, uma seção por peça), como o das copies da semana 1 de Escrito nos Dados. Uma versão só de cada texto, a melhor; nada de opções.

### Etapa 1: briefing (para aprovação)
1. Ficha no template: Nome, Data de postagem, Formato, Canal, Pilar, Linha editorial, Objetivo, Mensagem central, Público-alvo, Formato e idioma, Teste (hipótese + métrica).
2. TELAS: o que cada tela comunica (a ideia de cada uma, ainda sem texto final) e a direção visual de cada tela, seguindo `briefing-e-visual.md`.
3. REFERÊNCIAS VISUAIS (com link), ASSETS e FONTES.
4. Esboço em grade simples, à parte.
Pare aqui e espere a Wendy aprovar ou ajustar.

### Etapa 2: copy (depois da aprovação)
1. Texto final de cada tela, em tabela "Elemento | Texto final".
2. LEGENDA do Instagram, com até 3 hashtags de nicho (ex.: #gestaodepessoas, #TeD), e texto do LinkedIn com a interação planejada (pergunta, enquete ou comentário fixado), também com até 3 hashtags de nicho. Dois fechamentos quando houver "link na bio" e LinkedIn.
3. Story do dia sobre o tema (1 tela com link).
4. Itens a validar, visíveis.

Antes de entregar a etapa 2, rode a skill `wabfy-revisor` e corrija o que voltar.

## Gravar
Projeto: `claude/briefings/AAAA-MM-DD_{tema}.md`. ClickUp só se a Wendy pedir (regras em briefing-e-visual).
