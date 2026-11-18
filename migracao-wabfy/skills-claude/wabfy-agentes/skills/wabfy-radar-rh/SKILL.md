---
name: wabfy-radar-rh
description: "Radar de RH da Wabfy. Use para pesquisar notícias, estudos, dados e eventos de RH, T&D, carreira, liderança e IA no trabalho dos últimos 7 a 14 dias e transformá-los em pautas com fonte; também roda agendado toda segunda. Gatilhos: \"radar\", \"o que está acontecendo no RH\", \"pautas da semana\", \"notícias de RH\"."
---

# Radar de RH

Carregue antes a skill `wabfy-cerebro` (marca-e-claims, estilo, painel). Não é clipping: só entra o que vira conteúdo útil para profissionais de RH de empresas com 200+ colaboradores (só o RH, nunca colaborador ou gestor de outra área).

## Passo 1. Contexto
Leia no projeto: `claude/calendario-editorial-vivo.md` (ou o Calendário Vivo), o último `claude/radar-editorial/radar-*.md` e o resumo do último registro `radar-rh` no painel, para não repetir sinal nem pauta já planejada. Veja qual é a campanha do mês na memória.

## Passo 2. Pesquisa em paralelo
Dispare ao mesmo tempo, com a ferramenta Agent:
- `wabfy-agentes:pesquisador-rh` com os territórios: cargos e competências, avaliação e 360°, PDI, T&D e trilhas, carreira e mobilidade interna, sucessão e 9 Box, gestor e 1:1, mentoria, seleção e recrutamento interno, clima e engajamento, performance e BSC, people analytics, IA aplicada ao RH, liderança e cultura organizacional (comportamento, cultura, trabalho híbrido).
  Fontes, nesta prioridade: mídia de RH brasileira (Melhor RH, ABRH, Valor, Exame, Época Negócios), institutos e consultorias (Gartner, McKinsey, Deloitte, LinkedIn Economic Graph, FIA, FGV, SHRM) e vozes do LinkedIn (executivos de RH e criadores que pautam o mercado; o post é sinal, o dado precisa de fonte original).
- `wabfy-agentes:agenda-rh` para eventos, prêmios, relatórios anuais e datas do calendário corporativo e de RH das próximas 6 semanas.
Se esses tipos não existirem, faça as duas pesquisas você mesmo, em sequência.

## Passo 3. Checagem
Passe os sinais escolhidos para `wabfy-agentes:checador-fontes` (fonte original, data, número exato). Descarte o que não passar.

## Passo 4. Entrega
5 a 8 sinais, ordenados por potencial. Para cada um: sinal (1 a 2 frases), fonte e data (link), por que importa para o RH, hipótese editorial com cena ou tensão humana, editoria e pilar de produto, formato e canal (Instagram ou LinkedIn), papel no funil (reconhecimento, consideração, decisão), o que validar. Feche com 2 ou 3 pautas recomendadas e o próximo evento relevante.

Regras: separar fato, opinião da fonte e inferência. Tendência nunca vira claim da Wabfy. Fonte com mais de 60 dias só se for estudo de referência. Nada de datas de consumo. Concorrentes não viram notícia (ficam para o Espião).

## Passo 5. Gravar
- Projeto: `claude/radar-editorial/radar-AAAA-MM-DD.md`.
- Painel: registro `radar-rh-{AAAA-MM-DD-HHMM}` com itens (um por sinal) e acoes.
