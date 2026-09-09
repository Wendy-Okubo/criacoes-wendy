# criacoes-wendy

Espaço de testes.

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

## Política de PRs do Claude Code

Para PRs abertas pelo Claude Code neste repositório: mesclar automaticamente, sem pedir
confirmação, quando a PR estiver "limpa" — ou seja, sem comentários de revisão pendentes e,
se houver CI configurada, com todas as checagens verdes. PRs com conflito de merge, CI
vermelha, ou comentário de revisão em aberto não devem ser mescladas automaticamente.
