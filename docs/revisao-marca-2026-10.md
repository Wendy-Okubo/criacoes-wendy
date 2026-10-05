# Revisão de marca — outubro de 2026

**O que foi revisto:** as skills `voz-refatorando` (brand book v1.2), `briefings-social-refatorando`, `roteiros-refatorando`, `content-format-rotator`, o design system "Refatorando by Belago" e o "Guia visual — Landing Page Refatorando".

**Premissa nova:** a Refatorando testa identidade visual, linguagem, modo de comunicação, formato e ideia. A v1 tinha muita regra escrita como proibição, e boa parte nasceu de cautela ("e se der problema?") mais do que de resultado medido. A v2 troca "pode ou não pode" por **"o que a gente aprende com isso?"**.

---

## A estrutura nova: base, padrão, teste

| Camada | O que é | Muda quando |
|---|---|---|
| **Base** | O pouco que faz a Refatorando ser a Refatorando: posicionamento, B2C, "parte do trabalho e chega na tecnologia", verdade (não inventar), logo oficial, legibilidade, áreas seguras do formato | Decisão de marca |
| **Padrão** | O ponto de partida que funciona hoje, cada um com o porquê | Um teste ganhar de forma consistente |
| **Teste** | Qualquer quebra de padrão declarada com hipótese + métrica | Sempre — é o motor |

Toda peça (briefing, roteiro, formato) ganhou um campo **Teste**. O registro do que funcionou fica em `voz-refatorando/references/laboratorio.md`, que já vem com 13 testes em aberto sugeridos.

---

## O que ficou como estava (ainda faz sentido)

- Posicionamento, pilares Formar/Informar, público.
- "Parte do trabalho, chega na tecnologia".
- Teste da voz alta, especificidade, ritmo de frases variado.
- Regra de repetição ("travar" e companhia).
- Padronização de escrita (19h00, R$ 1.200, IA sem ponto etc.).
- Ritmo e divisão de telas de carrossel; estrutura de retenção de vídeo; cenário e gesto.
- Regra de gravar todas as aberturas e fechamentos (já era uma regra de teste).
- Não inventar dado, depoimento, resultado. **Reenquadrado:** não é medo jurídico, é credibilidade de quem quer ser referência em informação sobre IA. Ficção liberada quando aparece como ficção.

## O que deixou de ser proibição e virou padrão testável

| Antes (v1) | Agora (v2) |
|---|---|
| Tom construtivo como "regra fixa"; acusatório só se pedido explicitamente | Construtivo é o padrão; acusatório, confronto, ironia ácida, humor absurdo liberados como teste |
| Tabela de verbos de recusa vs. lacuna como filtro | Ferramenta de ajuste fino, não filtro |
| "Medo não é gancho" | Padrão; medo nomeado é teste aberto (hipótese: retém nos 3s, perde em salvamento) |
| "Expressões banidas" | "Clichês gastos": evitados por padrão, parodiar à vontade |
| Convite condicional proibido | Fora do padrão; hipótese de que converte menos, a medir |
| A marca não tem porta-voz e não fala "eu" | Padrão hoje; persona, mascote ou pessoa do time assinando é teste aberto |
| Previsões sobre IA "nunca como afirmação solta" | Soltas soam iguais a todo mundo; com argumento ou como provocação declarada, entram |
| Caixa alta só em sigla | Padrão; caixa alta como recurso visual é teste |
| Comparar concorrente pelo nome: não pode | Teste, sem afirmar o que não é verdade sobre o outro |
| "Terminar no medo" como vício grave de roteiro | Padrão de tom; fechamento de ameaça pode ser variante gravada |
| Nunca misturar os modos Notícia e Editorial | Padrão; peça híbrida é teste (o modo Editorial agora se chama Conceitual) |
| "Fonte única Ubuntu, não usar outra família" | Poppins em tudo (decidido em 05/10/2026) |
| Fotografia real sempre, nunca ilustração | Padrão; ilustração, 3D e imagem de IA assumida são teste. Só imagem usada como **prova** precisa ser real |
| "Seção 7 — área de risco jurídico" | "Verdade": mesmo conteúdo, motivo diferente, menos itens |

## O que foi adicionado

- **Laboratório** (`voz-refatorando/references/laboratorio.md`): como montar teste, testes em aberto, tabela de registro, e a lista de decisões da v1 que nasceram de correção e nunca foram medidas.
- **Tons experimentais** nos roteiros: ácido, absurdo, confessional, urgência, seco, meme/trend.
- **Coluna "teste em aberto"** na tabela de canais do brand book.
- **Skill nova `identidade-visual-refatorando`**: não havia skill de visual — as regras estavam em dois artifacts.

---

## Decisão tomada: Poppins e os modelos Notícia e Conceitual (05/10/2026)

As duas referências visuais salvas não batiam (o design system dizia Ubuntu e `#2961EB`; o guia da LP dizia Poppins e `#3E2EFF`). A decisão:

- **Poppins em tudo**, todos os modelos e canais.
- Cores e modelos que já estão em uso nas peças viram padrão, com valores medidos nos arquivos: **azul elétrico `#0050FF`** (modelo Notícia) e **violeta `#4A28FF`** (modelo Conceitual), mais preto, papel `#F0F0F0`, off-white `#F0ECE8`, limão nas setas e menta como cor de objeto.
- O modo "Editorial" passa a se chamar **Conceitual**. A anatomia dos dois modelos está em `identidade-visual-refatorando/references/modelos.md`, com as peças de referência em `assets/exemplos/`.

O design system "Refatorando by Belago" foi atualizado para a v2 (Poppins, tokens com os temas Conceitual e Notícia, peças de exemplo), e o "Guia visual — Landing Page" foi alinhado à mesma paleta (violeta `#4A28FF` no lugar de `#3E2EFF`, azul elétrico `#0050FF`, verde-limão `#B4FA00`).

## Para ativar

As skills da conta no claude.ai são cópias separadas destas. Para valerem lá, reenvie as cinco pastas de `.claude/skills/` (as quatro revisadas e a `identidade-visual-refatorando`, que é nova).
