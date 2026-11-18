# Backup dos artifacts Wabfy (claude.ai)

Cópia local, feita em 2026-11-18, das páginas publicadas no claude.ai e da contagem dos
bancos de dados compartilhados de cada uma. Tudo foi lido sem alterar nada no claude.ai.

- **Páginas e arquivos publicados** ficam aqui, uma pasta por artifact (`<pasta>/index.html`
  e, quando existem, os arquivos do próprio projeto, como `project/...`).
- **Dumps dos bancos de dados** (com dados pessoais, como nomes de leads) **não ficam neste
  repositório**. Foram salvos fora dele, no scratchpad da sessão
  (`.../scratchpad/wabfy-dados/<pasta>/<coleção>/<doc_id>.json`), que pode ser apagado a
  qualquer momento: mova para um lugar seguro e fora do git se quiser guardar.
- Artifacts criados a partir de um tipo (Docs, Whiteboard, Slides, Design, Motion) trazem
  dezenas de arquivos do próprio tipo (`artifact-type/`, `SKILL.md`). Esses arquivos são o
  visualizador genérico do claude.ai, não conteúdo da Wabfy, e não foram copiados.

| Artifact | Link original | Pasta local | Tipo | Banco de dados | Coleções (nº de documentos) |
|---|---|---|---|---|---|
| Central dos Agentes Wabfy | https://claude.ai/artifact/7hA7NdhzxZt5NiZvByqUpc | `central-dos-agentes/` | página própria | sim | registros (37), testes (11), leads (23), insights_comercial (0), memoria (52), confianca (9), ideias (7), paginas (2) |
| Pulso Orgânico Wabfy | https://claude.ai/artifact/WTM8Ns34ZsUgmW2fRFEhpw | `pulso-organico/` | página própria | sim | semanas (6), publicacoes (57), leituras (79), li_semanas (6), li_publicacoes (28), li_leituras (38), em_semanas (2), em_publicacoes (1), em_leituras (1), meses (6), execucoes (6), analises (6), midias (0) |
| Minhas frentes de trabalho — Wabfy | https://claude.ai/artifact/QxhwvohVNYRa1FtKq7znBW | `frentes-de-trabalho/` | Whiteboard | sim | board (1), elements (15) |
| Escrito nos Dados · copies da semana 1 | https://claude.ai/artifact/9XzAyY2EwqkgCEb2T2p5rh | `escrito-nos-dados-copies-semana-1/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo-<aba>.md`/`.docx` (5 abas: semana-1, semana-2, semana-3, semana-4, ugc) |
| Double check do site Wabfy · nov 2026 | https://claude.ai/artifact/H65Ww2uz3fCAK46cioRsXX | `double-check-site-nov-2026/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo.md`/`.docx` |
| Plano simples — Produção dos vídeos da Márcia | https://claude.ai/artifact/QFxb2A4XEUcTfedge1BJuj | `plano-videos-marcia/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo-<aba>.md`/`.docx` (3 abas: tab-1, proposta-formal, resumo-executivo) |
| Escrito nos Dados · plano de execução no ClickUp | https://claude.ai/artifact/HFz3mdrwUwzP5S3jgKzMNM | `escrito-nos-dados-plano-clickup/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo.md`/`.docx` |
| Está escrito nos dados | https://claude.ai/artifact/X3eFvoV5L6mf5rTqquQepv | `esta-escrito-nos-dados/` | página própria | não | — |
| Calendário Editorial Vivo | https://claude.ai/artifact/L3TxkJxZBn8Qts2rJX3RAu | `calendario-editorial-vivo/` | página própria | não (usa só localStorage do navegador) | — |
| Pautas de Novembro Wabfy | https://claude.ai/artifact/JjLSrtQpCwogq3FX6b1qn3 | `pautas-novembro/` | Slides | declarado, vazio | notes (0); slides em `project/`, 8 imagens em `_blob/` |
| Wireframe BSC — módulo Escalar | https://claude.ai/artifact/Ta71R3xXx7kGT8M1TJ8JSN | `wireframe-bsc-escalar/` | Design | declarado, coleções não identificadas | conteúdo em `project/Main.dc.html` |
| Wireframe · Colaboradores (Pilar Engajar) | https://claude.ai/artifact/XzBBV4sV8N5igegZuNj72k | `wireframe-colaboradores-engajar/` | Design | declarado, coleções não identificadas | conteúdo em `project/Main.dc.html` |
| Prévia dos E-mails Wabfy | https://claude.ai/artifact/PbV4SzAf9YoXtHUNP8z1Qm | `previa-emails/` | página própria | sim, vazio | edits (0), layout (0) |
| Quadro dos fluxos de leads | https://claude.ai/artifact/YWEEtRPvWDTx7MvtN8Vjaf | `quadro-fluxos-leads/` | página própria | não | — |
| Quadro dos fluxos de leads (2) | https://claude.ai/artifact/WBif4DkgybovQW2uoN54o9 | `quadro-fluxos-leads-2/` | página própria | não | — |
| Troca por área do RH | https://claude.ai/artifact/8G7gNdSf7v14WyjmamZTnd | `troca-por-area-rh/` | página própria | não | — |
| Wabfy Carreiras · Briefing criativo | https://claude.ai/artifact/VzYBiWd9zvaJXguyUPtuGP | `carreiras-briefing-criativo/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo-<aba>.md`/`.docx` (2 abas: briefing-criativo, briefing-final-para-producao; imagens só no .docx) |
| 9 Box: depois da reunião de talentos | https://claude.ai/artifact/WTzGSiYpMzuKhS6kSwBFZE | `9box-reuniao-talentos/` | Motion | sim | film (2), modules (10), assets (0) |
| Do Refatorando para a Wabfy: o que levar | https://claude.ai/artifact/8rjchLqFX5EwzzjJDA2Ug4 | `refatorando-para-wabfy/` | Docs | não (texto fica no Claude Docs) | — · texto exportado em `conteudo.md`/`.docx` |

## O que este backup NÃO cobre

- **Imagens dos documentos Docs no `.md`**: o texto das 6 abas foi exportado (`conteudo*.md` e `.docx`), mas no `.md` as imagens viram marcação de texto; use o `.docx`, que mantém as imagens. Datas e menções saíram como texto simples.
- **Whiteboard e Motion**: o `index.html` também é só o visualizador. O conteúdo está nos
  dumps do banco de dados (fora do repositório).
- **Banco de dados dos dois wireframes (Design)**: o banco existe, mas a página não diz
  quais coleções usa; não foi possível listar. O desenho em si está em `project/`.
- **Calendário Editorial Vivo**: o que foi editado na página ficou no localStorage do
  navegador de quem usou, não no claude.ai.
- **Comentários** feitos nas páginas não foram copiados.
