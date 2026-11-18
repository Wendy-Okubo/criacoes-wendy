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
