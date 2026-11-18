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
