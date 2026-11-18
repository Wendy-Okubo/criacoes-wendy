# Tarefas agendadas (exportadas do Claude)

Exportação de todas as tarefas agendadas da conta, em 18/11/2026, para recriar em outra plataforma. Cada arquivo traz os dados da tarefa e o prompt completo, copiado sem alteração. Horários em Brasília (America/Sao_Paulo).

## Wabfy (ativas)

| Tarefa | Quando roda | Arquivo |
|---|---|---|
| Chefão Wabfy – abertura do dia | seg a sex, 9h40 | [chefao-wabfy-abertura-do-dia.md](chefao-wabfy-abertura-do-dia.md) |
| Radar de RH Wabfy | seg, 9h41 | [radar-de-rh-wabfy.md](radar-de-rh-wabfy.md) |
| Social listening Wabfy (no computador) | seg a sex, 9h47 e 15h47 | [social-listening-wabfy-no-computador.md](social-listening-wabfy-no-computador.md) |
| Espião de concorrentes Wabfy (no computador) | qua, 9h47 | [espiao-de-concorrentes-wabfy-no-computador.md](espiao-de-concorrentes-wabfy-no-computador.md) |
| Pulso Orgânico Wabfy – coleta semanal | sex, 9h50 | [pulso-organico-wabfy-coleta-semanal.md](pulso-organico-wabfy-coleta-semanal.md) |
| Radar de cultura Wabfy | seg e qui, 9h53 | [radar-de-cultura-wabfy.md](radar-de-cultura-wabfy.md) |
| Monitor de releases Wabfy | sex, 14h22 | [monitor-de-releases-wabfy.md](monitor-de-releases-wabfy.md) |
| Visibilidade em IA Wabfy (no computador) | seg, 15h26 (só trabalha na 1ª segunda do mês) | [visibilidade-em-ia-wabfy-no-computador.md](visibilidade-em-ia-wabfy-no-computador.md) |
| Revisor de páginas Wabfy | ter, 15h34 (só trabalha a cada 15 dias) | [revisor-de-paginas-wabfy.md](revisor-de-paginas-wabfy.md) |
| Escuta do comercial Wabfy (Elephan) | qui, 15h37 (só trabalha a cada 15 dias) | [escuta-do-comercial-wabfy-elephan.md](escuta-do-comercial-wabfy-elephan.md) |
| Analista de desempenho Wabfy | sex, 15h41 | [analista-de-desempenho-wabfy.md](analista-de-desempenho-wabfy.md) |
| Guardião da memória Wabfy | sex, 16h43 | [guardiao-da-memoria-wabfy.md](guardiao-da-memoria-wabfy.md) |
| Chefão Wabfy – fechamento do dia | seg a sex, 17h27 | [chefao-wabfy-fechamento-do-dia.md](chefao-wabfy-fechamento-do-dia.md) |

## Fora da Wabfy (todas desativadas)

| Tarefa | Quando rodaria | Arquivo |
|---|---|---|
| Pulso Orgânico – relatório semanal Instagram (Refatorando) | seg, 9h45 | [pulso-organico-relatorio-semanal-instagram.md](pulso-organico-relatorio-semanal-instagram.md) |
| Pulso Orgânico – relatório semanal YouTube e LinkedIn (Refatorando) | ter, 10h12 | [pulso-organico-relatorio-semanal-youtube-e-linkedin.md](pulso-organico-relatorio-semanal-youtube-e-linkedin.md) |
| Pulso Orgânico – relatório mensal Instagram, YouTube e LinkedIn (Refatorando) | dias 1, 2 e 3 do mês, 9h57 | [pulso-organico-relatorio-mensal-instagram-youtube-linkedin.md](pulso-organico-relatorio-mensal-instagram-youtube-linkedin.md) |
| Weekly AI news summary (grupo de WhatsApp) | seg, qua e sex, 11h (cron em UTC, 14h) | [weekly-ai-news-summary.md](weekly-ai-news-summary.md) |

## Dependem do computador da Wendy (Claude in Chrome)

Estas precisam do Chrome da Wendy aberto e logado. Na outra plataforma, precisam de um agente com navegador logado nas mesmas contas.

- **Dependem totalmente do Chrome:** Social listening (Business Suite e LinkedIn), Visibilidade em IA (ChatGPT, Gemini, Google, Claude, Copilot), Pulso Orgânico Wabfy – coleta semanal (Business Suite, LinkedIn, RD Station) e as três tarefas Pulso da Refatorando, desativadas.
- **Usam o Chrome, mas seguem sem ele:** Espião de concorrentes (cai para busca na web), Monitor de releases (pula a demo), Analista de desempenho (usa só os dados do Pulso e do painel), Revisor de páginas (lê a demo pelo Chrome).
- **Não usam o computador:** Chefão (abertura e fechamento), Radar de RH, Radar de cultura, Guardião da memória, Escuta do comercial (roda na nuvem, pela Elephan) e Weekly AI news summary.

## Observações para a migração

- Quase todas gravam no painel do Claude (artifact `7hA7NdhzxZt5NiZvByqUpc`) ou no Pulso Orgânico (`WTM8Ns34ZsUgmW2fRFEhpw`) com a ferramenta ArtifactData. Na outra plataforma, isso precisa de um banco equivalente.
- O Chefão – fechamento do dia manda refazer entregas disparando outras tarefas pelos ids do Claude. Alguns desses ids no prompt não batem com os ids atuais.
- O Guardião da memória depende da memória e dos documentos do projeto Claude "Wabfy".
- Várias citam skills e subagentes do pacote `wabfy-agentes`; sem eles, o próprio prompt traz as instruções de reserva.
