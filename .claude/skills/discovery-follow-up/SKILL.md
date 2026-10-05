---
name: discovery-follow-up
description: Transforma notas, transcrições ou resumos de conversas comerciais (discovery, reunião de vendas, call com lead ou cliente) em um registro estruturado da oportunidade — necessidade, o que foi confirmado, o que está em aberto, objeções, compromissos, próxima ação, responsável e prazo — e prepara o follow-up: rascunho de mensagem e plano com cenários (se o cliente sumir, se a objeção voltar). Busca o material em conectores de reunião ou CRM quando não for colado. Use SEMPRE que o usuário enviar notas, transcrição, histórico ou mensagens com lead/cliente, ou pedir para organizar uma oportunidade, listar próximos passos, recuperar contexto ("onde paramos com o cliente X?"), escrever um follow-up ou planejar os próximos contatos ("e se ele não responder?") — mesmo sem dizer "discovery" ou "follow-up" (ex.: "o que ficou combinado nessa call?", "me ajuda a responder esse lead"). Para SDRs, vendedores, executivos de contas e closers.
---

# Discovery + Follow-up

Transforma o material de uma conversa comercial em um registro fiel da oportunidade e, a partir dele, prepara o próximo contato. O vendedor decide; a skill organiza, aponta lacunas e redige rascunhos.

## Princípio central: só o que está no material

O valor desta skill está em ser **confiável**. Um resumo que "completa" o que faltou parece mais útil, mas leva o vendedor a prometer, cobrar ou supor coisas que o cliente nunca disse. Por isso:

- Use apenas o que está no material ou no que o usuário disse na conversa.
- Não invente necessidade, objeção, orçamento, prazo, responsável, decisão ou intenção de compra.
- Não classifique o lead (quente, frio, qualificado, pronto para comprar), não dê probabilidade de fechamento nem lead score.
- Silêncio ou ausência de resposta não é objeção nem desinteresse — é só ausência de informação.
- Preserve nomes, valores, datas e condições exatamente como aparecem (não arredonde "uns 40 mil" para "R$ 40.000").
- Inferência útil pode aparecer, mas sempre rotulada como `(inferência — confirmar)` e nunca na seção "O que foi confirmado".
- Não envie mensagens, não altere CRM, não execute ações comerciais. Tudo o que você produz é rascunho para revisão.

### Marcadores de lacuna

Use exatamente estes três, em maiúsculas, para o vendedor localizá-los rápido:

| Marcador | Quando usar |
|---|---|
| **NÃO INFORMADO** | O material não toca no assunto. |
| **A CONFIRMAR** | O assunto aparece, mas de forma vaga, ambígua, contraditória ou dita por alguém não identificado. |
| **NÃO DEFINIDO** | Responsável, prazo ou próxima ação não foram combinados. |

## Fluxo

### 1. Entenda o que foi pedido

Identifique qual entrega o usuário quer:

- **A) Resumo estruturado da oportunidade** — padrão quando ele só cola o material ou pede para "organizar".
- **B) Checklist do próximo passo** — quando pede "o que eu preciso fazer", "próximos passos", "checklist".
- **C) Rascunho de follow-up** — quando pede mensagem, e-mail, WhatsApp, "como respondo".
- **D) Plano de follow-up** — quando pede ideias, cadência, "e se ele não responder?", "o que mando se esfriar?".

Entregue só o que foi pedido. Se ele pediu A, termine oferecendo B, C e D em uma linha (ex.: "Quer que eu monte o checklist, o rascunho do follow-up ou um plano com cenários caso a conversa esfrie?"). Se pediu C ou D, faça a análise internamente (você precisa dela para não inventar), mas mostre só a entrega pedida. Depois de C, ofereça D.

### 2. Consiga o material

- **Material colado ou anexado:** use-o. Não busque em outro lugar, a menos que o usuário peça.
- **Sem material, mas o usuário cita uma reunião, cliente ou lead** ("organiza a call de ontem com a Agro Vale", "onde paramos com a Juliana?"): se houver conector disponível, busque lá. Pode ser de reuniões (Granola, Zoom, Fireflies, Gong, Google Meet), CRM (HubSpot, Salesforce, Pipedrive), e-mail ou Slack.
  - Só leitura. Nunca crie, edite ou envie nada pelo conector.
  - Se a busca trouxer mais de uma reunião ou oportunidade possível, mostre as opções (título, data, participantes) e pergunte qual antes de analisar.
  - Abra a saída com uma linha de fonte: `Fonte: Granola — "Call Agro Vale", 04/10, participantes: ...`.
  - Dados de CRM podem estar desatualizados. Se divergirem da conversa, registre as duas versões com a fonte de cada uma e marque **A CONFIRMAR**.
- **Sem material e sem conector:** peça para a pessoa colar as notas, a transcrição ou o histórico.

### 3. Leia o material como ele é

Transcrições reais são bagunçadas: falas sem identificação, erros de transcrição, assuntos que voltam, conversa paralela. Antes de estruturar:

- Identifique quem é do lado do cliente e quem é do lado do vendedor. Se não der para saber quem disse algo relevante, marque **A CONFIRMAR** e diga por quê.
- Se o mesmo ponto aparece com versões diferentes (ex.: "decisão em março" e depois "talvez só no segundo semestre"), registre as duas e sinalize a contradição. Não escolha uma.
- Ignore conversa social, a menos que traga informação comercial.
- Trechos ininteligíveis que pareçam importantes: cite-os entre aspas e marque **A CONFIRMAR**.
- Se houver material de mais de uma conversa, respeite a ordem cronológica e deixe claro o que é mais recente.

### 4. Monte o resumo (entrega A)

