# Migração Wabfy: Claude → ChatGPT

Pacote gerado em 18/11/2026 com tudo da Wabfy que dava para tirar do Claude por aqui. O que não deu para tirar está na seção "Falta você baixar".

## O que tem nesta pasta

| Pasta | O que é | Uso no ChatGPT |
|---|---|---|
| `gpt/instrucoes-projeto-wabfy.md` | Instruções do time de agentes, condensadas (~4,7 mil caracteres, cabe no limite de 8 mil) | Colar em **Instruções** do projeto "Wabfy" ou de um GPT personalizado |
| `gpt/conhecimento/00..06-*.md` | A memória do projeto (00), as 19 skills, as referências do Cérebro, a skill de fila e os 14 subagentes, juntados em 6 arquivos por área | Subir como **arquivos** do projeto/GPT |
| `skills-claude/` | Cópia fiel do plugin `wabfy-agentes` v0.4.1 e da skill `wabfy-fila`, no formato original (`SKILL.md`) | Backup; serve também para ferramentas que leem o formato de skills |
| `tarefas-agendadas/` | Os prompts completos das tarefas agendadas dos agentes (Chefão, radares, listening etc.), com horário | Recriar como **Tarefas** agendadas no ChatGPT, ou guardar como receita |
| `artifacts/` | HTML dos artifacts da Wabfy (painel, Pulso, calendário, wireframes, prévias de e-mail...) e o texto dos 6 documentos Docs em `.md` e `.docx` | Abrir no navegador; republicar onde quiser |

Os dados dos bancos dos artifacts (registros do painel, leads, ideias, Pulso Orgânico) **não** estão no repositório, porque têm nome de pessoas. Vão num `.zip` à parte.

## Passo a passo no ChatGPT

1. Crie um **Projeto** chamado "Wabfy".
2. Em Instruções do projeto, cole `gpt/instrucoes-projeto-wabfy.md`.
3. Suba os 6 arquivos de `gpt/conhecimento/` e os documentos do Projeto Claude "Wabfy" (ver abaixo).
4. Teste com 3 pedidos que você já fez no Claude (ex.: "organiza essas demandas", "briefing do carrossel de PDI", "revisa esta copy") e compare.
5. Se preferir separar, dá para criar GPTs personalizados por área (Criação, Inteligência, Fila) com as mesmas instruções e só os arquivos da área.

## O que não migra igual (e como substituir)

| No Claude | Situação | Substituto sugerido |
|---|---|---|
| Painel "Central dos Agentes Wabfy" (banco compartilhado: registros, ideias, leads, testes, memória, confiança) | O GPT não tem esse banco | Google Sheets ou Notion, uma aba por coleção. Os dados exportados viram as abas iniciais |
| Pulso Orgânico Wabfy (dados de desempenho) | Idem | Planilha com as coleções semanas/publicacoes/leituras |
| Tarefas agendadas (11+ agentes) | ChatGPT tem Tarefas agendadas, mais simples | Recriar as essenciais (Chefão abertura/fechamento, Social listening); as que usam o seu Chrome dependem do modo agente do ChatGPT |
| Subagentes em paralelo e inspeção do Chefão | Não existe igual | O Chefão vira um passo de revisão no mesmo chat |
| Conectores (Granola, ClickUp, Elephan, Microsoft 365/Teams, Metricool, Canva) | Reconectar do lado do GPT, onde houver conector | Conferir um por um em Configurações → Conectores/Apps |
| Claude in Chrome (listening, concorrentes, visibilidade em IA, releases) | Depende do modo agente do ChatGPT | Testar uma rodada manual antes de agendar |

## Falta você baixar (não consigo acessar daqui)

- [ ] **Documentos do Projeto Claude "Wabfy"**: pasta `claude/` (fonte da verdade, base de conhecimento, pendências, releases, revisões, calendário, briefings, concorrentes...). Abra o projeto no claude.ai e baixe os arquivos. São a parte mais valiosa depois das skills.
- [x] **Memória do projeto**: já está em `gpt/conhecimento/00-memoria.md`.
- [ ] **Exportação oficial da conta**: claude.ai → Settings → Privacy → Export data (histórico de conversas).
- [ ] **Artifacts compartilhados por outras pessoas**: "Painel Wabfy" e "Wabfy Design System". Peça o original a quem compartilhou.
- [ ] **Skills que você subiu na conta**: o pacote aqui veio da sincronização da conta; se você editou algo direto no claude.ai depois de hoje, baixe de novo.

## Antes de desligar o Claude

- As tarefas agendadas continuam rodando e gravando no painel até você pausá-las. Pause depois que o substituto estiver rodando.
- Os links `claude.ai/artifact/...` citados nas skills deixam de servir no GPT; troque pelos links da planilha nova quando ela existir.
