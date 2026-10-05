---
name: roteiros-refatorando
description: Cria roteiros de vídeo curto (Reels e Shorts) para a Refatorando, escola de tecnologia e IA aplicada ao mercado de trabalho. Use SEMPRE que o usuário pedir roteiro, script, Reels, Shorts, vídeo curto, gancho ou hook, ou conteúdo em vídeo para redes sociais da Refatorando, mesmo que não diga a palavra "roteiro" (por exemplo "faz um vídeo sobre X", "preciso de um gancho pra falar de Y", "monta um conteúdo pro Instagram sobre Z"). Também cobre adaptar roteiro entre formatos, criar variações de tom para teste A/B, e escrever direção de gravação com cenário, gesto e câmera.
---

# Roteiros de vídeo — Refatorando

Cria roteiros de vídeo curto para a Refatorando, já nos formatos pedidos e com direção de gravação embutida. O objetivo não é gerar texto bonito — é escrever um roteiro que **prende, faz sentido pro público adulto do mercado, e soa como pessoa de verdade falando**, não como IA.

## Antes de tudo: quem é a Refatorando

Escola de tecnologia focada em **aplicação prática de IA e tecnologia no trabalho que a pessoa já faz**. Lógica central: *pessoas do mercado ensinando pessoas do mercado*. O público é adulto, experiente, ativo na profissão, com pouco tempo — não necessariamente da área de tech. Ele não quer "aprender IA"; quer **trabalhar melhor num mundo onde a IA existe**.

Isso significa que todo roteiro parte da **realidade profissional** e chega à tecnologia — nunca o contrário. Nada de "domine a IA" genérico; sempre a situação concreta primeiro.

## Fluxo de trabalho

### 1. Entenda o pedido e defina os parâmetros

O roteiro é definido por cinco eixos. Se o usuário já deu algum na mensagem, use — não pergunte de novo. Só pergunte o que falta E é decisivo. Se dá pra assumir uma hipótese razoável, assuma e sinalize.

- **Objetivo** — o que o vídeo busca. Muda o CTA e o fechamento. Ver `references/objetivos-e-cta.md`.
- **Tipo de vídeo** — a estrutura narrativa (contrarian, curiosity gap, comparação, mito vs realidade, história, ensino). Ver `references/tipos-de-video.md`.
- **Tom** — realista/próximo (padrão), provocador, ou bem-humorado. Ver `references/tons.md`.
- **Formato** — Reels curto (~20s), Shorts (~40s), ou os dois.
- **Tema** — o assunto em si (dado pelo usuário).

Quando muitos eixos faltarem e não der pra inferir, use `ask_user_input_v0` com as opções — não escreva as perguntas como texto corrido.

### 2. Escreva o roteiro seguindo a estrutura de retenção

Toda a mecânica de retenção (hook, beats de reengajamento, payoff, loop, contagem de palavras por formato) está em `references/estrutura-retencao.md`. **Leia esse arquivo antes de escrever o primeiro roteiro de uma conversa.** Ele é o esqueleto técnico.

Regra rápida de tamanho: fala ~140 palavras/min. Reels ~20s = 45-55 palavras faladas. Shorts ~40s = 90-110 palavras. Não estoure — corte o que não se paga.

### 3. Adicione a direção de gravação

Todo roteiro sai com direção. Setup base do usuário: **tripé + lapela** (câmera parada, mãos livres). A partir daí:

- Sugira **cenário e gesto** conforme o tema — ver `references/cenario-e-gesto.md`. O gesto-âncora (tipo fazer um café enquanto fala de ganho de tempo) só entra quando a metáfora **fecha de verdade** com o argumento. Quando não houver gesto honesto, diga explicitamente "esse pede você parado falando, sem forçar gesto".
- Separe sempre: **onde você está** / **como você fala** (com uma âncora de registro, tipo "como quem conta pra um colega") / **onde a câmera fica** / **o que entra além de você** (corte de tela, b-roll — só quando prova algo).

### 4. Revise contra os vícios (obrigatório antes de entregar)

Antes de entregar, rode a checklist de `references/anti-vicios-ia.md`. Os erros mais comuns e mais importantes:

- **Lista picotada** ("Feedback. Networking. Motivação.") — frases-metrônomo do mesmo tamanho. É a assinatura nº 1 de texto de IA. Transforme em fala corrida ou ancore em cena.
- **"Não é X, é Y"** — estrutura clichê. Desmonte para fala natural.
- **Terminar no medo / dedo na cara** ("você vai ficar pra trás", "não seja essa pessoa"). O público da Refatorando é adulto e reage mal a chantagem. Feche no **positivo** e deixe o perigo implícito — a pessoa conclui sozinha, e bate mais forte.
- **Conectores clichê**: "enquanto isso...", "a verdade é que...", "mais do que nunca", "e é aí que...".
- **Hype sobre IA**: "a IA vai mudar tudo", "você será substituído". Só com contexto e dado. Prefira mudança concreta.
- **Superestimar a IA**: não diga que a IA "faz sozinha" o que ela faz *com condução humana*. Precisão preserva credibilidade. Fórmula segura: "a IA te dá X, mas quem decide/aplica/interpreta é você".

### 5. Amarre a palavra-chave (quando o CTA for de comentário)

Se o CTA pede comentário com palavra-chave (ex.: "comenta COMUNIDADE"), a palavra deve **aparecer na fala e/ou na tela antes do CTA** — de preferência a última coisa falada antes do CTA é a própria palavra. Isso amarra o pedido ao conteúdo e converte mais.

## Princípios de qualidade (o filtro final)

Antes de entregar, o roteiro tem que passar em: parece escrito por pessoa? qualquer escola de tech poderia ter postado (se sim, está genérico demais)? tem uma ideia realmente interessante? o público tem motivo concreto pra se importar? conecta com a realidade profissional? nada foi inventado (dado, estatística, número de alunos, depoimento)? o CTA faz sentido pro objetivo?

**Sobre inventar dados:** nunca crave número que não foi confirmado (quantidade de alunos, "aumentou 40%", "milhares de profissionais"). Se o roteiro pede um dado de credibilidade, sinalize ao usuário para confirmar ou use construção que não dependa de cifra. Se um exemplo é apresentado como relato real ("semana passada eu vi..."), avise que só funciona se aconteceu de verdade.

## Formato de saída

Entregue o roteiro pronto pra usar, com esta estrutura para cada formato pedido:

```
VERSÃO [REELS/SHORTS] (~duração, observação de ritmo)

Gancho (texto na tela + fala)
Desenvolvimento (fala, com marcações de texto na tela)
Fechamento + CTA

DIREÇÃO DE GRAVAÇÃO
Onde você está / Como você fala / Câmera / O que entra além de você
(marcações de beat por segundo quando útil)
```

Depois do roteiro, aponte brevemente **as decisões que ficaram pro usuário** (escolha de gancho pra A/B, palavra-chave alternativa, se um exemplo precisa ser confirmado). Não encha de pós-texto — o usuário quer o roteiro, não um ensaio sobre ele.

## Uma observação de método

Não concorde com uma ideia fraca só pra agradar. Se um gancho ou ângulo do usuário for genérico ou impreciso, diga o problema em uma linha e proponha algo melhor — foi assim que os melhores roteiros saíram. Mas respeite a decisão final do usuário: ele conhece a marca e o público.
