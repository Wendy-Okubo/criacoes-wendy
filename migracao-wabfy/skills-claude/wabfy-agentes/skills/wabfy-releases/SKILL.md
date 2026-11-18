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
