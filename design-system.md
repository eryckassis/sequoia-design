# Sequoia Design System

> Fonte local de verdade para implementar a página editorial importada no Figma. Antes de alterar layout, tipografia, cor, grid ou movimento, consulte este arquivo.

## 1. Escopo e nível de confiança

Este documento descreve o frame `1440w light` do arquivo Figma `Untitled`, nó inicial `7:85`, e organiza o resultado para Next.js, React, TypeScript e Tailwind CSS v4.

Fontes consultadas:

1. **Figma no navegador:** estrutura de camadas, dimensões do frame, auto layout, estilos nomeados e guia de layout.
2. **Página-fonte importada:** `sequoiacap.com/article/services-the-new-software`, medida no breakpoint de 1440 px para fechar valores que o canvas não expõe com precisão.
3. **Código local:** estado atual do projeto criado com Next.js.

Convenções de confiança:

- **Verificado no Figma:** valor exposto diretamente no painel do arquivo.
- **Medido na fonte:** valor computado na página que originou a importação.
- **Recomendação:** decisão de implementação ainda não representada por um frame específico.

Não transformar uma recomendação em valor definitivo do Figma sem atualizar esta seção.

## 2. Estado atual do projeto

O projeto local está em `sequoia-design/` e, no momento deste levantamento, contém:

- Next.js `16.3.7`;
- React e React DOM `19.2.8`;
- TypeScript `5`;
- Tailwind CSS `4` com `@tailwindcss/postcss`;
- ESLint `9` com `eslint-config-next`;
- página, metadata, tipografia Geist e tema claro/escuro ainda vindos do template do `create-next-app`.

Pendências observadas no `package.json`:

- nenhuma dependência de Framer Motion/Motion instalada;
- Prettier e `prettier-plugin-tailwindcss` não instalados;
- scripts de `format` e `format:check` ausentes.

Essas pendências são apenas um diagnóstico. Este documento não autoriza instalação nem alteração de dependências.

## 3. Direção visual

A interface é editorial, institucional e contida. A hierarquia vem principalmente de:

- fundo marfim quente;
- títulos sans-serif grandes e leves;
- texto longo em serifada;
- labels condensados em caixa alta;
- conteúdo central estreito dentro de uma tela ampla;
- imagens sem cantos arredondados ou sombras decorativas;
- rodapé verde sólido;
- espaçamento vertical amplo e poucas regras visuais.

Evitar gradientes, glassmorphism, sombras genéricas, bordas arredondadas sem referência e excesso de microinterações.

## 4. Frame e grid

### 4.1 Frame principal

| Propriedade | Valor | Origem |
| --- | ---: | --- |
| Nome | `1440w light` | Figma |
| Largura | `1440 px` | Figma |
| Altura | `8042.06 px` | Figma |
| Fluxo | Auto layout vertical | Figma |
| Gap entre filhos do frame | `0 px` | Figma |
| Raio | `0 px` | Figma |
| Fundo | marfim `#FBF7F0` | Figma + fonte |

A altura é consequência do conteúdo. Na implementação, não fixar `8042.06px`.

### 4.2 Guia de layout do Figma

Configuração verificada diretamente no painel:

- tipo: colunas;
- comportamento: `Stretch`;
- contagem: `12`;
- gutter: `20 px`;
- offset: `0 px`;
- cor do guia: vermelho a `10%` de opacidade.

O guia cobre o frame. Ele não equivale ao padding lateral da página.

### 4.3 Container da página

Medido na fonte:

- padding lateral desktop: `48 px`;
- padding lateral do hero no mobile: `24 px`;
- largura máxima dos wrappers largos: `1920 px`;
- coluna editorial: `620 px`;
- wrapper da coluna editorial: `668 px`, composto por `620 px` de conteúdo e `24 px` de padding de cada lado;
- largura máxima do título: `850 px`.

Regra de implementação:

