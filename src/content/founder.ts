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
    title: "Founder | Sequoia",
    description:
      "Meet Eryck, the creator of a design newsletter about web design, programming, data, and the creative process.",
  },

  hero: {
    title: "Inspired By Nature.",
    techText: {
      text: "Founder:",
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
      author: "Me",
      authorHref: "/founder",
      publishedAt: "2026-10-01",
      publishedLabel: "October 1, 2026",
    },
  },

  intro: {
    lead: "Hello, my name is Eryck. I am the creator of this design newsletter—at least, that’s how I’m calling this project for now. I’ll keep this about-me short and sweet, just enough to introduce my ideas, studies, and notes not only in web design, but also programming and data. My approach stays lighthearted, straightforward, and accessible, even for curious beginners.",
    overview:
      "This project began as a way to share my work, thoughts, and discoveries with you. I wanted a place to showcase my projects and reflect on recent design trends, as well as to discuss the habits and stories behind my creative process. My hope is that this newsletter will spark your curiosity and encourage you to keep up with my journey, offering an alternative to the overwhelming content often found online.",
    sectionTitle:
      "I’m always brimming with ideas and love the challenge of turning them into reality. For me, it’s about transforming a scribble on paper into something tangible and useful—something that makes sense for real people.",
    thesis: {
      prefix:
        "Lately, I’ve been deeply immersed in countless projects, studies, and case analyses. I’m also exploring ",
      firstTerm: "new professional opportunities",
      middle: " in my field, fueled by a ",
      secondTerm: "genuine desire",
      suffix: " to make a difference.",
    },
    explanation:
      "Creativity, trends, tips, guidance, and fresh perspectives—these are just the tip of the iceberg of what you’ll find here. I promise everything I share will be grounded in evidence, especially when it comes to emerging trends.",
    conclusion:
      "My mission is to help you tap into your creative side and put it into action.",
  },

  continuation: {
    sections: [
      {
        id: "a-free-evolving-newsletter",
        heading: "Most importantly, this newsletter will always be free.",
        paragraphs: [
          "Over time, it might become something like a diary of a web designer—an evolving product for anyone who wants to follow along.",
        ],
      },
    ],
    items: [],
    closing:
      "So, welcome to this space! I hope you enjoy reading as much as I enjoy creating it. Let’s explore, learn, and grow together, one edition at a time.",
    callToAction:
      "Thank you for joining me on this journey. Stay curious and inspired!",
  },

  share: {
    title: "Hello, my name is Eryck.",
  },
};
