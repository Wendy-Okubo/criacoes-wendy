# Modelos de publicação — Notícia e Conceitual

Anatomia dos dois modelos padrão da Refatorando, lida a partir de peças publicadas (out/2026). Exemplos em `assets/exemplos/`. Cores medidas nos próprios arquivos.

Formato dos dois: **1080×1350 (4:5)**, carrossel ou post único.

---

## A diferença em uma linha

**Notícia** é colagem densa e com textura: conta um **fato** e põe a **prova** na tela.
**Conceitual** é foto de estúdio limpa: cria uma **ideia** com uma **metáfora** de um objeto só.

| | Notícia | Conceitual |
|---|---|---|
| Função | Informar: o que aconteceu, com fonte | Formar opinião: um conceito, um contraste |
| Fundo | Papel amassado cinza-claro + tiras de papel preto rasgado + fotos P&B | Fundo infinito de estúdio, off-white quente, liso |
| Imagem | Várias camadas: foto do assunto, mockups de interface, ícones, linha do tempo | Uma foto (ou render) fotorrealista de um objeto-metáfora |
| Densidade | Alta: 40–50 palavras e 4 a 6 elementos visuais | Baixa: 25–45 palavras e 1 objeto |
| Cor de destaque | Azul elétrico `#0050FF` | Violeta Refatorando `#4A28FF` |
| Título | Frase completa com sujeito e verbo ("A Meta adiou o lançamento para…") | Fragmento em dois níveis ("Nos / limites") |
| Logo | Canto superior direito, **branco** sobre a tira preta | Canto superior esquerdo, **preto** sobre o fundo claro |
| Fonte da informação | Sempre, no rodapé à esquerda ("Fontes: Meta e Reuters") | Não tem |
| Sensação | Jornal, recorte, urgência controlada | Galeria, calma, respiro |

---

## Notícia

Exemplos: `noticia-meta-adiamento.webp`, `noticia-muse-apps.webp`.

### Estrutura (de cima para baixo)

1. **Faixa de texto (40–45% de cima)**, sobre o papel claro.
   - Logo branco no canto superior direito, sobre uma tira de papel preto rasgado que entra pela borda.
   - **Título** de 2 a 3 linhas, alinhado à esquerda, preto. O trecho que é o "e daí" vai em **azul elétrico** ("reforçar a segurança", "seus apps"). O azul fica sempre no final do título.
   - **Texto de apoio** de 2 a 4 linhas, com mais ou menos um terço da altura do título, em peso regular, preto. Ele dá o contexto e atribui a fala ("A empresa diz ter usado…").
2. **Rasgo:** uma tira de papel preto rasgado atravessa a peça na horizontal e separa texto de imagem.
3. **Faixa de prova (55–60% de baixo)**, a colagem:
   - Foto do **assunto em cor** (o prédio da Meta, o celular). Foto de **contexto em P&B** (cidade, árvores, objetos). Regra que aparece nos dois exemplos: o assunto tem cor, o entorno não.
   - Elementos "de verdade" por cima, cruzando as linhas de rasgo para criar profundidade: mockup de interface (diálogo "Autorizar esta ação?", tela do app), ícones de app reais, escudo 3D.
   - Infográfico simples quando há tempo ou fluxo: linha do tempo com traço pontilhado branco, seta, marcadores redondos azuis e um traço vertical azul em cada ponta.
4. **Rodapé:** "Fontes: X e Y" no canto inferior esquerdo, pequeno, branco sobre escuro ou preto sobre claro.

### Elementos e como são desenhados

| Elemento | Como aparece |
|---|---|
| Papel de fundo | Cinza muito claro (`#F0F0F0`) com textura de papel amassado visível |
| Tiras pretas | Papel preto rasgado com borda branca irregular (fibra do papel), em cantos e faixas horizontais |
| Fotografia | Recortada com borda rasgada. Assunto em cor, contexto em P&B com contraste alto |
| Mockup de UI | Card branco com cantos arredondados (~24px) e sombra suave; botão principal em azul elétrico com texto branco, secundário em cinza claro |
| Ícones de app | Quadrados brancos arredondados com sombra, ícone real colorido, rótulo branco embaixo |
| Setas | Finas e curvas, em **verde-limão** e em branco, apontando para o assunto |
| Ícone 3D | Glossy, azul, com volume e sombra (o escudo). Um por peça, no máximo |
| Rótulos sobre foto | Brancos, bold, com leve sombra para descolar do P&B |

### Tipografia (como está hoje → como fica em Poppins)

As peças publicadas usam uma **sans condensada pesada** no título, serifa ou sans neutra no texto de apoio e condensada nos rótulos. Com a decisão de usar Poppins em tudo:

| Papel | Hoje | Em Poppins |
|---|---|---|
| Título | Condensada black, entrelinha bem fechada | **Poppins ExtraBold (800)**, entrelinha 0.95–1.0, tracking −2% a −3% |
| Destaque no título | Mesmo peso, azul | Igual, em `#0050FF` |
| Texto de apoio | Serifa (peça 1) / sans regular (peça 2) | **Poppins Regular (400)**, entrelinha 1.2 |
| Rótulos e datas | Condensada bold branca | **Poppins SemiBold (600)** |
| Fonte (rodapé) | Condensada regular | **Poppins Regular (400)**, pequeno |

