# Proposta — Produção recorrente de vídeos animados do projeto 'Márcia' para marketing

## 1. Proposta

Produzir vídeos animados para marketing digital utilizando ferramentas de IA, reduzindo custo e tempo de produção em relação ao modelo tradicional de produtora.

A frente principal é a série da personagem **Márcia** — personagem animada recorrente que explica a plataforma e o universo de RH com humor, pensada para engajar o público no Instagram e LinkedIn. Também produzimos a versão em inglês (**Megan**) e outras séries curtas (**Post-its**).

**Objetivos estratégicos da iniciativa:**

- **Gerar alcance orgânico consistente** — conteúdo recorrente é condição para o algoritmo propor a marca aos usuários e crescer a base de seguidores.
- **Construir comunidade em torno da personagem** — a Márcia tem potencial de virar um símbolo reconhecível da marca, com público que acompanha, se identifica e compartilha, gerando efeito de recomendação espontânea.
- **Despertar interesse do público-alvo** — humor e situações do cotidiano de RH geram identificação e lembrança, facilitando o primeiro contato com o produto e reduzindo a barreira de entrada no funil comercial.
- **Diversificar o portfólio de criativos para campanhas pagas** — produzir múltiplos formatos, abordagens e tons permite testar diferentes criativos em ads, alcançar públicos distintos e otimizar o CPR sem custo adicional de produção.
- **Reduzir a dependência de produtoras externas** — internalizar a produção via IA dá agilidade para reagir a pautas da semana, tendências e janelas de oportunidade comercial, além de manter o custo marginal por vídeo muito abaixo do mercado tradicional.

Com a cadência proposta de 2 vídeos por semana, construímos um pipeline sustentável que alimenta simultaneamente o crescimento orgânico, a performance paga e o relacionamento com a comunidade ao longo do tempo.

## 2. Entrega esperada

- **Volume:** 6 a 8 vídeos por mês
- **Cadência:** aproximadamente 2 vídeos por semana
- **Canais:** Instagram e LinkedIn
- **Formatos:** vídeo principal em português, versão em inglês, séries curtas adicionais conforme o calendário editorial

**Justificativa do volume (2 vídeos por semana):** essa cadência faz sentido em duas frentes. Na **conta principal da marca**, 2 vídeos por semana é o volume mínimo recomendado para gerar alcance orgânico consistente — as redes sociais priorizam perfis com publicação regular e volume relevante, e abaixo dessa cadência o algoritmo reduz a entrega do conteúdo. Além disso, o plano de posicionamento inclui a avaliação de criar uma **página dedicada no Instagram para a personagem Márcia**, que como perfil novo precisa justamente dessa mesma cadência mínima de 2 posts/semana para gerar tração inicial e crescer a base de seguidores. Em ambos os cenários, produzir volume menor comprometeria o retorno de alcance; no caso da página dedicada, comprometeria também a própria viabilidade do novo perfil.

## 3. Ferramentas necessárias

Cada vídeo passa por 5 etapas de IA, cada uma com uma ferramenta especializada. Nenhuma IA do mercado atual resolve todas as etapas sozinha.

| Etapa | Ferramenta | Função | Status |
| --- | --- | --- | --- |
| 1. Roteiro, prompts e organização | **Claude Team** ou **ChatGPT Business** | Texto, revisão, orquestração do fluxo | Claude Team ativo para toda a empresa, cobrado por assento ativo (\~R$ 100-130/mês por assento). Se o ChatGPT Business for adotado, 1 assento usado para esta frente pode ser cancelado — a assinatura segue ativa para os demais usuários |
| 2. Frames da personagem (imagens) | ChatGPT Business (Codex) | Gerar imagens consistentes da personagem nas cenas | A contratar |
| 3. Animação dos frames em vídeo | Veo 3 (Google) | Transformar imagens em vídeo com movimento e áudio | API a liberar na conta corporativa |
| 4. Narração | ElevenLabs | Voz da personagem | Assinatura ativa |
| 5. Trilha sonora e efeitos | Envato | Música e sons | Assinatura ativa |

## 4. Justificativa das escolhas

### Por que não dá para resolver com as ferramentas que já temos

Cada ferramenta que a empresa tem hoje é especialista em uma etapa e já é usada onde resolve 100% da demanda:

- **Claude Team** cobre a etapa 1 (texto, roteiros, organização). **Não gera imagem nem vídeo nativamente** — nenhuma versão do Claude (Pro, Team, Max, Opus 5.5) tem geração visual própria. O Claude pode **acionar** geradores externos via integração (MCP) com Higgsfield, Magnific ou Codex, mas essas ferramentas externas precisam estar contratadas separadamente e trazem o próprio custo. A integração não substitui a contratação — o Claude só orquestra o pedido para a ferramenta externa, que faz a geração e cobra pelo uso.
- **ElevenLabs** cobre a etapa 4 (narração). É ferramenta de áudio — não gera visual.
- **Envato** cobre a etapa 5 (trilha e efeitos). É banco de ativos prontos (stock), não gera conteúdo personalizado — não cria a personagem em uma cena específica.
- **Magnific** (conta individual já usada pela equipe de design) consegue gerar imagens da personagem com qualidade. Porém, a conta atual tem duas limitações relevantes: **(1) 1 sessão por vez** — se outra pessoa logar, a primeira é deslogada, o que atrasaria a produção dos criativos estáticos que a equipe de design entrega para redes sociais, apresentações, LPs, páginas de produto e materiais de marca; **(2) volume de créditos limitado** — o plano individual funciona bem para 1 pessoa, mas para 2 usuários em paralelo seria necessário migrar para o plano Team (mais caro).
- **Google Workspace** já inclui 1.000 créditos/mês do Veo 3 — suficiente para aproximadamente 1 vídeo por mês. Para 6 a 8 vídeos/mês é obrigatório habilitar o pagamento adicional, que pode ser pela **API pay-per-use** (paga por segundo de vídeo gerado — custo variável, flexível, com teto configurável) ou por uma **assinatura Google AI Ultra** (\~US$ 200/mês ≈ R$ 1.040, com limites altos fixos). Para o volume proposto, a **API pay-per-use é mais vantajosa** — paga só o que usa e cabe no teto de R$ 1.100/mês. A comparação detalhada (por take e por mês) está na subseção específica abaixo.

**As duas lacunas que exigem novas contratações são:**

1. **Geração de imagens consistentes da personagem** (etapa 2) — nenhuma ferramenta atual resolve.
2. **Volume de geração de vídeo** (etapa 3) — o crédito gratuito do Workspace só cobre 1 vídeo/mês.

É por isso que o restante desta seção justifica apenas as duas novas ferramentas propostas: Veo 3 API (para suprir o volume de vídeo) e ChatGPT Business (para gerar as imagens da personagem e, de brinde, cobrir o uso diário de IA em texto).

### Veo 3 (Google) — animação

O mercado atual tem pelo menos 7 geradores de vídeo relevantes. O Veo 3 foi escolhido por quatro motivos:

1. **Controle superior de primeiro e último quadro**, crítico para manter a personagem consistente dentro de cada cena.
2. **Áudio nativo integrado**, sem necessidade de adicionar faixa separada.
3. **Três níveis de qualidade no mesmo plano** (Standard, Fast, Lite). A versão Fast cobre a maioria dos takes da Márcia com qualidade equivalente ao Standard por um quarto do preço.
4. **Preço competitivo** para o volume projetado.

#### Alternativas avaliadas

| Ferramenta | Por que não |
| --- | --- |
| Sora 2 Pro (OpenAI) | API encerrada em set/2026; preço alto (US$ 5,60 por clipe de 8s em 1080p) |
| Runway Gen-4 | Qualidade equivalente, mas áudio não é nativo e exige reaprendizado do fluxo |
| Luma Ray 3 | Assinatura cara (US$ 30 a US$ 300/mês); menor controle de primeiro/último quadro |
| Kling, Hailuo e Seedance | Preços muito baixos, mas são empresas chinesas — demandam revisão de termos de uso para contratos corporativos |
| Higgsfield | Especializado em avatares humanos realistas; não é a melhor opção para personagem ilustrada; vamos precisar dessa ferramenta para criar avatares realistas, mas não é para esse projeto. |

#### Veo 3 — API pay-per-use × Assinatura Google AI Ultra

Para acessar o Veo 3 com volume maior que os 1.000 créditos gratuitos incluídos no Workspace, existem duas rotas. Preços atualizados em novembro/2026:

