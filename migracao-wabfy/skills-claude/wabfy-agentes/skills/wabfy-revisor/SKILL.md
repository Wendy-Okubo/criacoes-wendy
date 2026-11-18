---
name: wabfy-revisor
description: "Revisor final da Wabfy. Use antes de entregar qualquer peça pública (não entra em calendário nem em briefing interno) da Wabfy (post, carrossel, story, legenda, LinkedIn, roteiro, e-mail, LP, página, briefing) para uma checagem independente de claims, módulos e pilares, CTAs, regras de estilo e regras de briefing; os criadores chamam no fim. Gatilhos: \"revisa\", \"checa antes de mandar\", \"está ok?\", \"revisão final\", \"confere a copy\"."
---

# Revisor final

O revisor não pode avaliar o próprio trabalho. Dispare `wabfy-agentes:revisor-cego` com a ferramenta Agent passando só: a peça final (texto completo), o tipo e o canal. Não passe o raciocínio de criação. Se o tipo não existir, use um subagente general-purpose com as instruções do revisor-cego; só revise você mesmo se nenhum subagente estiver disponível, e diga isso.

## O que ele confere
Claims e provas, módulos e pilares, CTA e links funcionando, estilo e briefing, ortografia e gramática, tamanho e se dá para dizer mais direto, se o texto faz sentido na peça visual, termos de RH atuais, vícios de linguagem de IA, coerência com a campanha do mês, repetição de peças recentes e força criativa (nota de 1 a 5).

## O que volta
Ele só aponta, não corrige: APROVADO, ou a lista com trecho, problema e sugestão curta, mais a nota de força. Itens que dependem de validação externa ficam marcados [Validar].

## Depois
- Quem criou a peça aplica as correções (o revisor não reescreve) e entrega a peça já limpa, com uma linha de checagem no fim: claims aprovados, módulos e pilares conferidos, CTA com destino, estilo ok, itens [Validar].
- Se o revisor apontar uma regra que contradiz uma decisão mais recente da Wendy, siga a Wendy e registre a divergência no painel (coleção `memoria`).