**Atenção na migração:** Poppins é bem mais larga que uma condensada. O mesmo título ocupa cerca de 30% a mais de largura. Para manter o título em 2–3 linhas, ou ele fica mais curto (é o melhor caminho: corte palavras) ou o corpo da letra diminui. O ar de "jornal" que vinha da condensada passa a depender mais da textura de papel, dos rasgos e da colagem; vale olhar as primeiras peças com atenção.

### Cor

Quase tudo é preto, branco e cinza. A cor entra para apontar:
- **Azul elétrico `#0050FF`**: o trecho-chave do título, o botão do mockup, o escudo, os marcadores da linha do tempo.
- **Verde-limão (`#B4FA00`)**: só nas setas.
- Cores de terceiros (logo da Meta, ícones do Gmail ou do Calendário) entram porque são **prova**: a coisa real.

### Copy no modelo

- O título é o fato, completo e declarativo. Lê-se sozinho.
- O azul destaca a consequência ou o ponto que interessa a quem trabalha.
- O texto de apoio atribui ("a empresa diz") em vez de afirmar por conta própria.
- A fonte é obrigatória (é base, ver `voz-refatorando`).
- Uma ideia por tela; o carrossel avança notícia → o que muda → para quem interessa.

---

## Conceitual

Exemplos: `conceitual-limites.webp`, `conceitual-processo.webp`, `conceitual-ferramentas.webp`.

### Estrutura (de cima para baixo)

1. **Logo** preto no canto superior esquerdo, pequeno, com margem generosa.
2. **Título em dois níveis**, alinhado à esquerda:
   - Palavra de entrada curta em **violeta** ("Nos", "No", "Nas"), com mais ou menos metade da altura da palavra-chave.
   - **Palavra-chave enorme em preto**, minúscula, em peso máximo ("limites", "processo", "ferramentas"). Ela pode quase encostar na margem direita.
3. **Duas colunas** separadas por uma linha vertical fina cinza (~1px):
   - Esquerda **"Na teoria:"** e direita **"Na prática:"**, rótulos em violeta, peso forte.
   - Texto em preto, peso regular, alinhado à esquerda. **A coluna da prática é sempre mais longa e mais concreta**: é ali que está a ideia.
4. **Imagem (metade de baixo):** uma foto de estúdio do objeto-metáfora, no mesmo fundo da peça (não há caixa nem borda; o texto vive em cima da foto). O objeto entra pela borda e às vezes vaza (a bota pela esquerda, o dominó pelas laterais, a porta pela direita).

### O objeto-metáfora

O que faz o modelo funcionar é **um elemento colorido num conjunto neutro**, e esse elemento é a tese:

| Peça | Conjunto neutro | Elemento em cor | Leitura |
|---|---|---|---|
| Limites | Bota, chão de concreto rachando | Fita **menta** marcando a borda | Saber onde está o limite antes de cair |
| Processo | Fila de dominós bege caindo | Um dominó **violeta** de pé, parando a queda | Decidir o que **não** automatizar |
| Ferramentas | Molho de chaves metálicas | Chaveiro **violeta** na chave que está na fechadura (e uma chave azul perdida no molho) | Poucas ferramentas certas em vez de muitas |

Regras que dá para tirar disso:
- **Um objeto** por peça (ou um conjunto de iguais), em fotorrealismo de estúdio: luz suave lateral, sombra natural e real, fundo infinito.
- Paleta da foto neutra (bege, cinza, metal, preto) e **só um ponto de cor da marca**.
- A foto não ilustra o texto ao pé da letra: ela é uma **metáfora física** do conceito.
- Nada de tela, holograma ou "tecnologia" visível. O assunto é IA, mas a imagem é de objeto cotidiano.

### Tipografia (Poppins, já é o que está em uso)

| Papel | Peso | Tamanho relativo (canvas 1080) | Cor |
|---|---|---|---|
| Palavra de entrada | Poppins Bold (700) | ~90px | Violeta |
| Palavra-chave | Poppins ExtraBold/Black (800–900), tracking negativo | ~170–190px | Preto |
| Rótulo "Na teoria / Na prática" | Poppins SemiBold (600) | ~36–40px | Violeta |
| Texto das colunas | Poppins Regular (400), entrelinha ~1.25 | ~30–34px | Preto |

### Cor

- Fundo off-white quente `#F0ECE8`.
- Texto preto `#000000`.
- **Violeta Refatorando `#4A28FF`** (medido entre `#4723FF` e `#5439FD`) na palavra de entrada, nos rótulos e no objeto em destaque.
- Menta e azul aparecem só como cor de objeto dentro da foto, nunca em texto.

### Copy no modelo

- É um formato de **série**: o título repete a estrutura ("Nos limites", "No processo", "Nas ferramentas") e as colunas repetem "Na teoria / Na prática". A repetição é proposital e ajuda a reconhecer a série no feed.
- Teoria = conhecimento declarativo, genérico ("sabe listar as dez principais").
- Prática = comportamento específico, com decisão ou consequência ("usa duas ou três, sabe onde cada uma falha, já trocou no meio de um projeto").
- Sem fonte e sem CTA dentro da arte; o CTA vai na legenda.

---

## Como escolher

- Aconteceu algo (lançamento, adiamento, dado novo, mudança de regra)? **Notícia.**
- É ideia, comparação, posicionamento, "teoria x prática", formação? **Conceitual.**
- Os dois na mesma peça, ou outro modelo: **teste**, declarado no briefing (ver `voz-refatorando/references/laboratorio.md`).
