import type {
  ArticleContinuationContent,
  ArticleIntroContent,
  ArticleShareContent,
  ThisIsAgiHeroContent,
} from "@/components/article";
import { thisIsAgiHeroImage } from "@/content/media";

export const thisIsAgiMetadata = {
  title: "2026: This is AGI",
  description: "E se não desacelerarmos agora? O que acontecerá no futuro?",
} as const;

export const thisIsAgiHeroContent = {
  title: "2026: Um ano para desacelerar.",
  author: {
    name: "Eryck Assis",
    href: "/founder",
  },
  publishedAt: "2026-10-05",
  publishedLabel: "October 5, 2026",
  subtitle: "E se não desacelerarmos agora? O que acontecerá no futuro?",
  image: thisIsAgiHeroImage,
} as const satisfies ThisIsAgiHeroContent;

export const thisIsAgiIntroContent = {
  lead: "No contexto atual, vivemos imersos em um ambiente de constante estímulos, informações fragmentadas e inovações tecnológicas que moldam a maneira como pensamos, nos relacionamos e consumimos conteúdo.",

  overview:
    "O design digital e as tecnologias emergentes de 2026 ampliaram ainda mais nossa capacidade de acesso, porém, também trouxeram desafios profundos à saúde mental e à formação cognitiva.",
  sectionTitle:
    "A psicologia comteporânea observa com especial atenção os impactos da perda de hábitos fundamentais, como a leitura, a conversação significativa, o raciocínio lógico e a desaceleração mental, para entender o que está em jogo na construção do futuro",

  thesis: {
    prefix:
      "No início de nossa história como sociedade conectada, o avanço tecnológico prometia democratizar o acesso à informação e facilitar o desenvolvimento intelectual. A leitura, por exemplo, sempre foi considerada uma das principais ferramentas para o aprimoramento do pensamento crítico, da empatia e da capacidade de análise. Conversar, por sua vez, desenvolve não só competências sociais, mas também a escuta ativa, a argumentação e o respeito à diferença. O exercício da lógica estrutura o raciocínio, ajuda a resolver problemas e fundamenta decisões conscientes. Já a desaceleração mental, o ato de pausar, refletir e processar informações é crucial para a saúde emocional,permitindo a assimilação de experiências e a redução do estresse.",
    firstTerm:
      " No entanto, a psicologia alerta: a perda desses hábitos acarreta efeitos negativos em múltiplos níveis. O declínio da leitura, impulsionado pelo excesso de estímulos visuais e pelo consumo superficial de informações, prejudica a concentração, a compreensão de textos complexos e o enriquecimento do vocabulário. Estudos recentes mostram que pessoas que leem menos tendem a apresentar menor capacidade de abstração e análise crítica, tornando-se mais vulneráveis à manipulação de informações e ao pensamento simplista.",
    middle:
      " A ausência de conversas profundas, substituídas por interações rápidas e superficiais em redes sociais ou aplicativos de mensagens, mina a construção de vínculos genuínos. A psicologia social aponta que a falta de diálogo enfraquece a empatia e prejudica a saúde emocional, aumentando sentimentos de solidão e ansiedade. O design de plataformas digitais, cada vez mais orientado para o engajamento rápido e a monetização da atenção, intensifica esse fenômeno, priorizando notifiações, algoritmos de recomendação e recompensas instantâneas, em detrimento de espaços que favoreçam o diálogo autêntico.",
    secondTerm:
      " O abandono do raciocínio lógico, por sua vez, compromete a capacidade de resolver problemas de forma estruturada e tomar decisões ponderadas. A psicologia cognitiva destaca que o exercício da lógica estimula regiões cerebrais responsáveis pelo pensamento crítico, pela criatividade e pela tomada de perspectiva. Sem essa prática, o indivíduo pode se tornar mais impulsivo, dependente de respostas automáticas fornecidas por assistentes digitais e menos apto a lidar com situações complexas.",
    suffix: "",
  },

  explanation:
    "Outro efeito preocupante é a incapacidade de desacelerar a mente. A cultura da hiperconectividade, do multitasking e da resposta imediata cria um ambiente propício à ansiedade, ao esgotamento mental e à superficialidade.",

  conclusion:
    "A psicologia clínica enfatiza a importância de momentos de pausa para o restabelecimento do equilíbrio emocional, a assimilação de aprendizados e a prevenção de transtornos como burnout, depressão e insônia.",
} as const satisfies ArticleIntroContent;

export const thisIsAgiContinuationContent = {
  sections: [
    {
      id: "segunda-secao",
      heading: "O futuro do design e da tecnologia,",
      paragraphs: [
        "então, precisa ser repensado à luz dessas descobertas. Designers, engenheiros e criadores de conteúdo têm o desafio ético de construir experiências digitais que promovam o bem-estar cognitivo e emocional",
        "Isso implica desenvolver interfaces que convidem à leitura profunda, que favoreçam conversasões de qualidade, que estimulem o raciocínio lógico e que ofereçam oportunidades para a desaceleração, seja por meio de modos de leitura imersiva, limitação de notificações, espaçoes para debates ou ferramentas de mindfulness integradas às plataformas.",
      ],
    },
    {
      id: "terceira-secao",
      heading: "Em síntese,",
      paragraphs: [
        "a psicologia alerta que a perda dos hábitos de leitura, conversação, lógica e desaceleração mental, pode comprometer não apenas a saúde individual, mas também a capacidade coletiva de inovar, conviver e criar sociedades mais justas e resilientes.",
        "O papel do design e da tecnologia, em 2026 e além, será fundamental para resgatar esses hábitos e garantir que o futuro digital não nos prive das experiências humanas essenciais ao nosso desenvolvimento pleno.",
      ],
    },
  ],
  items: [],
  closing: "",
  callToAction: "",
} as const satisfies ArticleContinuationContent;

export const thisIsAgiShareContent = {
  title: "2026: Um ano para desacelerar.",
} as const satisfies ArticleShareContent;
