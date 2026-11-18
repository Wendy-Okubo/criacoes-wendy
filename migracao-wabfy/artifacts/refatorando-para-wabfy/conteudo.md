# Do Refatorando para a Wabfy: o que levar

Oct 7, 2026 · @Wendy

## Contexto

A Refatorando pausou e o trabalho continua na Wabfy, com foco em distribuição orgânica em social media e copy persuasiva. Este doc lista o que do ambiente atual (projeto Formação IA, skills próprias e rotinas agendadas) vale levar, e em que ordem.

A [Wabfy](https://wabfy.com/pt-br/) é um SaaS B2B de gestão de pessoas. O produto parte da definição de funções e competências e conecta avaliações, PDI, trilhas de aprendizagem, carreira, sucessão e contratação. Atende médias e grandes organizações, inclusive setor público (o case principal é a Caixa, com 150 mil servidores). O funil aponta para "Agende uma demonstração", e o site está em cinco idiomas.

|  | Refatorando | Wabfy |
| --- | --- | --- |
| Modelo | B2C, escola de IA | B2B, SaaS de RH |
| Quem decide | A própria pessoa | RH, diretoria, compras |
| Conversão | Matrícula na turma | Demo agendada |
| Canal provável | Instagram em primeiro | LinkedIn em primeiro |
| Tom do site | Conversa próxima | Direto e imperativo |

## Leve o método, deixe o conteúdo

O método é seu: como você decide, escreve, mede e corrige. O conteúdo (brand book, copies, dados de métricas, ementa, roteiros de aula) pertence à Refatorando/Belago e fica.

Na prática, cada item migrado chega na Wabfy como estrutura: as regras e os campos vêm, os exemplos e números da Refatorando saem.

## Ordem de migração

Cinco blocos, do que vale desde o primeiro dia ao que depende de conhecer a marca nova.

| # | O que levar | Origem | O que fica igual | O que muda na Wabfy | Quando |
| --- | --- | --- | --- | --- | --- |
| 1 | Postura de escrita | `organico-log-correcoes` | Escrever em vez de peneirar; assumir e sinalizar; vícios de IA; não inventar dado, número ou depoimento; aviso ao lado da entrega | Sai a tabela skill × mestre da Refatorando; o log recomeça vazio e cresce com as correções na Wabfy | Dia 1 |
| 2 | Sistema do orgânico | `organico-pilares-e-registros`, `organico-banco-de-provas`, `organico-pautas-e-ganchos` + o log | A estrutura dos quatro docs e como eles conversam | Nascem vazios. O banco de provas é o mais trabalhoso: o site mostra indicadores sem valores, e copy persuasiva B2B depende de prova | Primeiras semanas |
| 3 | Content Format Rotator | skill `content-format-rotator` | O motor de decisão: objetivo, funil, prova disponível, histórico, hipótese e métrica | Biblioteca refeita para LinkedIn B2B: documento/PDF, framework visual, case, bastidor de implantação, post de porta-voz | Primeiras semanas |
| 4 | Método de medição | `pulso-organico-mensal`, `plataforma-metricas-sociais-plano-tecnico` | As três regras de dado (orgânico × pago, janela da medição, nunca somar canais), lógica semanal e mensal, caminho de API do LinkedIn | Contas e painéis novos. Primeiro passo: uma leitura dos canais atuais como linha de base | Primeiro mês |
| 5 | Voz, roteiros e briefings | skills `voz-refatorando`, `roteiros-refatorando`, `briefings-social-refatorando` | Os cinco registros de voz, estrutura de retenção, anti-vícios, ritmo de telas | Conteúdo da marca refeito do zero; o tom da Wabfy é direto e imperativo | Depois de entender a marca |

Uma regra do log pede revisão logo de cara: a urgência de mercado ("não fique pra trás") foi liberada para o B2C da Refatorando. Em venda institucional e para o setor público, tende a soar errado.

## Ponte de conteúdo e o que perde peso

A frente de liderança da Refatorando já falava com o público da Wabfy. A campanha de ads de liderança, a pesquisa do público de 35–45 anos (gestores) e a análise de como os concorrentes comunicam liderança tocam em competências, PDI e desenvolvimento. Os achados sobre a dor do gestor valem como hipótese a testar. O comprador muda: antes era a pessoa que se desenvolve, agora é quem decide pela empresa.

Perdem peso:

- **Roteiros de Reels e briefings de Instagram B2C.** A estrutura serve, mas canal e linguagem mudam.
- **Urgência de mercado como gancho.** Ver a regra a revisar acima.

Entra no radar: tradução e localização, já que o site está em cinco idiomas.

## O que fica de fora

- **Discovery follow-up.** É uma skill de vendas. Só volta se você for apoiar o time comercial.
- **Identidade visual da Refatorando.** A marca é outra.
- **Conteúdo da Formação IA:** copies de LP, campanhas, briefings de motion e reel, ementa, roteiros de aula e números de performance.

## Próximos passos

- [ ] Abrir um projeto novo para a Wabfy e deixar o Formação IA como arquivo
- [ ] Montar o kit de entrada: postura de escrita limpa e os quatro docs do orgânico estruturados e vazios
- [ ] Fazer a leitura de linha de base dos canais atuais da Wabfy
- [ ] Adaptar o Content Format Rotator com a biblioteca de formatos para LinkedIn B2B
- [ ] Revisar a regra de urgência de mercado no novo log
- [ ] Decidir se pausa as quatro tarefas agendadas da Refatorando: Pulso semanal Instagram (segundas), Pulso semanal YouTube e LinkedIn (terças), Pulso mensal (dias 1 a 3) e resumo de notícias de IA (seg, qua e sex)

## Fontes

- [Site da Wabfy](https://wabfy.com/pt-br/), consultado em 07/10/2026
- Docs do projeto Formação IA e skills próprias citadas na tabela
