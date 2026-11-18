# Double check do site Wabfy · nov 2026

Nov 16, 2026 · @Wendy

## Resumo e prioridades

O site tem 10 problemas que um visitante ou o Google percebe na hora. Os mais graves são blocos em 5 idiomas colados no pt-br, uma dobra de Sucessão copiada da Seleção, dois prints de módulo errado e o title quebrado de Colaboradores. Tudo abaixo foi conferido no ar em 17 nov. de manhã. Estruturar, Desenvolver, Avaliação 360°, BSC e Seleção mudaram entre 16 e 17 nov., e o que já foi corrigido saiu da lista.

| # | O que corrigir | Onde | Tipo |
| --- | --- | --- | --- |
| 1 | Títulos e rótulos com 5 idiomas colados ("Where the documented process comes from...De onde vem o processo...") e frases inteiras em inglês | Desenho de Processos, Gerador de Cursos, 1:1 | Quebrado |
| 2 | Dobra de IA da Sucessão é a da Seleção ("Qual o papel da IA no recrutamento e seleção?") e o botão Agendar abre o WhatsApp com "tenho dúvidas sobre o Wabfy BSC" | Sucessão | Quebrado |
| 3 | Print de outro módulo: Trilhas usa `O-que-e-SUCESSOES-port`; Assistente usa `Calibracao-9-box-en` no card Ações | Trilhas, Assistente | Imagem errada |
| 4 | Title e meta quebrados: "colaborador diretório com função, departamento e PDI", "profissional da área de colaborador", "Conheça o módulo colaboradores ." | Colaboradores | Quebrado |
| 5 | A palavra "colaboradores" está quebrando frases: "Planeje a sucessão n colaborador ,", alt "d colaborador es", "colaboradores" sem tradução em de e fr. Parece regra de glossário da tradução automática | Escalar, Colaboradores, versões de e fr | Quebrado |
| 6 | Dobras com título e sem conteúdo | Dashboard (3), PDI (3), 9 Box, Mentoria (2), Instrutoria, Assistente, Feed, Gamificação, Desenho de Processos | Quebrado |
| 7 | Links que não levam a lugar nenhum: balão do WhatsApp com `#` em todas as páginas; `#fomulario` (erro de digitação) em Comunidades, Trilhas, Notícias e Seleção; cards Gamificação e Eventos em Notícias; "Module 1:1" no Gerador | Site todo | Quebrado |
| 8 | Promessas sem validação de Produto no ar: comunicado escrito por IA no H1 do Feed; ROI calculado e Assistente no Dashboard; "A IA escreve o plano" no PDI; Teams na Mentoria; ensaio com IA no 1:1; ERP no BSC; IA que recomenda comunidades; SOC Tipo II | Vários | Não faz sentido |
| 9 | Página do pilar Engajar com tradução automática: H1 "Envolvimento que ocorre fora dos ciclos formais.", meta "ENVOLVER-SE", "Na Wabfy, o pilar “Engage”", "sem necessidade de ingresso" | Engajar | Não faz sentido |
| 10 | Resultado do quiz indexado com "Texto a ser substituído" e pilares trocados entre título e texto | /wabfy-perguntas/ | Quebrado |

Depois desses, o maior ganho de SEO e GEO está em três frentes do site todo: titles e metas genéricos, imagem de compartilhamento em inglês nas páginas pt-br e ausência de hreflang e de sitemap para es, de e fr.

## Achados gerais do site

Estes problemas se repetem em quase todas as páginas. Corrigidos uma vez no modelo, somem do site inteiro, por isso não se repetem nas seções de pilar.

**Contato e conversão**

- Balão flutuante "Fale com um especialista e veja Wabfy em ação!" aponta para `#`, e o widget tem um link `#`. O texto também varia ("veja Wabfy", "veja o Wabfy", "conheça a Wabfy na prática").
- WhatsApp abre com a mensagem genérica "Quero saber mais sobre os produtos da Wabfy" em todas as páginas. Só o botão Agendar de Colaboradores usa o padrão "Olá! Vim pela página de X da Wabfy...". O widget pré-preenche "Oi! Cheguei aqui pelo site Wabfy", sem "da".
- Botão escrito "Agende uma demonstração", não "Agendar demonstração". Na Home, três deles vão para `#form` e o "Explore a plataforma" vai para o Calendly.
- Versão em inglês: todos os CTAs vão para `wabfy.com/sms/?text=I+want+to+learn+more+about+Wabfy`, que abre SMS e não WhatsApp. Confirmar se é intencional.

