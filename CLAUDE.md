# criacoes-wendy

Espaço de testes.

## Skills do projeto

Skills próprias ficam em `.claude/skills/<nome>/SKILL.md` (carregam automaticamente no Claude Code).

- `discovery-follow-up` — transforma notas/transcrições de conversas comerciais em registro
  estruturado da oportunidade e prepara follow-up (rascunho e plano com cenários); busca em
  conectores de reunião/CRM só para leitura. Prompts de teste em `evals/prompts-de-teste.md`.

## Plugins instalados

- `great-web-copy` — copywriting de páginas web (frameworks PAS, AIDA, BAB, StoryBrand).
- `marketingskills` — 50 skills de marketing (CRO, copywriting, cold email, SEO/AI SEO, ads,
  retenção, pricing, RevOps etc.), vendorizadas em `.claude/plugins/marketingskills/`.
- `designer-skills` — coleção "design practice" de [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)
  (111 skills e 34 comandos em 9 plugins: design-research, design-systems, ux-strategy,
  ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit,
  visual-critique), vendorizada em `.claude/plugins/designer-skills/`. As outras quatro
  coleções do mesmo marketplace (AI product design, UX program management, design
  leadership, inclusive design) vivem em repositórios separados e não foram baixadas.
- `knowledge-work-plugins` — marketplace oficial da Anthropic ([anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)),
  vendorizado em `.claude/plugins/knowledge-work-plugins/` (commit `da38ec1`). Os 22 plugins
  com código no próprio repositório estão habilitados: productivity, enterprise-search,
  cowork-plugin-management, sales, finance, data, legal, marketing, customer-support,
  product-management, bio-research, engineering, human-resources, design, operations,
  small-business, pdf-viewer e os partner-built slack-by-salesforce, apollo, common-room,
  brand-voice e zoom-plugin. Os outros ~99 plugins do marketplace apontam para repositórios
  externos (git-subdir) e não foram baixados nem habilitados — dá para ativar um a um em
  `enabledPlugins` com `<nome>@knowledge-work-plugins`. Vários plugins trazem conectores MCP
  (HTTP/OAuth: Slack, Notion, HubSpot, Figma etc.) que só funcionam depois de autenticados.

## Política de PRs do Claude Code

Para PRs abertas pelo Claude Code neste repositório: mesclar automaticamente, sem pedir
confirmação, quando a PR estiver "limpa" — ou seja, sem comentários de revisão pendentes e,
se houver CI configurada, com todas as checagens verdes. PRs com conflito de merge, CI
vermelha, ou comentário de revisão em aberto não devem ser mescladas automaticamente.