| Via | Custo | Capacidade | Modelo de conta |
| --- | --- | --- | --- |
| **API pay-per-use** (recomendada) | R$ 5 por take 8s (Veo 3 Fast) ou R$ 17 (Standard) | Sem limite rígido — escala com uso, teto configurável | Conta Google Cloud corporativa, comível para equipe |
| **Google AI Ultra top** | US$ 200/mês fixo ≈ R$ 1.040 | 25.000 créditos/mês | Plano consumer, amarrado a 1 conta Google individual |

**Custo real para 6-8 vídeos/mês (duração média de \~70 segundos cada, com média de 4 alterações por vídeo):**

Cada vídeo entregue exige, na prática, **mais de uma tentativa de produção** — é comum descartar frames, regerar takes por problemas de consistência e aplicar alterações pós-revisão (4 ou mais por vídeo em média, podendo chegar a mais em casos de maior complexidade). No piloto, a proporção observada foi de aproximadamente **2 tentativas para cada vídeo finalizado**, com cerca de 12 a 16 takes por tentativa. Para entregar 6 a 8 vídeos/mês, isso representa **\~190 a 260 takes/mês**, consistente com o custo observado no piloto (R$ \~150 por vídeo entregue) e dentro do teto de R$ 1.100 proposto.

| Via | Cálculo | Custo mensal planejado | Risco |
| --- | --- | --- | --- |
| **API Fast** | 190-260 takes/mês (16 tentativas médias para 8 entregues) × R$ 5 + margem para takes Standard e meses de maior volume | **\~R$ 1.100 (teto sugerido)** — custo variável que escala com uso real; o teto atua como trava automática e absorve picos de alterações e meses pesados | Baixo — flexível para baixo em meses leves, teto absorve picos |
| **Ultra** | Fixo | R$ 1.040 | Alto — 190-260 takes/mês podem consumir 100 a 400 mil créditos; Ultra top tem apenas 25 mil |

**Por que a API é escolhida:**

1. **2x a 5x mais barata por take** gerado (preço direto por segundo de vídeo, sem camada de créditos que infla o custo).
2. **Paga só o uso real** — em meses leves, custa menos. O Ultra é fixo.
3. **Sem risco de estourar créditos** — o teto configurável atua como trava automática, já dimensionado para meses pesados.
4. **Acesso corporativo** via conta Google Cloud, não amarrado a uma única pessoa como o Ultra (consumer).

A assinatura Ultra passaria a ser mais vantajosa apenas em cenários de produção muito maior (acima de 20 vídeos/mês consistentes) — fora do escopo desta proposta.

#### E a versão corporativa do Ultra?

O Google também oferece o **AI Ultra for Business** (ou *AI Ultra Access*) como versão corporativa — e **sai ainda menos vantajoso** que a versão consumer, por três motivos:

- **Não é standalone:** exige que a empresa esteja em um plano Google Workspace Business ou Enterprise como base (US$ 7-50 por usuário/mês, dependendo do tier). Se não estivermos nessa configuração, teria que migrar/fazer upgrade do Workspace atual de toda a empresa.
- **Preço é por usuário:** estimativas de mercado colocam o pacote completo (Workspace + Ultra Access) em **US$ 100-300 por usuário/mês** (R$ 520-1.560 por assento).
- **Escala com a equipe:** mais pessoas precisando de acesso ao Veo 3 = multiplica o custo. A API, por contraste, tem custo único de uso independente de quantas pessoas da equipe acessam.

**Comparando os três caminhos:**

| Via | Custo mensal para 1 usuário ativo | Risco de escala |
| --- | --- | --- |
| **API pay-per-use** (proposta) | R$ 1.100 teto (expected \~R$ 900) | Baixo — mesmo custo com mais usuários |
| Consumer Ultra | R$ 1.040 fixo | Médio — single-user, outra pessoa exige outra assinatura |
| **Ultra for Business** | R$ 520-1.560/usuário + Workspace | **Alto — multiplica por cada usuário adicional, além de exigir migração do Workspace** |

Em todos os cenários comparados, a **API continua sendo a opção mais eficiente** — por preço, por escalabilidade e por menor fricção operacional (não exige mudança no Workspace da empresa).

### ChatGPT Business — geração de imagens e uso geral da equipe

Duas opções foram avaliadas para a geração de imagens:

