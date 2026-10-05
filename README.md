# criacoes-wendy

Espaço de testes: skills próprias da Refatorando, plugins de terceiros vendorizados e documentação
das decisões de marca. Instruções para o Claude Code ficam em `CLAUDE.md`.

## Mapa

```
CLAUDE.md                     instruções do projeto (lidas pelo Claude Code)
docs/
  revisao-marca-2026-10.md    o que mudou da v1 para a v2 das skills de marca
.claude/
  settings.json               marketplaces e plugins habilitados
  skills/                     skills próprias (uma pasta por skill, com SKILL.md)
    voz-refatorando/            fonte de verdade de voz/tom + laboratório de testes
    identidade-visual-refatorando/
    briefings-social-refatorando/
    roteiros-refatorando/
    content-format-rotator/
    discovery-follow-up/
  plugins/                    cópias de repositórios de terceiros (não editar à mão)
    great-web-copy/  marketingskills/  designer-skills/  knowledge-work-plugins/
.mcp.json                     servidor MCP do algrow (usa ALGROW_API_KEY)
```

## Duplicações que são de propósito

- `briefings-social-refatorando/references/voz-e-marca.md` e o trecho "quem é a Refatorando" de
  `roteiros-refatorando/SKILL.md` repetem um resumo da `voz-refatorando`. Ficam porque cada skill é
  enviada separadamente para a conta do claude.ai e precisa funcionar sozinha. Se divergirem,
  vale a `voz-refatorando`; ao mudar a voz, atualize os resumos também.
- Os plugins se sobrepõem em alguns temas (copy e marketing aparecem em `great-web-copy`,
  `marketingskills` e `knowledge-work-plugins/marketing`). São coleções de autores diferentes e
  ficam inteiras para facilitar atualização a partir do original.
