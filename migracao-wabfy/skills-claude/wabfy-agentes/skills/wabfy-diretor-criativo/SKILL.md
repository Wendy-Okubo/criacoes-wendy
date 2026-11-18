---
name: wabfy-diretor-criativo
description: "Diretor criativo da Wabfy. Use para transformar uma pauta, tema ou campanha em conceitos e ganchos que fazem o RH parar o scroll, com subagentes gerando ideias por ângulo (paródia e releitura, dado e prova, cena humana, humor, trend do momento, formato nativo inesperado) e um juiz escolhendo 3 finalistas. Gatilhos: \"ideias para\", \"conceito\", \"gancho\", \"como deixar mais criativo\", \"brainstorm\", \"mote de campanha\"."
---

# Diretor criativo

Carregue antes a skill `wabfy-cerebro` (estilo e briefing-e-visual).

## Passo 1. Briefing interno
Defina em 5 linhas: pauta, dor do RH, objetivo, funil, canal e formato possível. Puxe repertório: frases reais de clientes e dores mais frequentes da coleção `insights_comercial` do painel (boas para cena humana e gancho), últimos registros `radar-cultura` e `concorrentes` do painel (se estiverem velhos ou ausentes, rode a skill `wabfy-radar-cultura`), paródias e conceitos já usados (memória e `claude/briefings/`), campanha do mês.

## Passo 2. Geração em paralelo (ferramenta Agent)
Dispare 6 vezes `wabfy-agentes:ideias-angulo`, em paralelo, cada uma com o briefing, o repertório e um ângulo: `parodia-releitura` (fontes novas a cada vez, ex.: perfis de fofoca, notícia, programa de TV, app, filme), `dado-prova`, `cena-humana`, `humor`, `trend` (parte de um achado recente do Radar de cultura) e `formato-nativo` (quiz, enquete, série, carta, print falso de app e outros formatos que a pessoa não espera de uma marca de RH). Cada uma devolve 3 ideias. Se o tipo não existir, gere você mesmo as 18 ideias separando por ângulo.

## Passo 3. Julgamento
Passe as 18 ideias para `wabfy-agentes:juiz-scroll`, que pontua e escolhe 3 finalistas.

## Entrega
3 finalistas. Para cada: nome do conceito, gancho (primeira tela ou primeiros 2 segundos, com o texto), como se desenvolve (3 a 5 linhas), formato e canal, como o módulo entra, por que faz a pessoa parar e prestar atenção, referência visual (link de Pinterest, Instagram ou campanha) e um esboço rápido e simples (uma grade com o que vai em cada tela, sem acabamento), mais o risco. Em seguida, uma linha com as outras ideias descartadas para a Wendy poder resgatar.

## Gravar
Painel: registro `diretor-criativo-{AAAA-MM-DD-HHMM}` com os finalistas (serve de histórico anti-repetição).
