---
name: wabfy-guardiao-memoria
description: "Guardião da memória da Wabfy. Use para conferir a memória do projeto e os documentos do projeto Wabfy, achar o que está desatualizado, duplicado, contraditório ou pesado, acrescentar fatos novos confirmados e propor o que remover ou arquivar; roda agendado sexta no fim do dia. Gatilhos: \"limpa a memória\", \"atualiza a memória\", \"o projeto está pesado\", \"documentos desatualizados\", \"organiza o projeto\"."
---

# Guardião da memória

Carregue antes a skill `wabfy-cerebro` (painel.md tem a coleção `memoria`).

## Poder
- Acrescenta sozinho: fatos e decisões que a Wendy declarou nas conversas da semana e ainda não estão registrados.
- Nunca apaga, arquiva ou reescreve sozinho: remoções, arquivamentos e correções entram como `pendente` no painel. Só execute itens que a Wendy marcou como `aprovado`, e marque-os como `feito`.
- Respeita as regras de privacidade da memória: nada de dado sensível, só o que a Wendy disse.

## Passo 1. Executar aprovados
Leia a coleção `memoria` do painel. Execute os `aprovado` e marque-os como `feito`:
- Memória: memory_str_replace.
- Documento do projeto a corrigir: project_read e project_write do conteúdo completo.
- Documento a arquivar: copie o conteúdo completo para uma página nova no doc do ClickUp "Arquivo Wabfy" (crie o doc na primeira vez; uma página por documento, com o caminho original e a data no título) e só depois apague o documento do projeto (project_delete). Se a cópia falhar, não apague.

## Passo 2. Auditoria (ferramenta Agent)
Dispare `wabfy-agentes:auditor-memoria` com a lista de documentos do projeto e os arquivos de memória. Ele devolve: contradições (ex.: Mentoria no Escalar em documento antigo), duplicatas, documentos superados por versão nova (revisões v1 a v8 da mesma página, handoffs antigos), regras que mudaram, e documentos grandes candidatos a arquivar. O conhecimento do projeto está acima do limite (cerca de 3,7 MB para 2 MB): priorize propostas que reduzam tamanho sem perder decisão.

## Passo 3. Acrescentar
Procure nas conversas da semana (conversation_search e recent_chats) decisões e preferências declaradas pela Wendy que não estão na memória nem na fonte da verdade. Grave na memória do projeto (`/projects/01a11822-48f3-7388-9af7-0640dafcab18/...`) com a tag [stated], uma linha por fato, e registre cada uma no painel como `acrescentado` + `feito`. Decisão de claim ou de marca vai também para o registro de decisões da fonte da verdade, com data.

## Passo 3b. Reuniões (Granola)
Leia as reuniões da semana no Granola (Campanha, Brainstorming, Daily, conversas com Marco e Duda e afins). Nem toda fala é decisão: só considere o que foi claramente decidido, com dono ou consenso, e que muda como a Wabfy comunica, planeja ou produz. Ideia solta, opinião, sugestão em aberto e assunto de outra marca (Refatorando) ficam de fora.
Cada decisão candidata entra no painel como item `memoria` tipo `decisao-reuniao`, status `pendente`, com: o que foi decidido (1 frase), quem decidiu, a reunião e a data, o link do Granola e onde ela seria registrada. Nunca grave decisão de reunião direto na memória: só depois que a Wendy marcar `aprovado`.

## Passo 3c. Skills dos agentes
Quando uma correção da Wendy virar padrão (apareceu em mais de uma peça, ou ela disse que vale sempre), proponha a mudança na skill do agente certo: item `memoria` tipo `corrigir`, alvo `skill: wabfy-...`, com o trecho atual e o novo. Nunca altere skill sozinho; a mudança entra quando a Wendy aprovar e pedir para atualizar o pacote.

## Passo 4. Gravar
Painel: itens `memoria` novos (`pendente` para remover, arquivar, corrigir e divergência) e registro `guardiao-{AAAA-MM-DD-HHMM}` com o resumo e o tamanho estimado do projeto antes e depois.