| Opção | Custo mensal | Vantagem |
| --- | --- | --- |
| **ChatGPT Business** (Codex + GPT) | R$ 220/mês (2 assentos) | Cobre dois usos pelo mesmo preço: geração de imagens **e** uso diário de IA pela equipe para roteiros, drafts e ideias |
| Magnific (plano Team ou 2 contas Premium+ separadas) | R$ 285 a R$ 570/mês | Qualidade de consistência de personagem já validada em uso interno; dedicado exclusivamente a imagem |

**Decisão recomendada: ChatGPT Business.** Mesmo preço resolve a geração de imagens **e** o uso diário de IA para esta frente de trabalho (roteiros, drafts, ideias). Se adotado, substitui a função do Claude Team especificamente nesta frente — o assento usado pode ser realocado, enquanto a Claude Team permanece ativa para os demais usos da empresa.

**Sobre o mínimo de 2 assentos do ChatGPT Business:** o plano exige **no mínimo 2 assentos** por conta (política da OpenAI). A distribuição proposta:

- **Assento 1 — equipe de conteúdo/social (migração a partir do Claude Team):** o preço por assento do ChatGPT Business Standard é **idêntico** ao do Claude Team Standard — ambos custam US$ 20/assento/mês (anual) ou US$ 25/mês (mensal), equivalente a \~R$ 100-130/mês. A pessoa migra de ferramenta sem custo adicional para a empresa.
- **Assento 2 — produção de vídeo (geração dos frames da personagem via Codex):** este é o **único assento realmente novo**, criado para operar o Codex na geração das imagens.

**Resultado:** o custo incremental real do ChatGPT Business para a empresa é equivalente a **1 assento** (\~R$ 100-130/mês), não 2 — o outro assento é apenas uma realocação do que já é pago hoje no Claude Team.

## 5. Tempo de produção

| Etapa | Duração |
| --- | --- |
| Definição de ideia e pauta | Programada no fim do mês anterior |
| Roteiro e rascunho de cenas | Aproximadamente 2 horas. |
| Geração de frames finais e vídeo | 1 a 2 dias |
| Narração, trilha e legenda | Mesma janela |
| Revisão do vídeo final | Algumas horas |
| Ajustes e refações | Aproximadamente 1 dia |
| Publicação | 10 minutos |

**Ciclo total: aproximadamente 4 dias de calendário por vídeo.** Cadência sustentável de 2 vídeos por semana, totalizando 6 a 8 vídeos por mês.

## 6. Custo por vídeo

Custo médio em IA para um vídeo novo completo em português, com fluxo estabilizado:

**R$ 110 a R$ 150 por vídeo**

Versão em inglês (re-dublagem + re-legendagem do vídeo em português): **+R$ 13 por vídeo**

### Comparativo de mercado

| Modelo de produção | Custo por vídeo |
| --- | --- |
| **Produção com IA (proposta atual)** | R$ 110 a R$ 150 |
| Produtora tradicional (vídeo animado equivalente) | R$ 2.000 a R$ 5.000 |

**Redução de custo estimada: entre 94% e 97%** em relação ao modelo tradicional.

## 7. Custo mensal projetado

Para 6 a 8 vídeos por mês, com versões em inglês inclusas:

| Item | Custo mensal |
| --- | --- |
| Veo 3 API — teto mensal sugerido (inclui margem para média de 4 alterações por vídeo) | R$ 1.100 |
| ChatGPT Business — 2 assentos | R$ 220 |
| **Subtotal (novas contratações)** | R$ 1.320 |
| (−) Economia pelo cancelamento de 1 assento do Claude Team | −R$ 100 a −R$ 130 |
| **Total líquido recorrente** | **\~R$ 1.190 a R$ 1.220/mês** |

*Observação: o Claude Team cobra por assento ativo no mês (\~R$ 100-130/mês por assento Standard). Ao adotar o ChatGPT Business, 1 assento do Claude utilizado especificamente para esta frente pode ser cancelado, gerando economia de aproximadamente R$ 100-130/mês. A assinatura da Claude Team permanece ativa para os demais usuários da empresa.*

**Custo médio real por vídeo entregue (API Veo + rateio do ChatGPT Business, descontada a economia do Claude): R$ 110 a R$ 150 por vídeo** (baseado no custo observado no piloto, já considerando média de 4 alterações por vídeo). O teto mensal de R$ 1.100 na API Veo absorve meses com mais alterações ou mais vídeos sem exigir nova aprovação.

## 8. Resultados iniciais e projeção

### Resultados já observados com o primeiro vídeo