```text
Frame full-bleed
└── PageContainer: 24 px no mobile; 48 px a partir de tablet
    ├── conteúdo largo / grid
    └── EditorialColumn: max-width 620 px, centralizada
```

Não usar um único `max-w-*` para toda a página. Header, hero, artigo, cards e footer têm limites diferentes.

### 4.4 Grid responsivo recomendado

Somente o grid desktop de 12 colunas foi verificado no Figma. Para os demais breakpoints, usar esta regra de implementação até existirem frames responsivos:

| Faixa | Colunas | Margem lateral | Gutter | Status |
| --- | ---: | ---: | ---: | --- |
| `< 768 px` | 4 | `24 px` | `12 px` | recomendação |
| `768–1023 px` | 8 | `48 px` | `16 px` | recomendação |
| `≥ 1024 px` | 12 | `48 px` | `20 px` | desktop confirmado parcialmente |

O corpo do artigo mantém margens visuais maiores no mobile: sua coluna medida começa a `48 px` da borda, mesmo quando o hero usa `24 px`.

## 5. Breakpoints

A página-fonte usa mudanças relevantes em `768`, `1024`, `1200` e `1440 px`.

Nomes recomendados para não sobrescrever silenciosamente os breakpoints padrão do Tailwind:

```css
@theme {
  --breakpoint-tablet: 48rem;   /* 768 px */
  --breakpoint-laptop: 64rem;   /* 1024 px */
  --breakpoint-desktop: 75rem;  /* 1200 px */
  --breakpoint-wide: 90rem;     /* 1440 px */
}
```

Comportamentos medidos:

- título: `40/44` no mobile, `56/61.6` no tablet, `64/70.4` em laptop/desktop e `80/88` no wide;
- artigo: `16/22.4` até 1024 px e `20/28` a partir de 1200 px;
- cards relacionados: 1 coluna no mobile, 2 no tablet e 4 a partir de laptop;
- navbar: `96 px` de altura em todas as medições.

O frame do Figma documenta apenas o estado wide. O menu mobile deve ser projetado antes da implementação; não copiar o overflow horizontal observado na página-fonte.

## 6. Tokens de cor

### 6.1 Tokens primitivos observados

| Token proposto | Hex | Uso observado |
| --- | --- | --- |
| `ivory-50` | `#FBF7F0` | canvas, navbar |
| `ink-950` | `#1B1917` | título e texto editorial |
| `black` | `#000000` | navegação e labels |
| `white` | `#FFFFFF` | texto sobre imagem e footer |
| `green-700` | `#007354` | fundo do footer |
| `green-500` | `#3E9C74` | seleção de texto observada |
| `stone-400` | `#AEADA9` | apoio neutro/importado |

Os nomes importados do Figma, como `Cod Gray`, `White Bianca` e `Delta`, devem ser normalizados para tokens semânticos no código.

### 6.2 Tokens semânticos

| Token | Referência | Uso |
| --- | --- | --- |
| `canvas` | `ivory-50` | fundo geral |
| `surface` | `ivory-50` | navbar e superfícies claras |
| `foreground` | `ink-950` | conteúdo editorial |
| `foreground-strong` | `black` | navegação e controles |
| `on-brand` | `white` | conteúdo no footer |
| `brand` | `green-700` | footer e identidade |
| `selection` | `green-500` | seleção de texto |
| `muted` | `stone-400` | informação secundária, se necessária |

Não criar escala completa de cores sem um uso real. Isso mantém YAGNI e reduz ambiguidade.

## 7. Tipografia

### 7.1 Famílias observadas

| Papel | Família | Peso/estilo |
| --- | --- | --- |
| Display e UI editorial | `Unica77 Web Regular` | 400 |
| Labels e navegação | `Pitch Sans Regular` | 400 |
| Corpo editorial | `Rosart Regular` | 400 |
| Ênfase editorial | `Rosart SemiBold` | 600 |
| Itálico editorial | `Rosart Italic` | 400 italic |

