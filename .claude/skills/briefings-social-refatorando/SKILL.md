---
name: briefings-social-refatorando
description: Cria briefings e copy de artes estáticas para redes sociais (carrossel, post único, stories, e-mail de CRM) da Refatorando, escola de tecnologia e IA aplicada ao mercado de trabalho. Use SEMPRE que o usuário pedir briefing, carrossel, post, arte, copy de Instagram/LinkedIn, e-mail de CRM/marketing, ou conteúdo estático para redes sociais da Refatorando — mesmo sem dizer a palavra "briefing" (por exemplo "monta um carrossel sobre X", "preciso do texto desse post", "escreve o e-mail de divulgação de Y"). Também cobre revisar/ajustar briefings e copy já escritos, e aplicar as regras de tom e marca da Refatorando. Para roteiro de vídeo (Reels/Shorts), usar a skill roteiros-refatorando em vez desta.
---

# Briefings e copy de redes sociais — Refatorando

Monta o briefing completo (modelo padrão da Refatorando) e depois a copy de cada tela/post, sempre seguindo a voz de marca e as regras de tom da empresa. Objetivo não é gerar texto bonito — é um briefing que o time de design consegue executar direto, e uma copy que soa como pessoa de verdade, não como IA.

**Antes de escrever qualquer coisa, leia `references/voz-e-marca.md`.** Ele tem posicionamento, público, tom, como falar de IA, vícios de IA a evitar, e a regra de tom construtivo — é a base de tudo que sai daqui.

## Fluxo de trabalho

### 1. Defina o briefing (topo do modelo) antes da copy

Use o modelo em `assets/modelo_briefing.md` como estrutura fixa. Preencha o topo primeiro (Nome até Formato e idioma) e só depois vá para as telas — não pule direto pra copy sem fechar isso, a menos que o usuário peça explicitamente.

Campos que **você pode inferir/propor com hipótese sinalizada**: Formato, Canal, Objetivo, Mensagem central, Público-alvo, Formato e idioma, Linha editorial.

Campos que **dependem do usuário** (pergunte, não invente): Data de postagem, Pilar (se ainda não tiver um definido — pergunte se quer criar um), Modo visual (a menos que o usuário já tenha indicado "segue o brandbook").

Se o usuário já deu informação suficiente na mensagem (ex: já mandou o tema, o canal, um roteiro-base de outro lugar como ClickUp), não pergunte de novo — use o que já foi dado e só pergunte o que falta e é decisivo.

### 2. Escreva a copy das telas

**Para carrossel, leia `references/ritmo-e-divisao-de-telas.md` antes de escrever.** Ele traz o mecanismo de 4 passos (identificar a unidade de divisão → escrever corrido → marcar papel de cada bloco → checar ritmo) que decide o que agrupa numa tela e o que fica isolado.

Regra que mais importa: **nunca decida o número de telas antes de marcar os papéis dos blocos.** O número é resultado da estrutura, não premissa. E o critério de divisão é a *função* do bloco, não a quantidade de texto — um framework de consulta pode ocupar uma tela densa inteira, e uma tese-resumo de seis palavras pode merecer tela exclusiva.

A capa/gancho é a única tela que decide se a pessoa continua: específica, tom construtivo, sem clichê.

Para e-mail de CRM/marketing: mais objetivo, direto, **verbos no imperativo**, sem o espaço narrativo do carrossel.

### 3. Escreva a legenda (não é resumo das telas)

**A legenda nunca transcreve ou resume o conteúdo das telas.** Se ela já entrega o argumento, a pessoa não precisa abrir o post — e o carrossel perde a função. Erro comum: repetir a tese e os pontos principais em prosa.

O que a legenda faz:

1. **Gera curiosidade** — aponta que existe algo ali sem revelar o quê ("dos três verbos, um é bem mais difícil — e quase ninguém comenta ele"). Pode nomear o tema, não a resposta.
2. **Convida a abrir** — "arrasta pra ver", "arrasta pra entender por quê".
3. **Fecha sempre com CTA.** Obrigatório. Varia conforme o objetivo da peça: salvar, comentar (dá o gancho específico do comentário, não "comente aqui"), seguir o perfil, assistir uma aula, acessar o link.

**Tamanho:** curta por padrão. Duas ou três linhas resolvem a maioria dos casos. Só alongue se a peça exigir contexto que não cabe na arte (atribuição de fonte, ressalva de precisão, dado que precisa de referência).

Quando vale entregar 2-3 opções de legenda com ângulos diferentes: peça importante, ou quando o CTA ideal não é óbvio (salvar vs. comentar vs. clicar mudam a legenda inteira).

### 4. Aplique a regra de tom construtivo (obrigatória)

Por padrão, nada de gancho ou linha acusatória/corretiva ("você tá fazendo errado", "pare de...", "você ainda não sabe..."). Vire pro positivo/convite ("aprenda a...", "descubra como...", "o jeito certo de...").

Isso **não proíbe** ângulo provocador ou pauta contrarian — só exige que a provocação mire a ideia/crença, não a pessoa que está lendo. Detalhe completo e exemplos em `references/voz-e-marca.md`.

Só quebre essa regra se o usuário pedir tom acusatório/provocativo negativo explicitamente para aquela peça.

### 5. Rode a checklist final antes de entregar

Checklist completa em `references/voz-e-marca.md`. Resumo: soa como pessoa? não é genérico a ponto de qualquer escola postar igual? tem ideia interessante de verdade? nada foi inventado (dado/depoimento/número)? tom construtivo? a legenda gera curiosidade em vez de resumir as telas, e fecha com CTA?

## Formato de saída

Sempre que possível, monte a resposta espelhando o modelo (`assets/modelo_briefing.md`) preenchido — direto na conversa, não como arquivo, a menos que o usuário peça pra exportar/baixar. Depois do briefing + copy, aponte em 1-2 linhas as decisões que ficaram em aberto pro usuário (data, pilar, referência visual, algo que precisa confirmação) — sem alongar em texto desnecessário.

## Uma observação de método

Se um gancho, pauta ou ângulo trazido pelo usuário for genérico, fraco ou fugir do tom construtivo, diga o problema em uma linha e proponha alternativa — não concorde só pra agradar. Mas a decisão final é do usuário: ele conhece a marca e sabe o que já foi testado.
