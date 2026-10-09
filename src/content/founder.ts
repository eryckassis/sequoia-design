import type {
  ArticleContinuationContent,
  ArticleHeroContent,
  ArticleIntroContent,
  ArticleShareContent,
} from "@/components/article";

export type FounderPageContent = Readonly<{
  metadata?: Readonly<{
    title: string;
    description: string;
  }>;
  hero?: ArticleHeroContent;
  intro?: ArticleIntroContent;
  continuation?: ArticleContinuationContent;
  share?: ArticleShareContent;
}>;

export const founderContent: FounderPageContent = {
  metadata: {
    title: "Fundador | Sequoia",
    description:
      "Conheça Eryck, criador de uma newsletter sobre design para web, programação, dados e processo criativo.",
  },

  hero: {
    title: "Inspirado pela natureza.",
    techText: {
      text: "Fundador:",
      fontWeight: 400,
      color: "#1b1917",
      accentColor: "#007354",
      reach: 140,
      softness: 0.7,
      reveal: "letter",
      selection: true,
      labels: true,
      draggable: true,
      sweep: true,
    },
    meta: {
      author: "Eu",
      authorHref: "/founder",
      publishedAt: "2026-10-01",
      publishedLabel: "1 de outubro de 2026",
    },
  },

  intro: {
    lead: "Olá, meu nome é Eryck. Sou o criador desta newsletter de design — pelo menos é assim que chamo este projeto por enquanto. Vou manter esta apresentação breve e direta, o suficiente para apresentar minhas ideias, estudos e anotações não apenas sobre design para web, mas também sobre programação e dados. Minha abordagem é leve, objetiva e acessível, mesmo para iniciantes curiosos.",
    overview:
      "Este projeto nasceu como uma forma de compartilhar meu trabalho, pensamentos e descobertas com você. Eu queria um espaço para apresentar meus projetos e refletir sobre tendências recentes de design, além de conversar sobre os hábitos e as histórias por trás do meu processo criativo. Espero que esta newsletter desperte sua curiosidade e incentive você a acompanhar minha jornada, oferecendo uma alternativa ao conteúdo excessivo que muitas vezes encontramos on-line.",
    sectionTitle:
      "Estou sempre cheio de ideias e adoro o desafio de transformá-las em realidade. Para mim, trata-se de transformar um rabisco no papel em algo tangível e útil — algo que faça sentido para pessoas reais.",
    thesis: {
      prefix:
        "Ultimamente, tenho mergulhado em inúmeros projetos, estudos e análises de casos. Também estou explorando ",
      firstTerm: "novas oportunidades profissionais",
      middle: " na minha área, movido por um ",
      secondTerm: "desejo genuíno",
      suffix: " de fazer a diferença.",
    },
    explanation:
      "Criatividade, tendências, dicas, orientações e novas perspectivas — isso é apenas a ponta do iceberg do que você encontrará aqui. Prometo que tudo o que eu compartilhar será fundamentado em evidências, especialmente quando se tratar de tendências emergentes.",
    conclusion:
      "Minha missão é ajudar você a acessar seu lado criativo e colocá-lo em prática.",
  },

  continuation: {
    sections: [
      {
        id: "a-free-evolving-newsletter",
        heading: "Mais importante: esta newsletter será sempre gratuita.",
        paragraphs: [
          "Com o tempo, ela pode se tornar algo como o diário de um designer para web — um projeto em evolução para quem quiser acompanhar.",
        ],
      },
    ],
    items: [],
    closing:
      "Então, seja bem-vindo a este espaço! Espero que você goste de ler tanto quanto eu gosto de criar. Vamos explorar, aprender e crescer juntos, uma edição por vez.",
    callToAction:
      "Obrigado por acompanhar esta jornada. Continue curioso e inspirado!",
  },

  share: {
    title: "Olá, meu nome é Eryck.",
  },
};
