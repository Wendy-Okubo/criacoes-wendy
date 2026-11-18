---
name: wabfy-visibilidade-ia
description: "Visibilidade em IA da Wabfy. Use para medir se a Wabfy aparece quando gestores de RH perguntam ao ChatGPT, Gemini, modo IA do Google, Claude e Copilot sobre plataformas e práticas de PDI, T&D, sucessão, avaliação, mentoria e seleção, registrar quem aparece no lugar e propor conteúdo para ganhar citação; roda agendado na primeira segunda do mês. Gatilhos: \"visibilidade em IA\", \"a Wabfy aparece no ChatGPT\", \"GEO\", \"AEO\"."
---

# Visibilidade em IA

Carregue antes a skill `wabfy-cerebro`.

## Perguntas fixas
Mantenha uma lista fixa de 20 perguntas no documento `claude/visibilidade-ia/perguntas.md` (crie na primeira execução, com a Wendy podendo editar). Metade de produto ("qual plataforma de X") e metade de prática de RH ("como fazer X"). Exemplos: "melhor plataforma de PDI para empresa grande", "software de plano de sucessão", "como estruturar trilhas de T&D", "plataforma de avaliação 360", "como integrar PDI e avaliação", "ferramenta de mentoria corporativa", "alternativas à Gupy para seleção interna", e perguntas sem marca sobre as dores dos módulos. Não troque as perguntas entre meses (comparabilidade); acrescente no fim se precisar.

## Rodada
Para cada pergunta, em cada IA disponível pelo Chrome (ChatGPT, Gemini, modo IA da busca do Google, Claude e Copilot), numa conversa nova e sem login de conta da empresa quando possível: registre se a Wabfy é citada, em que posição, como é descrita, quais marcas aparecem e quais fontes a IA cita. Só leitura; não aceite termos nem faça cadastro. IA indisponível vira lacuna.

## Entrega
Taxa de citação por IA e no total, comparação com o mês anterior, concorrentes mais citados e fontes que as IAs mais usam. Recomendações só de dois tipos (sem pautas de post):
- Ajustes nas páginas do site: qual página, qual pergunta ela não responde e o que mudar (FAQ, trecho de texto que a IA consiga citar, dados estruturados). Grave também como item para o Revisor de páginas.
- Onde a Wabfy precisa aparecer: listas, diretórios, comparadores e sites que as IAs citam, com o link e o que seria preciso para entrar.

## Gravar
Projeto: `claude/visibilidade-ia/AAAA-MM_medicao.md`. Painel: registro `visibilidade-ia-{AAAA-MM-DD-HHMM}`.
