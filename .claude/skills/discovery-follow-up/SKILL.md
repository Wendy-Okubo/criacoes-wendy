---
name: discovery-follow-up
description: Transforma notas, transcrições ou resumos de conversas comerciais (discovery, reunião de vendas, call com lead ou cliente) em um registro estruturado da oportunidade — contexto, necessidade, o que foi confirmado, o que está em aberto, objeções, compromissos, próxima ação, responsável e prazo — e prepara o follow-up a partir disso. Use SEMPRE que o usuário colar ou enviar notas de reunião comercial, transcrição de call, histórico de oportunidade ou mensagens trocadas com lead/cliente, ou pedir para organizar uma oportunidade, resumir uma conversa de vendas, listar próximos passos, recuperar o contexto de um lead ("onde paramos com o cliente X?"), montar checklist pós-reunião ou escrever/revisar um follow-up — mesmo que não diga "discovery", "skill" ou "follow-up" (por exemplo "o que ficou combinado nessa call?", "me ajuda a responder esse lead", "organiza isso aqui da reunião de ontem"). Serve para SDRs, vendedores, executivos de contas e closers.
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

Entregue só o que foi pedido. Se ele pediu A, termine oferecendo B e C em uma linha. Se pediu C, faça a análise internamente (você precisa dela para não inventar), mas mostre só o rascunho mais uma lista curta do que ele usou e do que ficou de fora.

### 2. Leia o material como ele é

Transcrições reais são bagunçadas: falas sem identificação, erros de transcrição, assuntos que voltam, conversa paralela. Antes de estruturar:

- Identifique quem é do lado do cliente e quem é do lado do vendedor. Se não der para saber quem disse algo relevante, marque **A CONFIRMAR** e diga por quê.
- Se o mesmo ponto aparece com versões diferentes (ex.: "decisão em março" e depois "talvez só no segundo semestre"), registre as duas e sinalize a contradição. Não escolha uma.
- Ignore conversa social, a menos que traga informação comercial.
- Trechos ininteligíveis que pareçam importantes: cite-os entre aspas e marque **A CONFIRMAR**.
- Se houver material de mais de uma conversa, respeite a ordem cronológica e deixe claro o que é mais recente.

### 3. Monte o resumo (entrega A)

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

### 4. Checklist do próximo passo (entrega B)

Lista de tarefas acionáveis, na ordem em que precisam acontecer, cada uma com responsável e prazo (ou **NÃO DEFINIDO**). Comece pelos compromissos que o vendedor assumiu, porque são os que mais pesam na credibilidade dele se não forem cumpridos. Termine com os pontos que exigem decisão dele.

```markdown
- [ ] [Ação] — Responsável: ... — Prazo: ...
```

### 5. Rascunho de follow-up (entrega C)

Leia `references/follow-up.md` antes de escrever. Em resumo: use só o que está registrado, retome os compromissos e pontos abertos, respeite o estágio da conversa, não crie urgência, benefício, desconto ou condição, e não diga que algo foi combinado se não foi. Sempre apresente como **rascunho para revisão**, nunca como mensagem pronta para envio.

Se o canal (e-mail, WhatsApp, LinkedIn) não foi informado e muda o texto, pergunte. Se não muda tanto, escolha e-mail e diga que é fácil adaptar.

## Exemplos de uso

| O usuário diz | Entrega |
|---|---|
| "Vou colar a transcrição da call de discovery. Organize para eu saber o que ficou decidido e preparar o follow-up." | A + C |
| "organiza isso aqui da reunião de ontem" + notas soltas | A, oferecendo B e C no fim |
| "o que eu tenho que fazer depois dessa call?" | B |
| "me ajuda a responder esse lead" + histórico de mensagens | C |
| "onde paramos com a Clínica X?" + histórico | A, focando o estado atual e a próxima ação |

## Quando perguntar ao usuário

Não pare a análise por falta de informação: produza o que der e marque as lacunas. Pergunte só quando a falta impede a tarefa pedida. Por exemplo: ele pediu follow-up, mas não colou nenhum material sobre a conversa; ou há duas oportunidades misturadas e não dá para saber de qual ele está falando.

## Revisão antes de entregar

Releia sua saída e confira:

1. Cada item em "O que foi confirmado" tem trecho correspondente no material?
2. Algum nome, valor ou data foi alterado, arredondado ou completado?
3. Alguma inferência aparece sem o rótulo `(inferência — confirmar)`?
4. Existe classificação de lead, score ou probabilidade? Remova.
5. O follow-up promete, cita ou "lembra" algo que não está registrado? Remova.

Para um exemplo completo de transcrição bagunçada e a saída esperada, veja `references/exemplo.md`.
