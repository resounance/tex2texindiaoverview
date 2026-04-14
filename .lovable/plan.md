

## Revisão de Texto + Vídeo no Hero

### Revisão de texto — problemas encontrados

Revisei todos os componentes. O conteúdo está correto e consistente com os dados do deck original. Nenhum erro factual ou gramatical encontrado nos textos em inglês. Tudo faz sentido.

### Alteração necessária: Adicionar vídeo Vimeo ao Hero

Substituir o fundo gradiente estático do `HeroCover.tsx` pelo vídeo Vimeo usado no projeto de referência.

**Arquivo:** `src/components/deck/HeroCover.tsx`

**O que muda:**
1. Importar `useIsMobile` de `@/hooks/use-mobile`
2. Substituir o bloco `{/* Gradient background */}` por um `<iframe>` Vimeo com a URL:
   ```
   https://player.vimeo.com/video/1176418295?autoplay=1&loop=1&muted=1&badge=0&autopause=0&title=0&byline=0&portrait=0&controls=0&player_id=0&app_id=58479
   ```
3. Usar a mesma técnica de responsividade do projeto de referência (dimensões diferentes para mobile vs desktop via `useIsMobile`)
4. Aumentar a opacidade do overlay escuro de `bg-black/30` para `bg-black/50` para garantir legibilidade do texto sobre o vídeo

Nenhuma outra alteração de texto necessária — todos os conteúdos estão corretos.

