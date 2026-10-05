---
name: identidade-visual-refatorando
description: "Identidade visual da Refatorando: logo, cores, tipografia (Poppins), os dois modelos de publicação (Notícia e Conceitual), fotografia, elementos gráficos, margens e prompts de imagem. Use SEMPRE que for definir o modo visual ou as referências de um briefing, orientar design de carrossel, post, Stories, capa, thumbnail, landing page, slide ou anúncio da Refatorando, escrever prompt de geração de imagem para a marca, revisar se uma arte está 'na cara da marca', ou quando a pessoa quiser testar uma direção visual nova. Complementa voz-refatorando (texto) e content-format-rotator (formato); o registro de testes fica em voz-refatorando/references/laboratorio.md."
---

# Identidade visual — Refatorando

Mesma lógica da `voz-refatorando`: uma **base** pequena que faz a marca ser reconhecível, **padrões** que são o ponto de partida e um **laboratório** onde quase tudo pode ser testado. O visual é onde a Refatorando mais quer experimentar; este guia existe para que o experimento seja intencional, não para impedi-lo.

**Antes de orientar uma peça, leia `references/modelos.md`**, que tem a anatomia completa dos dois modelos padrão. As peças de referência estão em `assets/exemplos/`.

O design system "Refatorando by Belago" (claude.ai, v2 de 05/10/2026) traz os mesmos valores como tokens, com os temas Conceitual e Notícia; o "Guia visual — Landing Page" foi alinhado à mesma paleta.

## Base (fixo)

- **Logo oficial, sem redesenhar nem distorcer.** Ícone hexagonal (dois hexágonos concêntricos, um vazado) + wordmark "refatorando" em caixa baixa + "BY BELAGO" menor. Preto em fundo claro, branco em fundo escuro, azul ou foto. Tamanho e posição podem ser testados; o desenho, não.
- **Legibilidade.** Tem que ler no celular, na velocidade do feed. Contraste mínimo de 4.5:1 para texto corrido e 3:1 para título grande.
- **Margens de segurança do formato.** Stories/Reels 1080×1920: nada essencial nos 250px do topo e do rodapé. Post/carrossel 1080×1350: margem de 96 a 120px; a área mais segura é o retângulo central de 840×1080. São limites da interface do Instagram, não escolha de marca.
- **Imagem verdadeira quando é prova.** Print, dado, interface, logo de empresa ou foto usados como evidência numa notícia têm que ser reais. Imagem ilustrativa (inclusive gerada por IA) é livre, desde que não se passe por prova.

## Padrões

### Tipografia: Poppins em tudo

Uma família só, para todos os modelos e canais. A hierarquia vem do peso:

| Uso | Peso |
|---|---|
| Títulos, palavra-chave | ExtraBold 800 (Black 900 na palavra-chave gigante do Conceitual), tracking negativo |
| Subtítulos, rótulos, datas | SemiBold 600 / Bold 700 |
| Botões, tags | Medium 500 |
| Texto corrido, fonte da notícia | Regular 400 |

Google Fonts: `family=Poppins:wght@400;500;600;700;800;900`.

Os modelos de Notícia publicados até out/2026 usavam uma condensada no título. Na migração para Poppins, o título fica cerca de 30% mais largo: corte palavras antes de reduzir o tamanho (detalhes em `references/modelos.md`).

### Cores

Medidas nas peças publicadas:

| Cor | Hex | Onde |
|---|---|---|
| Azul elétrico | `#0050FF` | Destaque do modelo **Notícia**: trecho-chave do título, botões de mockup, ícone 3D, marcadores |
| Violeta Refatorando | `#4A28FF` | Destaque do modelo **Conceitual**: palavra de entrada, rótulos, objeto em destaque na foto |
| Preto | `#000000` | Texto, tiras de papel rasgado |
| Papel (Notícia) | `#F0F0F0` + textura | Fundo de papel amassado |
| Off-white quente (Conceitual) | `#F0ECE8` | Fundo de estúdio |
| Verde-limão | `#B4FA00` | Setas do modelo Notícia |
| Verde-menta | ~`#7AD1B1` (na luz) | Só como cor de objeto em foto |

Regra geral: **a peça é quase toda neutra, e a cor aponta para a ideia.** Uma cor de destaque por peça: azul na Notícia, violeta no Conceitual. Paleta fora disso (campanha, sazonal, collab) é teste.

### Os dois modelos

**Notícia** — fato recente, lançamento, mudança. Colagem com papel amassado, tiras pretas rasgadas, assunto em foto colorida e contexto em P&B, mockups e ícones reais, título como frase completa com o trecho-chave em azul, fonte no rodapé, logo branco no canto superior direito.

**Conceitual** — ideia, contraste, "teoria x prática", formação. Fundo de estúdio off-white, uma foto-metáfora de objeto com **um único** elemento na cor da marca, título em dois níveis (palavra curta violeta + palavra-chave gigante preta), duas colunas "Na teoria / Na prática" com divisória fina, logo preto no canto superior esquerdo, sem fonte e sem CTA na arte.

Misturar os dois na mesma peça é teste, não erro.

### Fotografia

- **Notícia:** assunto em cor, contexto em P&B, recortes com borda rasgada. Logos e produtos reais são bem-vindos porque são prova.
- **Conceitual:** still life fotorrealista de estúdio, luz lateral suave, sombra real, fundo infinito, objeto cotidiano como metáfora (não tela, não robô, não holograma).
- Padrão de fuga nos dois: sorriso corporativo posado, pessoa apontando para o notebook, holograma, neon, robô, "mão digitando em câmera lenta". Parodiar esse clichê de propósito é um bom teste.

### Prompts de imagem

**Conceitual (objeto-metáfora):**
> Fotografia de estúdio fotorrealista, fundo infinito off-white quente (#F0ECE8), luz lateral suave e sombra natural. [Conjunto de objetos neutros em bege/cinza/metal] com um único [objeto] na cor violeta #4A28FF que [ação que representa a ideia]. Composição na metade inferior do quadro, objeto entrando pela borda, muito espaço livre na metade superior para texto. Sem texto na imagem, sem telas, sem estética tecnológica.

**Notícia (elemento para colagem):**
> Fotografia em preto e branco de alto contraste de [contexto: cidade, escritório, objeto], para recorte com borda de papel rasgado. Sem texto.
> + elemento de assunto em cor (foto real do produto/empresa sempre que existir; gerar só o que for ilustrativo).

## Fluxo

1. Notícia ou Conceitual? Diga no campo **Modo visual** do briefing.
2. Padrão ou teste? Se for teste, hipótese e métrica no campo **Teste**.
3. Notícia: junte os assets reais primeiro (logo, print, foto do produto, fonte). Conceitual: defina o objeto-metáfora e qual elemento leva a cor.
4. Rode o checklist.

## Checklist

1. Logo oficial, sem distorção, na posição do modelo?
2. Poppins em todo o texto?
3. Uma cor de destaque só, apontando para a ideia?
4. Lê no celular em um segundo? Respeita a área segura?
5. Notícia: tem fonte no rodapé? A imagem usada como prova é real?
6. Conceitual: um objeto, um ponto de cor, metáfora clara sem precisar de legenda?
7. Fugiu do padrão? Está declarado como teste?

## Pendências conhecidas

- Logo em SVG, versão só-ícone (avatar/favicon) e versão branca formal.
- Template de Stories/Reels nos dois modelos.