**Navegação**

- Menu "Soluções, Quem Somos, Clientes, Blog" sem link no HTML, em todos os idiomas. Na versão em inglês o menu está em português.
- A Home não tem link rastreável para as 4 páginas de pilar. Buscadores e IAs só chegam a elas pelo sitemap.
- Os auditores relataram que Quem Somos e Clientes não existem (a URL devolve a Home) e que o blog existe em `wabfy.com/blog/`, fora do menu e do sitemap.

**SEO técnico**

- Imagem de compartilhamento (og:image) em inglês (`-en`) em quase todas as páginas pt-br, com alt em inglês ("job architecture software", "9 box grid software").
- `twitter:card` com valor traduzido "imagem\_resumo\_grande", que é inválido (o certo é `summary_large_image`). `og:locale` "pt-br" em vez de `pt_BR`. Rótulo "Time to read" em inglês.
- Title no formato "Wabfy | X - Wabfy" e meta description igual ao eyebrow em Engajar, Escalar, Feed, Gamificação, Mentoria, quiz e Fórum.
- O sitemap da raiz só lista as páginas em inglês. O pt-br tem sitemap próprio que o robots.txt não declara, e es, de e fr não têm. Não há hreflang ligando as versões.
- Páginas de obrigado, checkout, resultado do quiz e o Fórum (evento de agosto) estão indexáveis e no sitemap.
- `/pt-br/home-v3/` é uma cópia indexável da Home (o canonical aponta para a Home, mas vale redirecionar).

**GEO e AEO**

- O robots.txt bloqueia cerca de 30 robôs de IA, entre eles GPTBot, ClaudeBot, CCBot e Google-Extended, com o sinal "search=yes, ai-train=no". Bloquear treino é uma escolha. Vale conferir se robôs de busca e resposta (OAI-SearchBot, ChatGPT-User, PerplexityBot) não estão na lista, porque isso tira a Wabfy das respostas de IA.
- Nenhum dado estruturado (FAQPage, Organization, SoftwareApplication) apareceu nas páginas.
- Muitas respostas de FAQ começam só com "Sim." ou "Não.", o que dificulta a citação por IA. A primeira frase deveria repetir a resposta completa.

**Imagens**

- Quase todos os prints estão com alt vazio. O único alt comum, da imagem do FAQ, tem espaço antes do ponto: "plataforma Wabfy .".
- `faq-pt-br@1x.webp` aparece em todos os idiomas.

**Idiomas (es, de, fr, en)**

- "colaboradores" ficou sem tradução em de e fr, inclusive em H1 (de: "colaboradores aus verschiedenen Abteilungen...").
- PDI traduzido como "deslocados internos" (fr: "personnes déplacées à l'intérieur de leur propre pays").
- Nomes de pilar em inglês dentro dos textos ("pilar «Engage»") e eyebrows traduzidos ao pé da letra (Escalar como "UMFANG" e "ÉCHELLE", Feed como "ALIMENTAR").
- A Política de Cookies em pt-br está em inglês, com canonical para a versão da raiz.

## Home

