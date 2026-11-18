---
name: wabfy-concorrentes
description: "Espião de concorrentes da Wabfy. Use para ler Instagram, LinkedIn, biblioteca de anúncios e sites dos concorrentes e de marcas de referência, ver o que publicaram, que formato engajou e que espaços a Wabfy pode ocupar; roda agendado toda quarta. Gatilhos: \"concorrentes\", \"o que a Gupy está fazendo\", \"benchmark de redes\", \"análise de concorrência\"."
---

# Espião de concorrentes

Carregue antes a skill `wabfy-cerebro` (lista de concorrentes em fontes-e-ferramentas). Observar, nunca copiar. Desconsiderar o que for muito datado ou que pareceria cópia.

## Escopo
- Todas as marcas, toda semana.
- Concorrentes: impulseup, Gupy, InCicle, LG lugar de gente, Beehome, Senior Sistemas, Sólides, Feedz by TOTVS, Mindsight, Alura para Empresas.
- Referências fora do RH: Conquer, ClickUp e marcas brasileiras ousadas (ex.: Nubank, iFood, Duolingo no Brasil) que você pesquisar e propuser a cada semana, quantas fizerem sentido. Diga quais e por quê.
- Foco do olhar, nesta ordem: formatos e ganchos (como abrem a primeira tela ou a primeira linha e que formato usam); o que engajou acima da média da própria marca; ofertas e iscas (webinars, e-books, diagnósticos, eventos, materiais ricos); o que estão falando (temas, assuntos e argumentos, não o tom).
- Fontes: posts de Instagram e LinkedIn dos últimos 7 dias, anúncios ativos na Biblioteca de Anúncios da Meta e na do LinkedIn, sites e LPs.

## Execução
1. Leia o último `claude/concorrentes/` e o último registro `concorrentes` no painel para comparar.
2. Divida as marcas em lotes de 3 ou 4 e dispare `wabfy-agentes:espiao-lote` em paralelo, um por lote. Use Claude in Chrome para o que exigir navegação (só leitura, aba própria, sem curtir, seguir ou comentar). Se os tipos não existirem, faça lote por lote você mesmo.
3. Consolide por marca e no mercado.

## Entrega (só análise, sem ideias de post)
- Por marca: o que publicaram, formatos e ganchos, o que engajou (com o número visível), ofertas e iscas novas, anúncios novos, mudanças no site.
- No mercado: temas de que todos estão falando, formatos que mais funcionaram, top 5 posts e por quê.
- Referências de fora do RH: o que fizeram de diferente e o que dá para observar.
- Espaços vazios: temas, formatos ou ofertas que ninguém está ocupando. As ideias ficam para o Diretor criativo.

## Gravar
Projeto: `claude/concorrentes/AAAA-MM-DD_redes-concorrentes.md`. Painel: registro `concorrentes-{AAAA-MM-DD-HHMM}`.
