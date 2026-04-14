

## Review Geral: Travessoes e Inconsistencias

### 1. Todos os travessoes (—) encontrados e substituicoes

| Arquivo | Texto atual | Substituicao |
|---|---|---|
| `ExecutiveSummary.tsx:23` | "pellets **—** suitable for fiber" | "pellets, suitable for fiber" |
| `WhyTex2Tex.tsx:20` | "(LCA) **—** our Tex2Tex®" | "(LCA). Our Tex2Tex®" |
| `WhyTex2Tex.tsx:24` | "Loop **—** 100% from Textile Waste" (titulo) | "Loop: 100% from Textile Waste" |
| `WhyTex2Tex.tsx:25` | "waste **—** true circular" | "waste, enabling true circular" |
| `TheProblem.tsx:8` | "annually **—** most of it" | "annually, and most of it" |
| `TheProblem.tsx:9` | "polyester **—** the single" | "polyester, the single" |
| `TheProblem.tsx:10` | "petroleum **—** a massive" | "petroleum, resulting in a massive" |
| `TheProblem.tsx:22` | "solution **—** until now." | "solution. Until now." |
| `TheProblem.tsx:54` | "solution</strong> **—** not more" | "solution</strong>, not more" |
| `WhatIsTex2Tex.tsx:11` | "contaminants **—** producing" | "contaminants, producing" |
| `MarketOpportunity.tsx:76` | "undersupplied **—** brands" | "undersupplied. Brands" |
| `HeroCover.tsx:140` | "Confidential **—** Q2 2026" | "Confidential · Q2 2026" |

### 2. Inconsistencias visuais encontradas

**A. Font size dos labels de secao (inconsistente)**
- `WhyTex2Tex`, `TheProblem`, `ExecutiveSummary` usam `text-xs` para o label superior
- `MarketOpportunity`, `InvestmentOverview`, `WhatIsTex2Tex` usam `text-sm`
- **Fix:** Padronizar todos para `text-xs` (mais elegante e consistente)

**B. StickyNav sem "Executive Summary"**
- A nav lista Why Tex2Tex, The Problem, Technology, Market, Investment
- Falta o link para Executive Summary
- **Fix:** Adicionar `{ id: "executive-summary", label: "Summary" }` na posicao correta (apos why-tex2tex)

**C. Link "Explore the deck" no Hero aponta para `#executive-summary`**
- A primeira secao agora e `#why-tex2tex`
- **Fix:** Mudar href para `#why-tex2tex`

### 3. Arquivos alterados

- `src/components/deck/ExecutiveSummary.tsx` — 1 travessao
- `src/components/deck/WhyTex2Tex.tsx` — 3 travessoes
- `src/components/deck/TheProblem.tsx` — 5 travessoes
- `src/components/deck/WhatIsTex2Tex.tsx` — 1 travessao
- `src/components/deck/MarketOpportunity.tsx` — 1 travessao
- `src/components/deck/HeroCover.tsx` — 1 travessao + fix link
- `src/components/deck/StickyNav.tsx` — adicionar Executive Summary

