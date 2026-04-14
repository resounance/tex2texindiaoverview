

## Plano: Site Interativo Tex2Tex® — Investor Deck

Replicar a estética e estrutura do projeto "India Pelletization Hub" neste novo projeto, com as seções mostradas nas imagens e os ajustes solicitados.

### Design System
- Migrar os tokens de cor e classes utilitárias do projeto de referência (deck-card, deck-card-glass, deck-stat, etc.) para o `styles.css` do novo projeto (adaptado para Tailwind v4)
- Manter a paleta: primary preto, secondary roxo/mauve (280 14% 56%), fundo branco limpo
- Usar fonte do sistema (sem Nexa, que requer arquivos OTF licenciados) — Inter para corpo, font-mono para stats

### Componentes Reutilizáveis
Criar em `src/components/deck/`:
- **DeckSection** — wrapper de seção com animação de entrada (framer-motion)
- **AnimatedCounter** — contadores numéricos animados ao entrar em view
- **StaggerChildren** — container e item com animação staggered

### Seções (todas na página index como scrolling deck)

1. **Hero / Executive Summary** — Logo Tex2Tex®, título "India Greenfield Polyester Textile-to-Textile Recycling Facility", card com descrição, grid Location/Capacity/Commissioning/Certifications, badges TMR™ Output

2. **Why Tex2Tex® (novo)** — Formato Key Activities (grid 2×2 com ícones), 4 vantagens:
   - 🏭 30,000T/yr large scale production
   - 💰 Cost competitive with commodity polyester
   - 🌱 Lowest impact polyester in the marketplace (3rd party LCA)
   - ♻️ Closing the loop — 100% from textile waste (no virgin or bottle flake inputs)

3. **The Problem** — "India's Textile Waste Crisis" com 4 stat cards (8M tons, 41%, 86%, 10M ton) + callout "The industry needs a true textile-to-textile solution"

4. **What is Tex2Tex®?** — Processo TMR™ em 7 etapas interativas (Collection → Sorting → Shredding → Melting → Gen II TMR™ → Filtration → Pelletization), com auto-play e clique para expandir detalhes

5. **Polyester Market Opportunity** — 4 stat cards (86%, 14%, 99%, 10M), gráfico de barras Demand vs Supply, market size $153B / $137.7B

6. **Key Activities** — Grid 2×2: Technology, Manufacturing, Marketing, Greenfield Development

7. **Investment Overview** — 5 stat cards ($10M, $7.3M, $15M, $3.5M, 20%), Capital Allocation card, Terms card com **destaque em negrito: "Tranche 1 is already finished with a global workwear brand."**

### Navegação
- **StickyNav** — barra superior com glassmorphism que aparece ao scrollar, links para as seções principais, barra de progresso animada

### Dependências Necessárias
- `framer-motion` — animações e transições

### Conteúdo
- Todos os textos hardcoded em inglês (sem sistema i18n nesta versão)
- Dados financeiros e estatísticos extraídos diretamente das imagens de referência