Essas fontes não existem atualmente no projeto. Antes de implementar, confirmar licença e arquivos locais. Não substituir silenciosamente por Geist. Se uma substituição for necessária, registrá-la aqui.

### 7.2 Escala tipográfica

| Estilo | Fonte | Size / line-height | Uso |
| --- | --- | --- | --- |
| `display-wide` | Unica77 | `80 / 88 px` | H1 a partir de 1440 |
| `display-desktop` | Unica77 | `64 / 70.4 px` | H1 entre 1024 e 1439 |
| `display-tablet` | Unica77 | `56 / 61.6 px` | H1 entre 768 e 1023 |
| `display-mobile` | Unica77 | `40 / 44 px` | H1 abaixo de 768 |
| `body-lg` | Rosart | `20 / 28 px` | artigo a partir de 1200 |
| `body` | Rosart | `16 / 22.4 px` | artigo abaixo de 1200 |
| `body-strong` | Rosart SemiBold | herda do corpo | intertítulos inline e destaques |
| `body-emphasis` | Rosart Italic | herda do corpo | ênfase editorial |
| `nav` | Pitch Sans | `14 / 21 px` | links da navegação, uppercase |
| `meta` | Pitch Sans | `14 / 16.8 px` | autor e data, uppercase |
| `section-label` | Pitch Sans | `16 / 19.2 px` | “Share”, uppercase |
| `card-eyebrow` | Pitch Sans | `12 / 12 px` | tipo do conteúdo, uppercase |
| `card-title` | Unica77 ou Rosart | `19 / 20.9 px` | título dos cards |
| `card-meta` | Unica77 | `12 / 13.2 px` | autoria do card |
| `footer` | Unica77 | `14 / 19.6 px` | links do footer |

Tracking observado: `normal`. Não adicionar tracking negativo ao título sem uma nova validação visual.

## 8. Espaçamento e forma

Valores recorrentes observados:

- `12 px`: padding interno de card;
- `16 px`: padding do slot de card e gap interno do footer;
- `20 px`: gutter desktop e gap do share;
- `24 px`: padding do wrapper editorial e margem mobile do hero;
- `32 px`: padding superior da seção do artigo;
- `40 px`: ritmo vertical entre parágrafos;
- `48 px`: margem lateral desktop/tablet;
- `64 px`: padding vertical do footer;
- `80 px`: respiro inferior do main;
- `84 px`: padding inferior de hero e artigo;
- `96 px`: altura do header e gap interno do hero;
- `256 px`: padding superior do hero wide.

Forma:

- raio global observado: `0 px`;
- sem sombras nos principais containers;
- imagens com corte retangular;
- o único círculo observado é o marcador de categoria de `12 px` nos cards.

## 9. Tokens para Tailwind CSS v4

Usar CSS-first. Tokens brutos ficam em `:root`; `@theme inline` expõe apenas nomes semânticos para utilities.

