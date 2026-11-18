---
name: wabfy-radar-cultura
description: "Radar de cultura e mundo da Wabfy. Use para descobrir o que está acontecendo fora do RH (cultura pop, programas de TV, séries, filmes, música, futebol, celebridades, perfis da internet, memes, áudios e formatos em alta, artes, design, publicidade e ações de marca) que possa virar paródia, releitura ou gancho; roda agendado segunda e quinta e também é chamado pelo Diretor criativo. Gatilhos: \"o que está em alta\", \"trends\", \"memes\", \"o que dá para parodiar\", \"referências culturais\"."
---

# Radar de cultura

Carregue antes a skill `wabfy-cerebro`. Objetivo: repertório fresco para a Wabfy fazer o RH parar o scroll, sem repetir paródias já usadas.

## Passo 1. Contexto
Leia os últimos 3 registros `radar-cultura` e `diretor-criativo` no painel e o histórico de paródias na memória (ex.: "Troquei RH"), para não sugerir de novo o que já foi usado.

## Passo 2. Caça em paralelo (ferramenta Agent)
- `wabfy-agentes:cacador-cultura-pop`: séries, filmes, novelas, reality shows, programas de TV, música, futebol, celebridades, assuntos do momento no Brasil.
- `wabfy-agentes:cacador-internet`: memes, áudios, formatos e trends em alta no Instagram, LinkedIn, TikTok, X e YouTube, perfis da internet que estão crescendo e o formato que usam.
- `wabfy-agentes:cacador-artes-publicidade`: exposições, movimentos visuais, tipografia, ilustração, campanhas premiadas e ações de marca que viralizaram (fora do RH).
Se os tipos não existirem, faça as três buscas você mesmo.

## Passo 3. Filtro
Fique com 6 a 10 achados. Corte o que: toca política, tragédia, religião, fofoca de celebridade real (briga, separação, polêmica pessoal) ou rivalidade de futebol (futebol pode, sem tomar lado de time), já envelheceu ou já foi usado pela Wabfy.
Pessoa real ou obra conhecida (série, filme, programa, marca): não corte. Marque o risco em uma linha (uso de nome, imagem, bordão, logo) para a Wendy decidir caso a caso.

## Passo 4. Entrega
Só o achado, sem ideia de post (quem transforma em ideia é o Diretor criativo). Para cada um: o que é (1 a 2 frases), em que rede ou meio está, link e data, por que está em alta (sinal concreto: volume, menções, alcance, ranking), como funciona o formato (quando for trend de formato), validade (até quando vale usar) e risco (quando houver). Marque 2 como "mais quentes da semana" (prioridade alta) pela combinação de alta e validade curta.

## Passo 5. Gravar
Painel: registro `radar-cultura-{AAAA-MM-DD-HHMM}`, um item por achado com `validade`.