A [Home pt-br](https://wabfy.com/pt-br/) está boa no essencial (title novo, FAQ de 10 perguntas, números da Caixa certos) e tem seis ajustes de texto e de link.

- **Travessão:** "a partir dos mesmos critérios — não de percepções".
- **"na Wabfy":** "Cada cargo tem as competências e o nível esperado registrados na Wabfy."
- **Crase:** "integrar os dados da sua empresa a Wabfy" deveria ser "à Wabfy".
- **Logos de clientes:** alts genéricos "Logotipo 5" e "Logotipo 6". O nome do arquivo `logo_proeduc-new` sugere que o Pró-Educ aparece duas vezes. O arquivo do hero se chama `Imgagem-hero-new`.
- **Links:** seção "Os módulos de cada pilar" sem link para as páginas de pilar; três "Agende uma demonstração" vão para `#form` e o último vai para o WhatsApp.
- **GEO:** faltam no FAQ perguntas que um gestor de RH faz a uma IA: modelo de contratação e preço, integração com folha e ERP, LGPD e segurança, app no celular, porte mínimo de empresa.

**Outros idiomas da Home**

- **en:** CTAs para SMS, menu em português, alt "Logo da Caixa Econômica Federal" em português.
- **fr:** versão desatualizada (title "Wabfy - Wabfy", FAQ com 6 perguntas, H2 "Affaire Caixa", que em francês soa como processo judicial), além de "colaboradores" e "personnes déplacées" no texto.
- **de:** "colaboradores" sobrando ("für 150.000 Mitarbeiter colaboradores").
- **es:** aspas da tradução ("¿Qué es « Wabfy »?") e "mapear" traduzido como "asignar" no case.

## Pilar 01 · Estruturar

A [página do pilar](https://wabfy.com/pt-br/wabfy-estruturar/) foi refeita entre 16 e 17 nov. e está limpa (title e meta próprios, 4 módulos com link, FAQ de 6 perguntas). Sobram o card da Avaliação 360°, que cita "avaliação técnica", e o arquivo `Avaliacao-362@1x.webp` (nome com erro). Nos módulos, o Dashboard é o que mais precisa de atenção.

| Módulo | Quebrado ou sem sentido | Imagens | SEO e GEO |
| --- | --- | --- | --- |
| [Dashboard de RH](https://wabfy.com/pt-br/wabfy-dashboard-de-rh/) | H2 "decisões do RH emum só painel"; 3 H2 sem conteúdo ("O ponto de partida do pilar Estruturar", "Dos módulos ativos ao resultado...", "De onde vêm os números do painel..."); 3 botões para `#form`; FAQ 4 não responde se dá para escolher indicadores. Promessas a validar: ROI calculado por "metodologia fixa" e "Assistente do painel" (pendência aberta) | Os 7 alts dizem "do da Wabfy Painel de RH" | Meta promete "tempo real", sem confirmação. FAQ 1 "É o painel executivo do pilar Estruturar" não traz diferencial |
| [Plano de Cargos](https://wabfy.com/pt-br/wabfy-plano-de-cargos/) | Dobra "Critérios claros para o RH, a liderança e o colaborador" só mostra "01/03" (conferir se o carrossel carrega). Não cita a novidade de 5 nov. "competências e ciclos por cargo" | Alts vazios; ícone `fruncionario-icon.svg` | Title bom. FAQ com 7 perguntas (padrão 4 a 6). Falta: importar a planilha de cargos atual, quanto tempo leva, quem edita cargos |
| [Avaliação 360°](https://wabfy.com/pt-br/wabfy-avaliacao-360/) | FAQ 1 "O que é o “ Avaliação 360° ” da Wabfy?" (masculino e aspas com espaço). "Avaliações técnicas configuradas separadamente" e "Percentual visível em cada resultado individual" contrariam o release de 5 nov. (saíram prova técnica e resultado individual). Faltam as novidades: painel do ciclo, criação guiada 90/180/360, avaliação em lote, período de experiência | `Avaliar-subordinados` e `avaliacoes-em-massa-com-IA` provavelmente mostram o layout anterior a 5 nov. | Title e meta novos, bons. Falta: diferença entre 90, 180 e 360; se a avaliação é anônima |
| [PDI e Trajetória](https://wabfy.com/pt-br/wabfy-pdi-e-trajetoria/) | 3 H2 sem conteúdo: "Dois conceitos, um módulo", "Como funciona" e "De onde vêm as ações do PDI...". Promessas a validar: "A IA escreve o plano de desenvolvimento a partir do quadrante" e "A IA analisa a transcrição de cada sessão" | Alts vazios | Title "PDI Software: Planos..." mistura inglês; meta com "(IDPs)". Falta: como montar um PDI, exemplo de PDI, diferença entre PDI e plano de carreira |

## Pilar 02 · Desenvolver

A [página do pilar](https://wabfy.com/pt-br/wabfy-desenvolver/) já tem os 8 módulos com link e FAQ, mas os nomes dos cards não batem com os módulos: "PROJETO DE PROCESSOS" (Desenho de Processos), "CURSOS E AULAS" (Cursos e Turmas), "trilhas" em minúscula e "AULAS" (Instrutoria de Turmas). Os contadores do case Caixa aparecem como "0 k", "− 0 %", "0 min" e "0 dias" para quem lê sem rodar a animação, inclusive buscadores e IAs. Falta decidir com Produto o pilar do 9 Box (o release de 5 nov. o coloca em Escalar) e do 1:1 (a demo de 9 out. o mostrou em Engajar).

| Módulo | Quebrado ou sem sentido | Imagens | SEO e GEO |
| --- | --- | --- | --- |
| [Desenho de Processos](https://wabfy.com/pt-br/wabfy-desenho-de-processos/) | H2 com 5 idiomas colados ("Where the documented process comes from and what it producesDe onde vem...") e lista de conexões em pt, en, es, de e fr, com frases só em inglês ("The SOP guides the creation of a course..."). H2 "Da entrevista ao processo que a equipe consegue consultar" sem conteúdo | Ícone `Plano-de-cargos-purple.svg` em "O desafio"; alts vazios | Meta termina com "treine processos na Wabfy" (usar "com a Wabfy"). FAQ boa |
| [Gerador de Cursos com IA](https://wabfy.com/pt-br/wabfy-gerador-de-cursos-com-ia/) | Diagrama de conexões em 5 idiomas, inclusive o H2. Card "ModuleMóduloMóduloModulModule 1:11:11:11:11:1" com link `#`. FAQ 1: "O que é o “ Gerador de Cursos com IA ” de Wabfy?", "um trilhas m e funções" e chama o pilar Desenvolver de módulo | og:image `hero-magic-en` | Meta com cerca de 185 caracteres. Falta: idiomas em que o curso pode ser gerado, se a IA usa os dados da empresa para treino, revisão humana antes de publicar |
| [Cursos e Turmas](https://wabfy.com/pt-br/wabfy-cursos-e-turmas/) | Imagem vazia do Elementor (`placeholder.png`) em "Meus cursos". Links "trilhas" e "Gerador de Cursos com IA" vão para âncoras do pilar, não para as páginas. "02 Emcursos e aulas", "03Conecta-secom", "um trilhas". Eyebrow "CURSOS E AULAS". Botão do hero para `#formulario`. Não cita "gestor solicita curso" (release de 5 nov.) | Arquivo `recomendfacoescursos-e-turmas-br`; og:image diferente do hero | Title bom. Falta: certificado, importar SCORM, quem vê o progresso |
| [Trilhas](https://wabfy.com/pt-br/modulo-trilhas/) | Botão do hero para `#fomulario` (âncora com erro de digitação) | **"O que é" usa `O-que-e-SUCESSOES-port`, print de Sucessões.** Trocar por uma trilha com etapas e progresso | H2 "O que é uma trilha de aprendizagem?" é bom para AEO. Falta: atribuição automática por cargo, pré-requisitos, certificado |
| [9 Box](https://wabfy.com/pt-br/wabfy-9-box/) | H2 "Da coleta à publicação em cinco passos" sem os passos. "trilhas trilhas e as horas de estudo", espaço duplo em "em  cada ciclo", "“ PDI ”". Conexões chamam os pilares de "Estrutura" e "Escala". FAQ 1 "na própria Wabfy". Contra o release de 5 nov.: alertas por pessoa (saíram do painel) e "só o RH ajusta os pesos" (release: gestor define pesos) | `Distribuicao-e-alertas-9-box-port` mostra recurso que saiu; faltam prints de Meu time, explicação do quadrante e panorama | Title bom; meta com cerca de 150 caracteres. Falta: como medir potencial, o que significa cada quadrante |
| [1:1](https://wabfy.com/pt-br/wabfy-one-one/) | Conexões em 5 idiomas ("Receives fromRecebe deRecibe de..."). "num só lugar". Promessas a validar: ensaio da conversa com a IA ("coach neutro"), alertas de desempenho por mais de um ciclo, "nada fica guardado" | **Prints em inglês na página pt-br:** `Conducao-one-one-en` e `Painel-do-gestor-one-one-en` | FAQ com 7 perguntas. Falta: frequência ideal, integração com agenda, modelos de pauta |
| [Mentoria](https://wabfy.com/pt-br/mentorias-wabfy/) | 2 H2 sem conteúdo: "Do foco de desenvolvimento às ações no PDI" e "De onde vêm as recomendações...". Promessa a validar: integração com Teams ("Transcrição trazida da reunião no Teams") | Arquivos `Area-do-Mentorado-portuges` e `Torne-se-um-Mentor-portuges` | **Title "Wabfy \| Mentorias - Wabfy" e meta igual ao eyebrow.** Falta: como estruturar um programa de mentoria, como medir o resultado |
| [Instrutoria de Turmas](https://wabfy.com/pt-br/wabfy-turmas-presenciais/) | H2 "Gerencie da criação do curso aocertificado...". "Três formas de usar a mesma turma presencial" sem conteúdo. Promessa a validar: "A IA usa três informações para sugerir quem inscrever" (a FAQ fala em duas) | `fruncionario-icon.svg`; ícone `exportable-reports` no passo "Crie a turma" | Title e meta bons. Falta: presença por QR Code, certificado personalizável |

## Pilar 03 · Engajar

A [página do pilar](https://wabfy.com/pt-br/wabfy-engajar/) é a mais fraca do site: o texto pt-br saiu de tradução automática e ficou atrás da versão em inglês. Exemplos literais:

- H1 "Envolvimento que ocorre fora dos ciclos formais."; title "Wabfy | Engajar - Wabfy"; meta "PILAR 03 · ENVOLVER-SE".
- "Na Wabfy, o pilar “Engage” mantém os funcionários envolvidos"; "sem necessidade de ingresso" (é "sem abrir chamado"); "Plano de Desenvolvimento Profissional (IDP)"; "sem precisar ficar atrás de ninguém".
- "Pontos e classificações" descreve a Gamificação antiga, anterior ao release de 5 out.
- Travessão em "o que pode ser respondido — nenhuma informação externa é consultada".
- Card Eventos sem link. A Pesquisa de Clima, liberada para comunicação em 19 out., não aparece.
- Arquivos dos cards com nomes antigos: `Endomarketing@1x` (Feed), `Chat-e-automacao@1x` (Assistente), `Gameficacao@1x`.
- Na versão es, o card do Asistente usa `chat-alemao.webp` (print em alemão) e o de Personas usa `Pessoas-colaboradores-en` (em inglês).

| Módulo | Quebrado ou sem sentido | Imagens | SEO e GEO |
| --- | --- | --- | --- |
| [Gamificação](https://wabfy.com/pt-br/wabfy-gamificacao/) | "Como funciona" só mostra "01/03". Falta a dobra Conexões. H3 "Viagens" (tradução de Journeys; o resto da página diz Jornadas). Telas simuladas com rótulos em inglês, alemão e francês ("Weekly goal", "Wochenziel", "Rewards store", "Legendary chest"). FAQ ainda fala em "ligas e rankings" e a narrativa "compita com você mesmo" do release não aparece | Arquivos `controlwe@1x` e `win@1x` | **Title "Wabfy \| Gamificação - Wabfy" e meta igual ao eyebrow.** Falta: como evitar competição tóxica, quem define os prêmios |
| [Feed](https://wabfy.com/pt-br/wabfy-feed/) | **H1 promete "comunicados escritos com IA"** e a página diz "a IA escreve o comunicado e cria a imagem". O comunicado com IA está em v1 instável e não deve ser comunicado até Produto confirmar. Dobra "Como o módulo de Feed se conecta à plataforma" vazia. Rótulos colados "01Rede social", "02Anúncios" | Print `AI-announcements-feed-new-en` (inglês) | **Title "Wabfy \| Feed - Wabfy" e meta igual ao eyebrow.** 5 das 6 respostas do FAQ são só "Sim.". Falta: diferença entre Feed e Notícias |
| [Comunidades](https://wabfy.com/pt-br/comunidades/) | Ainda sem a revisão v2 de 16 nov.: aspas soltas em "os “ colaboradores ”", dobra "A IA recomenda comunidades..." sem confirmação, eyebrow sem ENGAJAR. FAQ 1 responde "Qualquer usuário do colaborador pode criar uma conta". Conexões: "trilhas e de plataforma e conteúdo". Botão para `#fomulario` | Prints sem alt | Title bom. FAQ com 4 perguntas e sem "O que é" |
| [Assistente](https://wabfy.com/pt-br/wabfy-assistente/) | Ainda sem a revisão v2: "Como funciona" só tem o botão; sem Conexões; "HR, gestores e colaboradores : faça sua pergunta" (HR em inglês e espaço antes dos dois-pontos); botão para `#form`. A página toda depende da pendência 37 | **Card Ações usa `Calibracao-9-box-en`** | Title novo, bom. FAQ com 4 perguntas e sem "O que é" |
| [Notícias](https://wabfy.com/pt-br/wabfy-noticias/) | Cards Gamificação e Eventos com link `#`. Botão do topo para `#fomulario`. Rótulos colados "02EmNotícias", "01Recebe de". Promessas a validar (não estão na base): criação de notícias com IA, notícias recomendadas por IA, acesso liberado por conquista da Gamificação | Alts vazios em `WHAT-IT-IS`, `all-news`, `single-news`; alt do og:image em inglês | Title e FAQ bons (abre com "O que é" e tem "Notícias × Feed") |
| [Colaboradores](https://wabfy.com/pt-br/wabfy-colaboradores/) | **Title "colaborador diretório com função, departamento e PDI \| Wabfy"** e meta "Encontre qualquer profissional da área de colaborador pelo nome... Conheça o módulo colaboradores .". Rótulos colados "01Recebe de", "02No diretório". FAQ 1 sem diferencial | Alts: "colaborador perfil em Wabfy, com função, aderência ao cargo e metas de ciclismo", "da Wabfy , com busca" | Única página com a mensagem de WhatsApp no padrão. Falta: que dados do perfil ficam visíveis e para quem, se mostra organograma |
| Eventos | Card no pilar sem página própria. O contexto do projeto registra possível descontinuação: decidir se o card fica |  |  |

## Pilar 04 · Escalar

Na [página do pilar](https://wabfy.com/pt-br/wabfy-escalar/), o FAQ é o melhor do site, mas há três frases quebradas e dois travessões:

- "Acompanhe os objetivos estratégicos, os KPIs e os OKRs com a Wabfyno painel do Balanced Scorecard."
- "Planeje a sucessão n colaborador , identifique possíveis substitutos". O alt de um print diz "retenção d colaborador es.".
- Travessão no card Sucessão e no FAQ: "em quatro passos — Impacto, Gap, Substituição, Acompanhamento".
- "simula o efeito de uma meta antes do commit" (jargão).
- O card SELEÇÃO não tem link, e a página de Seleção existe.
- Title "Wabfy | Escalar - Wabfy" e meta "PILAR 04 · ESCALAR".

| Módulo | Quebrado ou sem sentido | Imagens | SEO e GEO |
| --- | --- | --- | --- |
| [BSC](https://wabfy.com/pt-br/wabfy-bsc/) | Atualizado em 16 nov., mas o H2 diz "faz pra você não precisar fazer na mão". Botão do FAQ abre o WhatsApp com "Olá, tenho dúvidas sobre o Wabfy BSC." (masculino). Promessa a validar: "o BSC pode receber dados de sistemas externos" (ERP) | og:image `hero-BSC-en` | Title e FAQ bons. Falta: diferença entre BSC e OKR na primeira frase, as quatro perspectivas |
| [Sucessão](https://wabfy.com/pt-br/wabfy-sucessao/) | **A dobra de IA é a da Seleção:** H2 "Qual o papel da IA no recrutamento e seleção?" e texto "O Seleções parte de um cargo já cadastrado...". **O botão Agendar abre o WhatsApp com "Olá, tenho dúvidas sobre o Wabfy BSC."** Os auditores apontam ainda promessas sem validação: curva de proficiência, candidatos ordenados por aderência e risco de saída estimado pela IA | og:image em inglês | Title bom; FAQ com 8 perguntas. Falta: o que é posição crítica, como montar um plano de sucessão passo a passo |
| [Seleção](https://wabfy.com/pt-br/wabfy-selecao/) | Atualizada em 16 nov., com os 8 passos e os links de Conexões certos. Ficam: 2 botões para `#fomulario`; meta "Compare candidatos com o perfil da vaga na Wabfy". Promessas a validar: candidaturas pelo LinkedIn (pendência 40) e "A IA conduz a inscrição pelo WhatsApp" | Prints sem alt | Title bom. FAQ com 9 perguntas (padrão 4 a 6). Nome oscila entre Seleção (URL e pilar) e Seleções (texto) |

## Outras páginas

O resultado do quiz e o Fórum de agosto são os que mais expõem a marca, porque estão indexáveis e com erros visíveis.

| Página | O que corrigir |
| --- | --- |
| [Resultado do quiz](https://wabfy.com/pt-br/wabfy-perguntas/) | "Texto a ser substituído" nos Níveis 3 e 4. Pilar trocado: o Nível 2 recomenda Desenvolver no título e Estruturar no texto; os Níveis 3 e 4 citam Estruturar no texto e Engajar no fechamento. Travessões em "Nível 1 — T&D reativo" (inclusive na meta) e "Magic — Gerador com IA". Cita NR-01 e "Curso pelo WhatsApp", fora da comunicação. "Nine Box", "One-on-One", "Agende uma demonstração do Wabfy", "“ Wabfy ”". Está indexável: aplicar noindex |
| [Fórum de IA para RH](https://wabfy.com/pt-br/wabfy-forum-ia-para-rh/) | Evento de 24 a 26 de agosto ainda indexável e com "Quero me inscrever" ativo. FAQ "Quantos dias são?" responde "3 dias de encontros presenciais", mas a página diz "100% online". "especialistasconvidados" duas vezes. Meta igual ao title. Decidir entre página de evento realizado ou noindex com redirecionamento |
| [Integrações e Serviços](https://wabfy.com/pt-br/wabfy-integracoes-e-servicos/) | Meta com "para o Wabfy". Validar "certificação SOC Tipo II" e a lista "SAP, Totvs, Senior RH e ADP" (pendência 11) |
| [Política de Cookies](https://wabfy.com/pt-br/politica-de-cookies/) | A versão pt-br é a página em inglês ("Cookie Policy", canonical para a raiz, og:locale en\_US). Sem H1 |
| Política de Privacidade | Relatado pelos auditores, para o Jurídico: restos de tradução ("cartões de crédito card"), escopo descrito para os Estados Unidos, sem encarregado (DPO) nem CNPJ, "Termos de Uso" sem link, sem H1 |
| Obrigado e checkout do Fórum | Relatado pelos auditores: indexáveis e no sitemap. Aplicar noindex e tirar do sitemap. O checkout diz "Participe dos dois encontros" para um evento de três |
| [/pt-br/home-v3/](https://wabfy.com/pt-br/home-v3/) | Cópia da Home, indexável. Redirecionar para a Home |
| Blog | Relatado pelos auditores: fica em `wabfy.com/blog/` (raiz em inglês) com conteúdo em português, fora do menu e do sitemap, linkando módulos da versão em inglês. O post de PDI usa "Na Wabfy" |

## Como a checagem foi feita

Foram lidas 30 páginas pt-br e uma amostra das versões en, es, de e fr entre 16 e 17 nov. Cada achado das tabelas foi reconferido no ar em 17 nov. de manhã. O que só os auditores viram está marcado como "relatado".

- **Ferramenta:** leitura do HTML pelo WebFetch. O acesso por navegador ao wabfy.com está bloqueado neste ambiente. Por isso não dá para garantir que uma imagem carrega nem ver o layout. Os achados de imagem vêm do nome do arquivo e do alt.
- **Dobras vazias:** podem ser carrosséis que só aparecem com JavaScript. Mesmo assim, para buscadores e IAs elas estão vazias. Vale olhar na tela antes de mexer.
- **Não verificado:** dados estruturados (JSON-LD), hreflang no código-fonte, destino final do redirecionador `/whats/` e status HTTP. A demo da plataforma não estava acessível, então promessas de produto foram cruzadas com a base de conhecimento, os releases e o contexto operacional do projeto.
- **Site em movimento:** Estruturar, Desenvolver, Avaliação 360°, BSC, Seleção e Colaboradores mudaram entre 16 e 17 nov. Itens corrigidos nesse intervalo saíram do doc.
