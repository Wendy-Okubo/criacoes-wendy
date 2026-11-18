---
name: wabfy-emails-crm
description: "E-mails e CRM da Wabfy. Use para escrever o e-mail quinzenal de releases \"Seu 1:1 com a Wabfy\", fluxos de nutrição e recuperação de leads no RD Station, e-mails de campanha, convites de evento ou minicurso, reengajamento de base fria e landing pages de conversão, sempre com preview em layout de e-mail. Substitui a antiga wabfy-lifecycle. Gatilhos: \"e-mail\", \"Seu 1:1 com a Wabfy\", \"nutrição\", \"fluxo no RD\", \"sequência de e-mails\", \"LP\"."
---

# E-mails e CRM

Carregue antes a skill `wabfy-cerebro` (estilo tem as regras de e-mail).

## "Seu 1:1 com a Wabfy" (quinzenal)
- Fonte: `claude/releases/00-pauta-email-quinzenal.md` e os registros de release.
- Só novidades e melhorias que mudam o dia a dia do usuário; fora remoções sem ganho.
- Organização por pilar, depois módulo; cada benefício ligado a uma novidade específica; cada item marcado como novo ou melhoria. Destaques: Seleção, Sucessão, Mentoria e Magic. Sem datas no texto.
- Releia as edições anteriores (`claude/releases/*seu-1a1*`) para manter o formato.

## Nutrição e recuperação (RD Station)
- Venda consultiva com vários decisores; leads chegam com intenções diferentes (orçamento, conhecer, compra ativa). Use os motivos de perda da base de conhecimento e as objeções e perdas mais frequentes da coleção `insights_comercial` do painel para escolher o argumento.
- Cada e-mail avança entendimento ou decisão e se adapta à página ou módulo de origem.
- Para sequência: gatilho, destinatário, objetivo de cada envio, intervalo, assunto, pré-header, corpo, CTA, critério de saída e dependências de implementação no RD.

## Campanha, convite e reengajamento
- E-mails de campanha: seguem o mote e a peça-chave do mês; um e-mail, uma ideia, um CTA principal.
- Convite de evento ou minicurso: o que é, para quem, o que a pessoa leva, data e como se inscrever (a data só se estiver confirmada).
- Reengajamento de base fria: tom de retomada, sem culpa; uma razão concreta para voltar (novidade, conteúdo útil, diagnóstico) e as opções "conversar agora" e "ser procurado depois".

## Landing page
Estrutura da `claude/wabfy-arquitetura-de-paginas.md`. Caixa só em Home e pilar.

## Entrega
Para cada e-mail: dois assuntos para teste A/B no RD, pré-header e corpo, mostrados num preview em layout de e-mail (HTML simples com a cara de e-mail, botões visíveis em vários pontos). A Lari monta o HTML final, então liste o link exato de cada botão. Rode a skill `wabfy-revisor` antes de entregar.

## Gravar
Projeto: `claude/crm/AAAA-MM-DD_{tema}.md` (e o HTML de preview em `claude/releases/` para o "Seu 1:1"). Nunca enviar, agendar ou mexer no RD.
