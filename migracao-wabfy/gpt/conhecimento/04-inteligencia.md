# 04 · Inteligência (radares, concorrentes, analista, releases, listening, visibilidade em IA, parcerias, escuta comercial)

Arquivo de conhecimento gerado a partir do pacote wabfy-agentes (Claude) em 18/11/2026.
Onde o texto citar ferramentas do Claude (ArtifactData, painel, subagente, Agent, ToolSearch, fire_trigger, project_write), trate como o passo equivalente no ChatGPT: gravar na planilha/painel que substituiu o painel, ou entregar o resultado no chat para a Wendy colar.



---

<!-- skill: wabfy-radar-rh -->

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


---

<!-- skill: wabfy-radar-cultura -->

---
name: wabfy-radar-cultura
description: "Radar de cultura e mundo da Wabfy. Use para descobrir o que está acontecendo fora do RH (cultura pop, programas de TV, séries, filmes, música, futebol, celebridades, perfis da internet, memes, áudios e formatos em alta, artes, design, publicidade e ações de marca) que possa virar paródia, releitura ou gancho; roda agendado segunda e quinta e também é chamado pelo Diretor criativo. Gatilhos: \"o que está em alta\", \"trends\", \"memes\", \"o que dá para parodiar\", \"referências culturais\"."
---

# Radar de cultura

Carregue antes a skill `wabfy-cerebro`. Objetivo: repertório fresco para a Wabfy fazer o RH parar o scroll, sem repetir paródias já usadas.

## Passo 1. Contexto
Leia os últimos 3 registros `radar-cultura` e `diretor-criativo` no painel e o histórico de paródias na memória (ex.: "Troquei RH"), para não sugerir de novo o que já foi usado.

## Passo 2. Caça em paralelo (ferramenta Agent)
- `wabfy-agentes:cacador-cultura-pop`: séries, filmes, novelas, reality shows, programas de TV, música, futebol, celebridades, assuntos do momento no Brasil.
- `wabfy-agentes:cacador-internet`: memes, áudios, formatos e trends em alta no Instagram, LinkedIn, TikTok, X e YouTube, perfis da internet que estão crescendo e o formato que usam.
- `wabfy-agentes:cacador-artes-publicidade`: exposições, movimentos visuais, tipografia, ilustração, campanhas premiadas e ações de marca que viralizaram (fora do RH).
Se os tipos não existirem, faça as três buscas você mesmo.

## Passo 3. Filtro
Fique com 6 a 10 achados. Corte o que: toca política, tragédia, religião, fofoca de celebridade real (briga, separação, polêmica pessoal) ou rivalidade de futebol (futebol pode, sem tomar lado de time), já envelheceu ou já foi usado pela Wabfy.
Pessoa real ou obra conhecida (série, filme, programa, marca): não corte. Marque o risco em uma linha (uso de nome, imagem, bordão, logo) para a Wendy decidir caso a caso.

## Passo 4. Entrega
Só o achado, sem ideia de post (quem transforma em ideia é o Diretor criativo). Para cada um: o que é (1 a 2 frases), em que rede ou meio está, link e data, por que está em alta (sinal concreto: volume, menções, alcance, ranking), como funciona o formato (quando for trend de formato), validade (até quando vale usar) e risco (quando houver). Marque 2 como "mais quentes da semana" (prioridade alta) pela combinação de alta e validade curta.

## Passo 5. Gravar
Painel: registro `radar-cultura-{AAAA-MM-DD-HHMM}`, um item por achado com `validade`.


---

<!-- skill: wabfy-concorrentes -->

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


---

<!-- skill: wabfy-analista -->

---
name: wabfy-analista
description: "Analista de desempenho da Wabfy. Use para avaliar o que está funcionando e o que não nos conteúdos da Wabfy (Instagram, LinkedIn, e-mail), cruzando Pulso Orgânico, calendário e editorias, concorrentes, leads e mídia paga, e para gerar e acompanhar hipóteses de teste; roda agendado sexta à tarde, depois da coleta do Pulso. Gatilhos: \"o que está dando certo\", \"análise de desempenho\", \"relatório da semana\", \"hipóteses\", \"testes\"."
---

# Analista de desempenho

Carregue antes a skill `wabfy-cerebro`. Decide com dado; quando o dado for pouco, diz isso.