```css
@import "tailwindcss";

:root {
  --ds-color-ivory-50: #fbf7f0;
  --ds-color-ink-950: #1b1917;
  --ds-color-black: #000000;
  --ds-color-white: #ffffff;
  --ds-color-green-700: #007354;
  --ds-color-green-500: #3e9c74;
  --ds-color-stone-400: #aeada9;

  --ds-page-x-mobile: 1.5rem;
  --ds-page-x: 3rem;
  --ds-copy-width: 38.75rem;
  --ds-copy-wrapper: 41.75rem;
  --ds-title-width: 53.125rem;
  --ds-wide-width: 120rem;

  --ds-duration-fast: 160ms;
  --ds-duration-base: 240ms;
  --ds-duration-slow: 420ms;
  --ds-ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
}

@theme inline {
  --color-canvas: var(--ds-color-ivory-50);
  --color-surface: var(--ds-color-ivory-50);
  --color-foreground: var(--ds-color-ink-950);
  --color-foreground-strong: var(--ds-color-black);
  --color-brand: var(--ds-color-green-700);
  --color-on-brand: var(--ds-color-white);
  --color-selection: var(--ds-color-green-500);
  --color-muted: var(--ds-color-stone-400);

  --font-display: var(--font-unica77);
  --font-label: var(--font-pitch-sans);
  --font-editorial: var(--font-rosart);

  --text-display-wide: 5rem;
  --text-display-wide--line-height: 5.5rem;
  --text-display-desktop: 4rem;
  --text-display-desktop--line-height: 4.4rem;
  --text-display-tablet: 3.5rem;
  --text-display-tablet--line-height: 3.85rem;
  --text-display-mobile: 2.5rem;
  --text-display-mobile--line-height: 2.75rem;
  --text-editorial-lg: 1.25rem;
  --text-editorial-lg--line-height: 1.75rem;
  --text-editorial: 1rem;
  --text-editorial--line-height: 1.4rem;

  --container-copy: var(--ds-copy-width);
  --container-copy-wrap: var(--ds-copy-wrapper);
  --container-title: var(--ds-title-width);
  --container-wide: var(--ds-wide-width);

  --breakpoint-tablet: 48rem;
  --breakpoint-laptop: 64rem;
  --breakpoint-desktop: 75rem;
  --breakpoint-wide: 90rem;
}

::selection {
  background: var(--color-selection);
  color: var(--color-canvas);
}
```

Não duplicar esses valores em `tailwind.config.*`; Tailwind v4 deve continuar CSS-first.

## 10. Anatomia da página

Ordem verificada no frame:

1. `SiteHeader` fixo;
2. `ArticleHero`;
3. `ArticleBody`;
4. `ShareActions`;
5. `RelatedStories`;
6. `SiteFooter`.

### 10.1 SiteHeader

- posição: fixed no topo;
- altura: `96 px`;
- z-index medido: `10`;
- fundo: `canvas`;
- padding lateral: `48 px`;
- logo: `180 × 24 px`;
- links: Founders, Companies, Team, Stories, Podcasts e Arc;
- busca: ícone `24 × 24 px` no extremo direito;
- distribuição interna: `space-between`.

Composição recomendada:

```text
SiteHeader
├── BrandLogo
├── PrimaryNavigation
└── SearchButton
```

No mobile, criar uma navegação própria em vez de espremer os links desktop.

### 10.2 ArticleHero

Medidas wide:

- altura renderizada: `645.59 px`;
- padding interno: `256 px 0 84 px` dentro do container lateral;
- gap entre título e metadata: `96 px`;
- H1: largura máxima `850 px`, centralizado, `80/88`;
- autor e data: Pitch Sans `14/16.8`, uppercase;
- alinhamento: central.

O header é sobreposto e fixo; o padding superior do hero já acomoda sua presença.

### 10.3 ArticleBody

- seção com padding superior `32 px` e inferior `84 px`;
- coluna de texto central com `620 px`;
- corpo desktop wide `20/28`;
- espaçamento entre parágrafos: `40 px`;
- subtítulos fazem parte do fluxo do artigo e usam `strong`, não um H2 visualmente desproporcional;
- ênfases usam Rosart Italic;
- duas imagens editoriais observadas:
  - imagem panorâmica: `620 × 300 px`;
  - imagem quase quadrada: `620 × 572.3 px`.

Estrutura semântica recomendada:

```text
article
├── header (título, autor, data)
├── ArticleRichText
│   ├── p
│   ├── strong / em
│   └── figure + figcaption opcional
└── footer (compartilhamento)
```

Evitar componentes React separados para cada parágrafo. Use blocos de conteúdo tipados somente se o conteúdo realmente vier de CMS/dados.

### 10.4 ShareActions

- bloco centralizado;
- altura wide: `136.2 px`;
- gap: `20 px`;
- padding inferior: `57 px`;
- label: `16/19.2`, uppercase;
- fileira de ações: `190 × 40 px` na fonte.

Cada ação precisa de nome acessível e feedback de sucesso para copiar link.

### 10.5 RelatedStories

