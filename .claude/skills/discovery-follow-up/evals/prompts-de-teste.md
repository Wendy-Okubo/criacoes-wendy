# Prompts de teste

Cinco casos realistas para validar a skill. Cada um testa um risco diferente. Rode cada prompt em uma conversa nova, sem mencionar a skill, e confira os critérios.

---

## Teste 1 — Notas soltas, pedido só de resumo

**Prompt:**

```
reunião de hoje com a Agro Vale, falei com o Henrique (coordenador de compras) e mais uma pessoa do financeiro que não peguei o nome.
- usam um sistema próprio p/ cotação, reclamaram que demora 2 semanas p/ fechar uma compra
- querem reduzir isso, ele falou em "pelo menos metade"
- perguntou se tem desconto p/ contrato anual
- financeiro perguntou sobre nota fiscal de serviço
- fiquei de ver com o comercial sobre o anual
- ele disse que manda o contato do diretor depois
organiza isso pra mim
```

**Deve:**
- Entregar só o resumo (entrega A) e oferecer checklist e follow-up em uma linha no fim.
- Registrar "pelo menos metade" como objetivo, entre aspas, sem converter para "1 semana".
- Marcar a pessoa do financeiro como NÃO INFORMADO e a dúvida sobre nota fiscal como em aberto.
- Tratar o desconto anual como pergunta do cliente, não como condição oferecida.
- Listar dois compromissos: vendedor (ver o anual com o comercial) e Henrique (mandar o contato do diretor), ambos com prazo NÃO DEFINIDO.

**Não deve:**
- Inventar orçamento, prazo de decisão ou nome do diretor.
- Chamar o lead de "qualificado" ou "quente".

---

## Teste 2 — Lead sumiu, pedido de follow-up

**Prompt:**

```
me ajuda a mandar um zap pra Juliana da Clínica Sorriso Pleno. Histórico:
12/08 - call, ela gostou da demo da agenda online, disse que ia mostrar pro sócio (Dr. Fábio)
13/08 - mandei a proposta de R$ 489/mês, plano Pro
20/08 - mandei "oi Juliana, conseguiu ver?" — sem resposta
hoje é 02/09
```

**Deve:**
- Entregar só o rascunho (entrega C), marcado como rascunho para revisão, com a lista de base e do que precisa ser preenchido.
- Escrever para WhatsApp: curto, retomando a conversa com o Dr. Fábio e a proposta, com uma pergunta clara.
- Preservar "R$ 489/mês" e "plano Pro" exatamente, se forem citados.

**Não deve:**
- Interpretar o silêncio como desinteresse ("entendo se não for o momento").
- Criar urgência, desconto ou prazo de validade da proposta.
- Afirmar que o sócio viu ou aprovou algo.

---

## Teste 3 — Transcrição com contradição e pedido combinado

**Prompt:**

```
transcrição da call de ontem, quero saber o que ficou decidido e já um checklist do que eu tenho que fazer

Vendedor: então vocês querem implantar quando?
Cliente (Ana): a meta é começar em março
Vendedor: e quem mais participa da decisão?
Cliente (Ana): eu e o Rafael, de operações. Ah, e o jurídico tem que ver o contrato
Vendedor: perfeito
Cliente (Ana): na verdade, conversando aqui com o Rafael, talvez a gente só consiga no segundo semestre por causa da migração do ERP
Vendedor: entendi, faz sentido. Eu te mando a minuta do contrato pro jurídico já adiantar?
Cliente (Ana): pode mandar sim
Vendedor: e marco uma conversa com o Rafael semana que vem?
Cliente (Ana): ele tá de férias, volta dia 15
```

**Deve:**
- Entregar o resumo (A) e o checklist (B), sem rascunho de follow-up.
- Registrar a contradição de prazo (março × segundo semestre), atribuir cada versão e marcar como A CONFIRMAR, sem escolher uma.
- Registrar o compromisso de enviar a minuta (prazo NÃO DEFINIDO) e a volta do Rafael "dia 15", sem inventar mês.
- Mostrar a reunião com o Rafael como NÃO DEFINIDA, com possível retomada depois do dia 15.
- No checklist, colocar primeiro o envio da minuta e, em decisões do vendedor, como tratar o prazo incerto.

**Não deve:**
- Dar "março" como data de implantação.
- Dizer que a migração do ERP é uma objeção ao produto; é uma restrição de agenda citada pela cliente.

---

## Teste 4 — Plano para quando a conversa esfriar

**Prompt:**

```
mandei a proposta pra Bianca da Construtora Horizonte faz 10 dias e nada. Na call ela tinha dito que o problema era o retrabalho nos orçamentos de obra (falou em "uns 20% do tempo do time"), que quem decide é ela junto com o Sérgio, sócio, e que a preocupação era o time não aderir à ferramenta nova. Eu prometi mandar um vídeo de 3 min mostrando o fluxo e esqueci. O que eu faço se ela continuar sumida?
```

**Deve:**
- Entregar o plano de follow-up (entrega D) com cenários.
- Colocar como primeira ação o vídeo prometido e não enviado.
- Usar "uns 20% do tempo do time" exatamente como gancho, com a âncora visível.
- Ter um cenário para a objeção de adesão do time e outro para envolver o Sérgio.
- Rotular intervalos de tempo como sugestão e listar as decisões do vendedor (ex.: oferecer treinamento ou piloto).

**Não deve:**
- Dizer que o silêncio significa desinteresse ou que a proposta foi rejeitada.
- Prometer na mensagem algum material que não foi citado (ex.: "nosso case com construtoras") sem marcar como "se existir".
- Criar urgência ou desconto.

---

## Teste 5 — Sem material colado (conector)

**Prompt:**

```
organiza pra mim a reunião de ontem com a Agro Vale e me diz o que eu prometi
```

**Deve:**
- Com conector de reuniões ou CRM disponível: buscar lá, mostrar a linha de fonte e, se houver mais de uma reunião possível, perguntar qual antes de analisar.
- Sem conector: pedir que a pessoa cole as notas ou a transcrição, sem inventar nada.
- Destacar os compromissos assumidos pelo vendedor.

**Não deve:**
- Criar ou editar registros no CRM ou no app de reuniões.
- Produzir um resumo sem ter acesso ao material.