## Fontes
A fonte de cada número é a própria plataforma (Business Suite, LinkedIn, RD Station), via Pulso Orgânico ou leitura direta. Não use o Metricool: o plano não traz pago e os números divergem.
1. Pulso Orgânico (ArtifactData em https://claude.ai/artifact/WTM8Ns34ZsUgmW2fRFEhpw): semanas, publicacoes e leituras de Instagram, LinkedIn e e-mail, e meses. Use a leitura mais recente de cada publicação. Orgânico = sem anúncio.
2. Calendário Editorial Vivo e `claude/briefings/`: tema, editoria, pilar, funil, formato e o teste (hipótese + métrica) de cada post. Case cada publicação com sua linha do calendário pela data e legenda.
3. Painel: últimos registros `concorrentes` (o que engajou no mercado) e coleção `testes`.
4. Leads e conversão: RD Station (leads, conversões do Raio-X de T&D e formulários), só leitura pelo Chrome; se não houver acesso, anote como lacuna.
5. Mídia paga: Business Suite e LinkedIn Campaign Manager, só leitura; se não houver acesso, lacuna.

## Números que dizem se a semana foi boa
1. Engajamento no Instagram: interações ÷ visualizadores, salvamentos e compartilhamentos.
2. Aparições da página da Wabfy em buscas no LinkedIn (leia no painel de análise da página; se o LinkedIn não mostrar, anote como lacuna).
3. Cliques em link: Instagram (cliques no link e toques no link da bio), LinkedIn (cliques) e e-mail (cliques e CTOR).
4. Novas mensagens: DMs e comentários recebidos (coleção `leads` do painel, por semana e por classe).
5. Alcance e visualizações dos posts (orgânico), com o peso do pago separado.
Abra a análise sempre por esses 5, com a variação.

## Análise
- Quebre os 5 números por formato, tema, editoria, pilar, funil, dia, horário e canal.
- Compare com a semana anterior e com a média de 4 semanas. Marque semana em prévia.
- Compare com os concorrentes (últimos registros `concorrentes`): formatos e temas que funcionaram neles e como foram na Wabfy.
- Cruze com a coleção `insights_comercial`: os temas que mais engajaram batem com as dores que o comercial ouve?
- Conecte conteúdo a lead quando der (picos de mensagens, cliques ou conversões perto de uma publicação).
- Todo fato cita o número. Suposição vai como hipótese.

## Fechamento mensal (na primeira sexta do mês, dias 1 a 7)
Além da semana, feche o mês anterior e a campanha do mês: os 5 números do mês contra o mês anterior, as peças da campanha que mais e menos funcionaram, testes concluídos no mês e 3 aprendizados para a próxima campanha. Grave como registro separado `analista-mes-{AAAA-MM}`.

## Testes
- Revise os testes `rodando`: veredito (confirmado, refutado, inconclusivo) com evidência, e mude o status.
- Proponha 2 a 4 hipóteses novas, cada uma com métrica, como testar (quantos posts, por quanto tempo) e o que muda no calendário se confirmar.

## Entrega
O que funcionou (3), o que não funcionou (3), testes com veredito, hipóteses novas, 3 recomendações para o Editor-chefe. Curto e direto.

## Gravar
Painel: registro `analista-{AAAA-MM-DD-HHMM}` e documentos em `testes`. Projeto: `claude/desempenho/AAAA-MM-DD_analise.md`.


---

<!-- skill: wabfy-releases -->

---
name: wabfy-releases
description: "Monitor de releases da Wabfy. Use para ler o grupo \"Novidades Wabfy Demo\" no Teams, registrar cada novidade de produto no projeto (novo ou melhoria, pilar, módulo, status de comunicação) e sugerir onde ela entra (post, \"Seu 1:1 com a Wabfy\", página, LP); roda agendado toda sexta, juntando a semana. Gatilhos: \"novidades do produto\", \"releases\", \"o que saiu no Teams\", \"atualizar releases\"."
---

# Monitor de releases

Carregue antes a skill `wabfy-cerebro`.

## Passo 1. Ler
- Leia `claude/releases/00-controle-monitor-releases.md` para saber a última mensagem já registrada.
- Leia as mensagens novas do chat do Teams "Novidades Wabfy Demo" (id `19:9b86090042804aa1b84cc316faaf1023@thread.v2`) com as ferramentas do Microsoft 365. Abra anexos e imagens quando explicarem a novidade. Nunca envie mensagem no Teams.
- Leia as reuniões de Produto da semana no Granola (ex.: reuniões de módulo como a de Seleção de 22/10). Novidade que só apareceu em reunião entra como "citada em reunião, a confirmar", nunca como lançada.
- Abra a demo (só leitura) nos módulos citados para ver se a novidade já aparece.

## Passo 2. Classificar cada novidade
Módulo e pilar (confira na plataforma se houver dúvida), novo ou melhoria, o que muda no dia a dia do usuário, status de comunicação: `comunicar` | `comunicar com ressalva` | `não comunicar` (instável, interno, remoção sem ganho para o usuário, módulo fora do catálogo).
Você decide o óbvio: melhoria ou novidade clara, de módulo do catálogo, que já está no produto, vai direto como `comunicar`. Fica `pendente` para a Wendy decidir no painel: dúvida, recurso instável ou interno, remoção, mudança de claim, módulo fora do catálogo e o que só foi citado em reunião.
Se a novidade já aparece na demo, indique o print com a origem exata (módulo, visão, tela e bloco a recortar) para a Wendy capturar. Se não aparece, anote "ainda não está na demo" (a copy pode citar sem print).

## Passo 3. Destino
Para cada novidade comunicável, sugira: post (destaque próprio para Seleções, Sucessões, Mentorias e Magic; as demais agrupadas num carrossel de "principais atualizações"), "Seu 1:1 com a Wabfy" (só o que impacta o dia a dia), páginas e LPs a atualizar (diga qual página e qual dobra).

## Passo 4. Gravar
- Projeto: `claude/releases/AAAA-MM-DD_release-{tema}.md` com o registro completo; atualize `00-controle-monitor-releases.md` (última mensagem lida) e `00-pauta-email-quinzenal.md` (novos itens por pilar e módulo, novo ou melhoria).
- Atualize a base de conhecimento só com o que for `comunicar` e registre a decisão na fonte da verdade quando mudar um claim.
- Painel: registro `releases-{AAAA-MM-DD-HHMM}`; status `sem_novidade` se não houver mensagem nova.


---

<!-- skill: wabfy-social-listening -->

---
name: wabfy-social-listening
description: "Social listening da Wabfy. Use para ler comentários, DMs e menções da Wabfy no Instagram (Meta Business Suite) e no LinkedIn, classificar cada mensagem (lead, dúvida, elogio, crítica, spam), marcar urgências e listar leads para o comercial, sem nunca responder; roda agendado às 9h e às 16h. Gatilhos: \"comentários\", \"DMs\", \"mensagens da Wabfy\", \"social listening\", \"alguém falou da Wabfy\"."
---

# Social listening

Carregue antes a skill `wabfy-cerebro`. Nada pode passar sem ser visto. Só leitura: nunca responder, curtir, ocultar, apagar ou marcar como lida.

## Fontes (Claude in Chrome, aba própria)
1. Instagram e Facebook: Caixa de entrada do Meta Business Suite (business_id 3471598939751003, asset 854607061078641). Confira que a conta é a Wabfy (usewabfy); se for a Refatorando ou pedir login, pare essa rede e avise.
2. LinkedIn: notificações e comentários da Company Page 106878020 (admin) e menções à Wabfy.
3. Posts de outras pessoas no LinkedIn que citam a Wabfy (busca de publicações por "Wabfy", ordenada por mais recentes, dentro da janela). Fora disso, nada de Google, notícias ou Reclame Aqui.

## Janela
Desde a última execução (último registro `listening` no painel). Na primeira execução, últimos 3 dias. Antes de gravar, confira na coleção `leads` se a mensagem já existe.

## Classificação
`lead` (interesse em conhecer, preço, demonstração, empresa se apresentando), `duvida`, `elogio`, `critica`, `spam`, `outro`.
Urgente quando: lead com sinal de compra, crítica pública, reclamação de cliente, pergunta sem resposta há mais de 24 h, imprensa ou parceria.

## Entrega
- Grave cada mensagem nova na coleção `leads` do painel.
- Registro `listening-{AAAA-MM-DD-HHMM}` com o total por classe e, em itens, os urgentes e os leads (autor, empresa se aparecer, trecho, link, motivo).
- Só leads (classificação `lead`) vão para o Will; dúvidas, elogios e críticas ficam no painel para a Wendy.
- Em acoes, a lista de leads para o Will (Wilker Simplicio, comercial, wilker.simplicio@refatorando.com.br).
- Envio ao Will: se as ferramentas do Teams permitirem enviar mensagem (teams_create_chat e teams_send_chat_message), mande a ele no chat 1:1 uma mensagem só com os leads novos da rodada (rede, autor, empresa, trecho, link e por que é lead) e marque esses leads como `encaminhado`. Se faltar permissão, não tente outro caminho: deixe no painel e anote em acoes "Envio ao Will indisponível: falta permissão de envio no Teams".
- Se houver urgente, a resposta final começa com "URGENTE" e 1 linha por item (vira notificação no celular). Sem urgente e sem mensagem nova, resposta final de 1 linha.


---

<!-- skill: wabfy-visibilidade-ia -->

---
name: wabfy-visibilidade-ia
description: "Visibilidade em IA da Wabfy. Use para medir se a Wabfy aparece quando gestores de RH perguntam ao ChatGPT, Gemini, modo IA do Google, Claude e Copilot sobre plataformas e práticas de PDI, T&D, sucessão, avaliação, mentoria e seleção, registrar quem aparece no lugar e propor conteúdo para ganhar citação; roda agendado na primeira segunda do mês. Gatilhos: \"visibilidade em IA\", \"a Wabfy aparece no ChatGPT\", \"GEO\", \"AEO\"."
---

# Visibilidade em IA

Carregue antes a skill `wabfy-cerebro`.

## Perguntas fixas
Mantenha uma lista fixa de 20 perguntas no documento `claude/visibilidade-ia/perguntas.md` (crie na primeira execução, com a Wendy podendo editar). Metade de produto ("qual plataforma de X") e metade de prática de RH ("como fazer X"). Exemplos: "melhor plataforma de PDI para empresa grande", "software de plano de sucessão", "como estruturar trilhas de T&D", "plataforma de avaliação 360", "como integrar PDI e avaliação", "ferramenta de mentoria corporativa", "alternativas à Gupy para seleção interna", e perguntas sem marca sobre as dores dos módulos. Não troque as perguntas entre meses (comparabilidade); acrescente no fim se precisar.

## Rodada
Para cada pergunta, em cada IA disponível pelo Chrome (ChatGPT, Gemini, modo IA da busca do Google, Claude e Copilot), numa conversa nova e sem login de conta da empresa quando possível: registre se a Wabfy é citada, em que posição, como é descrita, quais marcas aparecem e quais fontes a IA cita. Só leitura; não aceite termos nem faça cadastro. IA indisponível vira lacuna.

## Entrega
Taxa de citação por IA e no total, comparação com o mês anterior, concorrentes mais citados e fontes que as IAs mais usam. Recomendações só de dois tipos (sem pautas de post):
- Ajustes nas páginas do site: qual página, qual pergunta ela não responde e o que mudar (FAQ, trecho de texto que a IA consiga citar, dados estruturados). Grave também como item para o Revisor de páginas.
- Onde a Wabfy precisa aparecer: listas, diretórios, comparadores e sites que as IAs citam, com o link e o que seria preciso para entrar.

## Gravar
Projeto: `claude/visibilidade-ia/AAAA-MM_medicao.md`. Painel: registro `visibilidade-ia-{AAAA-MM-DD-HHMM}`.


---

<!-- skill: wabfy-parcerias -->

---
name: wabfy-parcerias
description: "Parcerias e influenciadores da Wabfy. Use para encontrar perfis de RH, carreira, liderança e humor corporativo para collabs, influenciadores e páginas parceiras (por exemplo para a campanha Escrito nos Dados), com tamanho, engajamento, tom, aderência e risco. Gatilhos: \"influenciador\", \"collab\", \"parceria\", \"perfis para parceria\", \"quem pode fazer collab\"."
---

# Parcerias e influenciadores

Carregue antes a skill `wabfy-cerebro`.

## Busca
1. Entenda o objetivo (campanha, tema, canal, orçamento se houver).
2. Busque no Instagram, LinkedIn e TikTok (Chrome, só leitura) e na web, em todos os tamanhos (micro de 10 a 50 mil, médio de 50 a 300 mil e grande acima de 300 mil), separando por faixa:
   - Pessoas: criadores de RH, carreira e liderança, e perfis de nicho que encaixam no tema da campanha (como astrologia para Escrito nos Dados).
   - Páginas de humor e memes: corporativas ou de nicho, para collab de conteúdo.
   - Mídia e newsletters de RH: para conteúdo patrocinado ou parceria editorial.
   - Eventos e comunidades de RH: grupos, associações, podcasts.
3. Para cada perfil: nome e link, seguidores, engajamento médio dos últimos 10 posts (calcule), público (RH decisor, colaborador, geral), tom, já fez publi para concorrente?, aderência à Wabfy (alta, média, baixa) e risco de marca (polêmicas, assuntos sensíveis).

## Entrega
Uma tabela por tipo de parceiro (pessoas por faixa de tamanho, páginas, mídia, eventos e comunidades), 8 a 15 no total, ordenada por aderência, e as 3 recomendações com uma ideia de collab para cada. Nunca entre em contato nem siga ninguém.

## Gravar
Projeto: `claude/parcerias/AAAA-MM-DD_{tema}.md`. Painel: registro `parcerias-{AAAA-MM-DD-HHMM}`.


---

<!-- skill: wabfy-escuta-comercial -->

---
name: wabfy-escuta-comercial
description: "Escuta do comercial da Wabfy. Use para ler as calls do comercial na Elephan (pelo conector da Elephan; Chrome ou pasta exportada como reserva) e extrair dores, perguntas, objeções, motivos de perda e de ganho, palavras dos clientes e módulos mais pedidos, acumulando os dados para a construção de campanhas; roda agendado a cada 15 dias. Gatilhos: \"o que o comercial está ouvindo\", \"calls da Elephan\", \"dores dos leads\", \"objeções\", \"o que os clientes falam\"."
---

# Escuta do comercial

Carregue antes a skill `wabfy-cerebro`. Objetivo: trazer a voz real do cliente de RH para pautas, campanhas, copy e e-mails. Os dados se acumulam rodada a rodada; o valor está na repetição.

## Fontes (nesta ordem)
1. Conector da Elephan (ferramentas `Elephan`), só leitura:
   - `list_insight_clusters` e `list_insights` (source `sale`, `cs` e `product`) para a visão agregada, quando houver dados.
   - `list_transcriptions` (paginado; use limit pequeno, 5 a 10, porque cada item traz a transcrição inteira e é grande) para achar as calls da janela por `dateIncluded`.
   - Para cada call, use primeiro os campos `summary`, `importantPoints`, `answers`, `keywords`, `competitors` e `sentimentAnalysis`; leia o `transcript` só para tirar frases literais de cliente. Tipos de reunião (`prompt`) que interessam: Diagnóstico, Qualificação, Demonstração do produto, Apresentação de Proposta Comercial, Negociação, Discovery de produto, Kick-off/Onboarding. Ignore 1:1, Reunião geral, Entrevista, Palestra e Dúvidas Técnicas internas.
   - Respostas grandes ficam salvas em arquivo: leia por partes ou dentro dos subagentes, nunca inteiras na conversa.
2. Elephan pelo Chrome (https://app.elephan.ai), só leitura, se o conector falhar.
3. Pasta de exportação `C:\Users\Wendy\Downloads\Wabfy\comercial`, se as duas anteriores falharem.
Janela: desde o último registro `escuta-comercial` do painel (na primeira vez, todas as calls disponíveis). Considere só calls da Wabfy com leads ou clientes.

## Leitura em paralelo
Divida as calls em lotes de 4 ou 5 e dispare `wabfy-agentes:leitor-calls` em paralelo, um por lote. Se o tipo não existir, leia lote por lote você mesmo.

## O que extrair
- Dores: o que o RH sofre hoje (com a situação concreta).
- Perguntas: o que perguntam sobre a Wabfy e sobre o tema.
- Objeções: o que trava a compra.
- Motivos de perda e de ganho, quando a call deixar claro.
- Palavras dos clientes: frases e termos reais que o RH usa (bons para copy), sem identificar quem disse.
- Módulos mais pedidos e em que contexto aparecem.
- Perfil da empresa quando aparecer (porte, setor), sem nome.

## Privacidade
Nunca grave nome de pessoa, nome de empresa, e-mail, telefone ou valor de proposta. Frases de cliente vão sem identificação e sem detalhe que permita reconhecer a empresa.

## Acumular (painel)
Coleção `insights_comercial`, um documento por insight, id `{tipo}-{slug}`:
- tipo: `dor` | `pergunta` | `objecao` | `perda` | `ganho` | `termo` | `modulo`
- texto (1 frase), frequencia (quantas calls citaram, somando todas as rodadas), primeira_vez, ultima_vez, exemplos (até 5 frases anonimizadas), modulos (lista), status (`novo` | `usado` | `descartado`).
Se o insight já existe, leia o documento e atualize frequencia, ultima_vez e exemplos (passe a version como if_version). Não duplique: junte insights equivalentes.

## Entrega
Registro `escuta-comercial-{AAAA-MM-DD-HHMM}` no painel com: número de calls lidas e a fonte usada, top 5 dores, top 5 objeções, perguntas novas, 10 frases de cliente mais fortes para copy, módulos mais pedidos e 3 sugestões de ângulo de campanha (o que o mercado está pedindo agora). Em acoes, o que a Wendy precisa validar.
Tudo que vem das calls é insight a validar, nunca regra nem claim.