- quatro colunas iguais no wide;
- grid sem gap externo explícito;
- cada slot aplica `16 px` de padding;
- card aplica `12 px` de padding sobre a mídia;
- imagem ocupa toda a área e usa corte com `object-fit: cover`;
- conteúdo sobreposto em branco:
  - eyebrow e marcador circular no topo esquerdo;
  - título próximo ao centro;
  - autoria na base;
  - ação “Read” aparece como estado de interação.

Não criar um componente novo para cada tipo editorial. Um `StoryCard` com props de conteúdo e variante visual é suficiente enquanto as estruturas forem iguais.

### 10.6 SiteFooter

- fundo: `brand` (`#007354`);
- altura wide: aproximadamente `270 px`;
- padding: `64 px 48 px`;
- quatro colunas iguais;
- gap vertical interno: `16 px`;
- texto e links: branco;
- grupos:
  1. About;
  2. Business Entities;
  3. Login;
  4. Motion + copyright.

O controle “Motion On/Off” deve respeitar `prefers-reduced-motion` e nunca reativar movimento contra a preferência explícita do usuário.

## 11. Arquitetura de componentes

Estrutura recomendada:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── page-container.tsx
│   │   └── page-grid.tsx
│   ├── navigation/
│   │   ├── site-header.tsx
│   │   └── primary-navigation.tsx
│   ├── article/
│   │   ├── article-hero.tsx
│   │   ├── article-meta.tsx
│   │   ├── article-rich-text.tsx
│   │   └── share-actions.tsx
│   ├── stories/
│   │   ├── related-stories.tsx
│   │   └── story-card.tsx
│   ├── footer/
│   │   ├── site-footer.tsx
│   │   └── motion-preference.tsx
│   └── ui/
│       ├── icon-button.tsx
│       └── visually-hidden.tsx
├── content/
│   └── article.ts
└── lib/
    ├── motion.ts
    └── utils.ts
