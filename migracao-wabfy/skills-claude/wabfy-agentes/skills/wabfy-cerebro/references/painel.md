# Painel dos agentes Wabfy

Página única onde todo agente grava o que entregou: https://claude.ai/artifact/7hA7NdhzxZt5NiZvByqUpc
Gravar com a ferramenta ArtifactData (ação "batch" quando houver mais de dois documentos). Só criar documentos novos ou atualizar os campos indicados; nunca apagar documento.

## Antes de gravar: inspeção do Chefão
Todo agente, antes de gravar o registro da execução, passa a entrega pelo subagente `wabfy-agentes:chefe-inspetor` (missão do agente + entrega). Se voltar `refazer`, corrija e passe de novo (até 2 vezes). Grave o resultado no campo `chefe` do registro: {veredito: aprovado | refeito | escalado, nota, tentativas, em}. Se voltar `escalar`, grave com status `atencao` e o motivo em acoes. Se o subagente não existir, grave sem o campo `chefe`: o Chefão inspeciona no fechamento do dia.

## Coleções

### `registros` (um por execução de agente)
id: `{agente}-{AAAA-MM-DD-HHMM}` (hora de Brasília). Campos:
- agente: um de `chefao`, `radar-rh`, `radar-cultura`, `concorrentes`, `analista`, `releases`, `listening`, `visibilidade-ia`, `parcerias`, `guardiao`, `editor-chefe`, `diretor-criativo`, `revisor-paginas`, `escuta-comercial`
- titulo (curto), data (ISO com -03:00), status: `ok` | `atencao` | `urgente` | `falhou` | `sem_novidade`
- resumo: 1 a 3 frases
- itens: lista de `{tipo, titulo, texto, link, fonte, data_fonte, prioridade (alta|media|baixa), validade}` (validade = até quando o assunto vale, para trends)
- acoes: lista de frases curtas com o que a Wendy precisa decidir ou fazer
- doc: caminho do documento completo no projeto, se houver

### `testes` (Analista de desempenho)
id: `teste-{slug}`. Campos: hipotese, metrica, como_testar, aberto_em, status (`proposto` | `rodando` | `concluido` | `descartado`), veredito, evidencias.

### `leads` (Social listening)
id: `{rede}-{id da mensagem ou AAAAMMDDHHMM-autor}`. Campos: rede, tipo (comentario|dm|mencao), autor, empresa (se aparecer), mensagem (até 280 caracteres), link, classificacao (`lead` | `duvida` | `elogio` | `critica` | `spam` | `outro`), urgente (bool), motivo, recebido_em, status (`novo` | `encaminhado` | `respondido` | `ignorado`). Não regravar uma mensagem que já existe.

### `insights_comercial` (Escuta do comercial)
id: `{tipo}-{slug}`. Campos: tipo (`dor` | `pergunta` | `objecao` | `perda` | `ganho` | `termo` | `modulo`), texto, frequencia, primeira_vez, ultima_vez, exemplos (frases anonimizadas), modulos, status (`novo` | `usado` | `descartado`). Leitura útil para Editor-chefe, Diretor criativo, Copy, E-mails e Analista.

### `memoria` (Guardião da memória)
id: `mem-{AAAA-MM-DD}-{n}`. Campos: tipo (`acrescentado` | `remover` | `corrigir` | `arquivar` | `divergencia` | `decisao-reuniao`), alvo (arquivo ou doc), texto, motivo, status (`feito` | `pendente` | `aprovado` | `recusado`). Remoções e arquivamentos sempre entram como `pendente`; só executar os que a Wendy marcar como `aprovado`.

### `confianca` (Chefão)
id: nome do agente (ex.: `radar-rh`). Campos: entregas, aprovadas_primeira, refeitas, escaladas, aprovadas_wendy_sem_mudanca, atualizado_em.

## Divergências
Qualquer agente que encontrar fontes em conflito grava um item `memoria` com tipo `divergencia` e status `pendente`.
