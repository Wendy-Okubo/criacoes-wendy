# 07 · Histórico das conversas do projeto Wabfy (out–nov 2026)

Decisões, padrões e referências tirados do compilado das 33 conversas do projeto Claude "Wabfy" (gerado em 19/11/2026). Só entra aqui o que não está em `00-memoria.md`. Se algo aqui contradisser a memória, vale a memória (é mais recente).

## Marca e visual
- Tipografia oficial: **Plus Jakarta Sans**, única fonte (primária e secundária). Pesos Light, Regular e Bold; ExtraBold só para headlines de alto impacto. Gratuita no Google Fonts.
- Cores usadas nas peças: #F1EFFF (lilás claro), #6147EC (roxo), #25356E (roxo escuro), #2961EB (azul).
- Sem hashtag dentro da arte.
- Carrosséis de release usam prints reais da plataforma, não ícones.
- Atenção: em 5–9/nov a campanha ainda citava "glass" no estilo visual. Isso caiu depois: **sem glassmorphism** (memória).

## Campanha "2027: está escrito nos dados" (nov–dez 2026)
- Conceito: humor de horóscopo como contraponto a decidir por feeling. **Nunca zombar da astrologia em si**, só do hábito do RH de decidir sem dados.
- Personagens e peças: Márcia do RH (gestora que decide promoção e demissão por feeling com dados espalhados), Madama Wab, Horóscopo do RH 2027 (12 signos com previsões astrológicas reais de 2027 viradas em cenas de RH; a primeira versão foi rejeitada por estar ligada demais ao produto).
- Taglines aprovadas: "Em 2027 decida com base nos dados, não nos astros!" · Criativo 1:1: "Menos post-it, mais dados. Conheça a Wabfy."
- Medição: alcance, engajamento e "hand-raises" (DMs e pedidos de contato). **Vendas ficam fora como métrica** da campanha, porque não dá para garantir atribuição. Monitoramento semanal.
- Quem vem pelo quiz da campanha é abordado por signo + momento do RH: dados espalhados, em organização, conectados em parte ou escritos nos dados.
- Buracos apontados na apresentação para a Duda (ainda a resolver): entregáveis para o comercial, scripts de resposta, ICP visual, metas numéricas, orçamento de mídia, apresentação da Madama Wab, detalhe da LP da campanha e risco de leitura leviana.
- Referências usadas para defender a campanha: Sólides + Popó, Cimed + Toguro, Livelo/Hope com Márcia Sensitiva, Hurb, Mailchimp.
- Plano de execução: 85 tarefas no ClickUp.

## Revisão de páginas (padrões que se repetiram)
- Marcação no HTML único: contorno verde tracejado = alterado; azul sólido = novo; azul grosso = dobra nova; linha rosa marca cada dobra; botão "Ver versão limpa". Imagens com selo MANTÉM, SAI-ENTRA ou PRINT NOVO.
- H3 começa pelo ganho, não pelo mecanismo.
- Enxugar bullets de recursos (referências: BSC 4, Sucessão 5, Seleções 5).
- Erros recorrentes a caçar: nome de pilar errado (Scalle, ENVOLVER-SE, Escala → **ESCALAR**; Desenvolvimento → **Desenvolver**), "a BSC" → **"o BSC"**, nome de módulo inconsistente (Process Design, Projeto de Processos → **Desenho de Processos**), tradução esquisita ("manual de estratégias" → playbook), balão e mensagem do WhatsApp fora do padrão.
- Bug conhecido no site: contadores do case Caixa aparecem como "0 / 0% / 0 min / 0 dias" na página publicada.
- Páginas já revisadas: Avaliação 360°, Plano de Cargos, Desenho de Processos, Cursos e Turmas, Trilhas, BSC, pilar Engajar, pilar Escalar, Home, Sucessão, Seleções, Colaboradores (wireframe), Assistente e Comunidades.
- Atenção: o wireframe de Colaboradores (20/out) ainda traz o case Caixa com "-80% / 30 min / 3 dias". Esses números estão bloqueados e o case não vai em página de módulo. Não reaproveitar sem corrigir.
- A validar com Produto: "Dimensionamento por demanda" (Sucessão), "implantação acompanhada" e suporte de importação, configuração e treinamento (vídeo de migração do Moodle).

## Vídeo
- Pipeline com prazos: pauta no fim do mês anterior; roteiro e cenas ~2 h; frames e vídeo 1–2 dias; narração, trilha e legenda na mesma janela; revisão algumas horas; ajustes ~1 dia; publicação 10 min. **Até 4 refações por vídeo.**
- Estilo de referência para a Márcia: animação 2D (estilo Rafaella Tuma).
- Vídeo da migração do Moodle: problema → objeção → solução; cenas frias para a dor, tom quente da marca depois. Tagline: "Migre do impasse para o desenvolvimento. Migre para a Wabfy."
- Voz de personagem no ElevenLabs: usar Voice Design descrevendo a voz em texto (idade, gênero, sotaque, tom, ritmo, qualidade), sem clonagem.

## Visibilidade em IA (diagnóstico de 4/nov)
- Busca por "Wabfy" nas IAs confunde com WABF (fundo de investimento).
- Sem perfil em B2B Stack, G2 ou Capterra.
- robots.txt bloqueia crawlers de IA (GPTBot, ClaudeBot, Google-Extended, CCBot) e tem "ai-train=no" (provável padrão do Cloudflare). Não tem llms.txt.
- Plano em 6 frentes: decidir a política de bloqueio; ser citado por terceiros (G2, listas "best tools"); imprensa de RH (Melhor RH, ABRH, Exame); descrição oficial consistente; conteúdo que responde perguntas comuns; básico técnico (Bing Webmaster, llms.txt, transcrições); medição mensal de ~20 perguntas.

## Operação
- Proposta de reorganizar o ClickUp de Marketing e Growth **por squad**: pastas Comercial, Growth, Produção, Projetos integrados e Documentação; campo "Frente" (Conteúdo, LP, Performance, Research) para filtrar por tipo; Workload view e dashboard por squad. Arquivar as 6 pastas antigas, não apagar.
- Tarefas "feito" no ClickUp que não foram arquivadas continuam aparecendo nos filtros.
- Três frentes de IA enviadas à Maria Eduarda: outputs dos agentes viram apps com histórico; parar de repetir contexto entre ferramentas (memória em .md, conectores); trocar leitura de tela por integração (Meta Business, RD Station).

## Conversas que não puderam ser resumidas
Cinco conversas de outubro não foram lidas pela busca. Se forem importantes, abra o link e copie o essencial:
- Wabfy revisão texto LP (20/out): https://claude.ai/chat/ad6f53ef-e0b7-8b03-a286-ca039900fc44
- Wabfy biweekly updates email (27/out): https://claude.ai/chat/06bb5e1e-31dd-8934-8e1a-3f7bfc360b9a
- Wabfy Estruturar ciclo clarity (23/out): https://claude.ai/chat/73a2d707-33b8-86d4-b020-f619b58a3560
- Wabfy Carreiras email recovery strategy (20/out): https://claude.ai/chat/a82442ca-1485-88b6-b1b7-bac27e2d0613
- Estratégia de conversão Wabfy (20/out): https://claude.ai/chat/8e942d61-5f6a-86d1-92ac-3d67bdcf1c35