```

Regras:

- componentes de seção compõem primitives; não misturar todas as responsabilidades em `page.tsx`;
- manter Server Components como padrão;
- adicionar `"use client"` apenas em menu mobile, compartilhar/copiar, preferência de movimento e elementos realmente animados;
- dados de navegação, footer e related stories devem vir de arrays tipados;
- não criar Context para estado local simples;
- não criar variantes ou abstrações sem segundo caso de uso real.

## 12. Princípios de engenharia

### SOLID aplicado ao frontend

- **SRP:** `StoryCard` apresenta um card; `RelatedStories` controla o grid; `ShareActions` controla compartilhamento.
- **OCP:** evoluir variações por props discriminadas, sem editar condicionais espalhadas.
- **LSP:** componentes polimórficos devem preservar semântica e comportamento de foco.
- **ISP:** preferir props pequenas e específicas; não passar um objeto de página inteiro a componentes simples.
- **DIP:** componentes recebem dados e configurações de movimento; não importam conteúdo global escondido.

### KISS

- HTML semântico, CSS/Tailwind e estado local primeiro;
- evitar renderers genéricos e factories enquanto a página tiver um único formato;
- animação não deve determinar a estrutura do DOM.

### DRY

- centralizar tokens, dados repetidos e padrões comprovadamente iguais;
- não extrair abstrações só porque duas classes coincidem temporariamente.

### YAGNI

- não implementar dark mode: o frame documentado é light;
- não criar tema alternativo, CMS, mega menu ou sistema de variantes sem demanda;
- não criar escala de tokens não utilizada.

### Composição sobre herança

- seções são combinações de primitives e componentes pequenos;
- estilos compartilhados são utilities/tokens, não hierarquias de componentes.

## 13. Movimento com Framer Motion

O frame é estático e não contém especificação verificável de movimento. Portanto, os valores abaixo são recomendações de implementação, não medições do Figma.

### Tokens recomendados

| Token | Valor | Uso |
| --- | ---: | --- |
| `fast` | `160 ms` | hover, ícones, underline |
| `base` | `240 ms` | controles e pequenos overlays |
| `slow` | `420 ms` | entrada de cards/seções |
| `editorial` | `700 ms` | revelações grandes, somente quando justificadas |
| `standard` | `[0.22, 1, 0.36, 1]` | easing principal |

Regras:

- animar `opacity` e `transform` preferencialmente;
- não animar altura do artigo durante carregamento;
- não deslocar o texto enquanto o usuário lê;
- cards podem revelar metadata/CTA no hover e no foco;
- hover nunca pode ser o único meio de acessar informação;
- desativar movimento não essencial com `useReducedMotion`;
- manter variantes em `src/lib/motion.ts` para evitar números mágicos.

Exemplo de contrato:

```ts
export const motionTokens = {
  duration: { fast: 0.16, base: 0.24, slow: 0.42, editorial: 0.7 },
  ease: { standard: [0.22, 1, 0.36, 1] as const },
} as const;
```

## 14. Acessibilidade

- incluir skip link antes do header;
- usar `header`, `nav`, `main`, `article`, `section` e `footer` corretamente;
- manter um único H1;
- não usar H2 apenas para reproduzir negrito dentro do artigo;
- links da navegação e botões de compartilhar precisam de foco visível;
- área interativa mínima recomendada: `44 × 44 px`;
- botão de busca precisa de `aria-label`;
- imagens informativas precisam de `alt`; imagens puramente decorativas usam `alt=""`;
- o texto sobre cards precisa manter contraste independentemente da imagem; use overlay quando necessário;
- o controle de movimento deve ter estado anunciado e persistente;
- respeitar `prefers-reduced-motion` por padrão;
- validar navegação por teclado, zoom de 200% e reflow em 320 px.

## 15. Assets

O frame contém:

- logotipo vetorial;
- ícone de busca;
- ícones de compartilhamento;
- duas imagens no corpo do artigo;
- quatro imagens de related stories.

Regras de asset:

- exportar do Figma ou salvar uma cópia autorizada em `public/assets/`;
- não hotlinkar URLs da página-fonte em produção;
- preservar a proporção medida;
- usar `next/image` quando houver dimensões conhecidas;
- SVGs de marca devem permanecer vetoriais;
- nomes devem descrever conteúdo, não posição, por exemplo `opportunity-map.webp` em vez de `image-2.webp`.

## 16. Checklist de implementação

### Fundação

- [ ] substituir tokens default de `globals.css` pelos tokens deste documento;
- [ ] remover o dark mode automático do template enquanto não houver design aprovado;
- [ ] carregar fontes aprovadas e registrar licenças/fallbacks;
- [ ] criar `PageContainer`, `PageGrid` e `EditorialColumn`;
- [ ] atualizar metadata e idioma da página conforme o conteúdo final.

### Estrutura

- [ ] implementar header fixo de 96 px;
- [ ] implementar hero responsivo;
- [ ] implementar artigo sem fragmentar parágrafos em componentes;
- [ ] integrar imagens locais;
- [ ] implementar share, related stories e footer.

### Qualidade

- [ ] validar o frame wide em viewport de 1440 px;
- [ ] validar 1200, 1024, 768, 390 e 320 px;
- [ ] testar teclado e leitor de tela;
- [ ] testar `prefers-reduced-motion`;
- [ ] rodar lint, typecheck e build;
- [ ] comparar visualmente sem grid e com grid de 12 colunas ativado.

## 17. Decisões ainda abertas

- arquivos e licenças de Unica77, Pitch Sans e Rosart;
- comportamento final do menu abaixo de 768 px;
- biblioteca/pacote exato para Framer Motion no projeto;
- plataforma e destinos das ações de compartilhamento;
- alt text das seis imagens;
- comportamento detalhado do hover/focus dos cards;
- persistência do controle Motion On/Off;
- conteúdo final e idioma da implementação.

Até essas decisões serem fechadas, manter os componentes preparados, mas não inventar comportamento ou conteúdo.