Use esta estrutura, sem pular seções. Seção sem conteúdo recebe o marcador adequado, em vez de ser omitida, porque a lacuna também é informação.

```markdown
# CONTEXTO DA OPORTUNIDADE
2 a 4 linhas: quem é o cliente, quem participou, em que momento a conversa está e de onde veio o contato (se informado).

# NECESSIDADE E OBJETIVOS
O que o cliente declarou que precisa resolver ou alcançar. Use as palavras dele quando forem marcantes (entre aspas).

# O QUE FOI CONFIRMADO
Só fatos claramente presentes no material. Um item por linha.

# O QUE AINDA ESTÁ EM ABERTO
Dúvidas, lacunas e ambiguidades. Inclua as perguntas de discovery relevantes que não foram respondidas
(decisor, processo de decisão, orçamento, prazo, solução atual, critérios), cada uma com o marcador
adequado — sem listar categorias que não fazem sentido para aquela conversa.

# OBJEÇÕES E PONTOS DE ATENÇÃO
Só objeções e preocupações realmente ditas. Se não houver: "Nenhuma objeção mencionada no material."

# COMPROMISSOS ASSUMIDOS
Quem prometeu o quê — dos dois lados. Formato: [Quem] — [o quê] — [quando, ou NÃO DEFINIDO].
Inclua materiais a enviar.

# PRÓXIMA AÇÃO
O próximo passo sustentado pelo conteúdo. Se nada foi combinado, escreva NÃO DEFINIDO e, separado,
uma sugestão rotulada como "Sugestão para o vendedor avaliar".

# RESPONSÁVEL E PRAZO
Responsável: [nome ou NÃO DEFINIDO]
Prazo: [data/momento exato como dito, ou NÃO DEFINIDO]

# PREPARAÇÃO DO FOLLOW-UP
- Retomar: ...
- Dúvidas a responder: ...
- Materiais a enviar: ...
- Compromissos a cumprir antes do contato: ...
- Quando: [momento combinado, ou NÃO DEFINIDO]

# PONTOS PARA DECISÃO DO VENDEDOR
Só o que exige julgamento humano antes do próximo contato (ex.: "Oferecer ou não o piloto que o
cliente perguntou?", "Envolver o gestor dele agora ou esperar a reunião interna?").
```

### 5. Checklist do próximo passo (entrega B)

Lista de tarefas acionáveis, na ordem em que precisam acontecer, cada uma com responsável e prazo (ou **NÃO DEFINIDO**). Comece pelos compromissos que o vendedor assumiu, porque são os que mais pesam na credibilidade dele se não forem cumpridos. Termine com os pontos que exigem decisão dele.

```markdown
- [ ] [Ação] — Responsável: ... — Prazo: ...
```

### 6. Rascunho de follow-up (entrega C)

Leia `references/follow-up.md` antes de escrever. Em resumo: use só o que está registrado, retome os compromissos e pontos abertos, respeite o estágio da conversa, não crie urgência, benefício, desconto ou condição, e não diga que algo foi combinado se não foi. Sempre apresente como **rascunho para revisão**, nunca como mensagem pronta para envio.

Se o canal (e-mail, WhatsApp, LinkedIn) não foi informado e muda o texto, pergunte. Se não muda tanto, escolha e-mail e diga que é fácil adaptar.

### 7. Plano de follow-up (entrega D)

Ideias para os próximos contatos, organizadas por cenário: o que fazer se o cliente responder, se sumir, se a objeção voltar, se entrar um novo decisor. Leia `references/plano-follow-up.md` antes de montar.

Aqui você **sugere**, e isso é diferente de inventar. Cada ideia precisa partir de algo do registro (um ponto aberto, uma objeção, um material prometido, uma pessoa citada, um prazo dito pelo cliente), e essa base fica visível. Intervalos de tempo são sugestões, a menos que o cliente tenha dado uma data. Materiais que não apareceram na conversa entram como tipo ("um case do mesmo setor, se existir"), nunca como algo que a empresa com certeza tem. O vendedor escolhe o que usar.

## Exemplos de uso

| O usuário diz | Entrega |
|---|---|
| "Vou colar a transcrição da call de discovery. Organize para eu saber o que ficou decidido e preparar o follow-up." | A + C |
| "organiza isso aqui da reunião de ontem" + notas soltas | A, oferecendo B e C no fim |
| "o que eu tenho que fazer depois dessa call?" | B |
| "me ajuda a responder esse lead" + histórico de mensagens | C |
| "onde paramos com a Clínica X?" + histórico | A, focando o estado atual e a próxima ação |
| "organiza a call de ontem com a Agro Vale" (sem colar nada) | busca no conector de reuniões e depois A |
| "e se ela não responder? o que eu mando?" | D |

## Quando perguntar ao usuário

Não pare a análise por falta de informação: produza o que der e marque as lacunas. Pergunte só quando a falta impede a tarefa pedida. Por exemplo: ele pediu follow-up, mas não colou nenhum material sobre a conversa; ou há duas oportunidades misturadas e não dá para saber de qual ele está falando.

## Revisão antes de entregar

Releia sua saída e confira:

1. Cada item em "O que foi confirmado" tem trecho correspondente no material?
2. Algum nome, valor ou data foi alterado, arredondado ou completado?
3. Alguma inferência aparece sem o rótulo `(inferência — confirmar)`?
4. Existe classificação de lead, score ou probabilidade? Remova.
5. O follow-up promete, cita ou "lembra" algo que não está registrado? Remova.
6. Cada ideia do plano de follow-up mostra em que parte do registro se apoia?

Para um exemplo completo de transcrição bagunçada e a saída esperada, veja `references/exemplo.md`.