Mesmo como piloto, o primeiro vídeo da série Márcia gerou impacto mensurável:

- **Alcance orgânico mensal:** o patamar histórico variava entre 100 e 311; no mês do lançamento passou para **403**
- **Leads via campanha paga vinculada ao vídeo:** **17 leads**
- **Custo por resultado (CPR):** **R$ 33,22**
- **Qualidade dos leads:** aproximadamente **3 leads grandes e qualificados** entre os 17 captados

### Projeção com a cadência proposta (6 a 8 vídeos/mês)

Com a produção recorrente proposta, as metas para os próximos 3 a 6 meses são:

- **Alcance orgânico mensal:** elevar o patamar para **600 a 1.200** (aproximadamente 2x a 4x o atual), aproveitando o efeito composto de conteúdo recorrente
- **Leads vinculados à frente de vídeos:** **60 a 100 leads/mês**, mantendo ou reduzindo o CPR atual (R$ 33,22)
- **Leads qualificados:** manter a proporção observada no piloto (\~18%), com meta de **12 a 20 leads grandes por mês**

## 9. Solicitação

Solicitamos aprovação para contratar e habilitar:

1. **Veo 3 API (Google)** — conta Google corporativa com cartão da empresa, limite mensal de R$ 1.100.
2. **ChatGPT Business** — 2 assentos, R$ 220/mês.

**Total líquido recorrente (teto): aproximadamente R$ 1.190 a R$ 1.300****/mês** (considerando o cancelamento de 1 assento do Claude Team coberto pelo ChatGPT Business, e margem para média de 4 alterações por vídeo).

Com as ferramentas aprovadas, a entrega será de 6 a 8 vídeos por mês, em cadência de 2 por semana, com narração profissional, trilha e legenda, publicados no Instagram e LinkedIn.

## 10. Fluxo de implementação

Com a aprovação da proposta, as etapas de setup se organizam em 4 frentes, com prazo estimado de até **1 semana** entre aprovação e o primeiro vídeo produzido no novo fluxo.

### 10.1 Setup do Veo 3 API (Google Cloud)

A API do Veo 3 é acessada diretamente via Google Cloud, **sem necessidade de integração com ferramenta externa** adicional. A chave de API é usada no ambiente de produção já existente (Claude/Codex orquestrando o fluxo de geração).

**Etapas:**

- Verificar se a empresa já possui conta Google Cloud corporativa; criar se necessário
- Associar cartão corporativo à billing account do projeto
- Criar projeto Google Cloud dedicado à produção de vídeo
- Habilitar a Gemini API (que inclui Veo 3)
- Gerar chave de API
- **Configurar alerta de budget em R$ 1.100/mês** como trava automática (Google Cloud notifica antes de estourar)
- Disponibilizar a chave de API ao responsável pela geração dos vídeos

### 10.2 Contratação do ChatGPT Business

**Etapas:**

- Criar workspace ChatGPT Business corporativo (via openai.com/business)
- Contratar 2 assentos (preferencialmente no plano anual, \~20% mais barato que mensal)
- Associar cartão corporativo à cobrança
- Adicionar os 2 usuários designados (produção de conteúdo + produção de vídeo)
- Designar administrador do workspace para gestão de assentos e cobrança

### 10.3 Realocação do assento no Claude Team

**Etapas:**

- Aguardar o ChatGPT Business estar operacional e o fluxo migrado
- Identificar o assento específico a cancelar (o utilizado para esta frente)
- Acionar o administrador do Claude Team para remoção do assento no próximo ciclo de cobrança
- Confirmar que os demais assentos seguem ativos para o restante da empresa

### 10.4 Validação e início da produção recorrente

**Etapas:**

- Produzir o primeiro vídeo da próxima leva já dentro do novo fluxo (API Veo + Codex via ChatGPT Business)
- Validar custo real, tempo total de ciclo e qualidade final
- Ajustar parâmetros se necessário (mix Fast/Standard, quantidade de takes, revisões)
- Iniciar a cadência recorrente de 2 vídeos por semana

### Resumo de dependências

As frentes **10.1** (Veo API) e **10.2** (ChatGPT Business) podem rodar em **paralelo** — não há dependência entre elas. A frente **10.3** (realocação Claude) depende de 10.2 estar funcional. A frente **10.4** (validação) depende de 10.1 e 10.2 estarem operacionais.
