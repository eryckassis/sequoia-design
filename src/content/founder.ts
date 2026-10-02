import type {
  ArticleContinuationContent,
  ArticleHeroContent,
  ArticleIntroContent,
  ArticleShareContent,
} from "@/components/article";

type FounderPageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  hero: ArticleHeroContent;
  intro: ArticleIntroContent;
  continuation: ArticleContinuationContent;
  share: ArticleShareContent;
}>;

export const founderContent = {
  metadata: {
    title: "Founder | Sequoia",
    description:
      "Building an enduring company begins with clarity, conviction and the willingness to keep learning.",
  },

  hero: {
    title: "Build for the long term.",
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
    author: "Sequoia",
    authorHref: "/founder",
    publishedAt: "2026-10-01",
    publishedLabel: "October 1, 2026",
  },

  intro: {
    lead: "An enduring company begins with a founder who sees a possibility before it becomes obvious.",
    overview:
      "At the beginning, there is rarely a complete plan. There is a problem worth solving, a small group of people willing to work on it and a belief that the future can be different. The founder’s responsibility is to turn that belief into something customers can use, trust and eventually depend on.",
    sectionTitle: "Conviction before consensus",
    thesis: {
      prefix: "A founder’s first job is to see the future with ",
      firstTerm: "clarity",
      middle: " and pursue it with ",
      secondTerm: "conviction",
      suffix: ".",
    },
    explanation:
      "Conviction is not certainty. It is the willingness to make a considered decision while information is still incomplete. Strong founders remain committed to the problem while changing their assumptions, product and approach whenever reality gives them better evidence.",
    conclusion:
      "That balance matters. Companies lose their way when conviction becomes stubbornness or when learning becomes a reason to avoid choosing. Progress comes from holding the mission firmly and the method loosely.",
  },

  continuation: {
    sections: [
      {
        id: "start-with-a-real-problem",
        heading: "Start With a Real Problem",
        paragraphs: [
          "The strongest companies often begin with a problem the founder understands personally. Proximity reveals details that are easy to miss from the outside: where existing tools fail, which compromises customers tolerate and what a meaningfully better experience could feel like.",
          "A real problem creates urgency. Customers do not need to be persuaded that it exists; they need to believe this team can solve it better than the alternatives.",
        ],
      },
      {
        id: "find-the-edge",
        heading: "Find the Edge",
        paragraphs: [
          "A new company cannot win by doing everything at once. It needs an edge: a technical insight, a distribution advantage, a sharper understanding of the customer or a way of working that established companies cannot easily copy.",
          "The edge may look narrow at first. Its value is that it gives the company a place to begin, learn and earn the right to expand.",
        ],
      },
      {
        id: "build-trust-through-progress",
        heading: "Build Trust Through Progress",
        paragraphs: [
          "Customers, employees and investors respond to progress they can see. A working product, a retained customer or an important technical breakthrough communicates more than a polished story without evidence.",
          "The earliest version does not need to contain the entire vision. It needs to solve one meaningful problem well enough that people choose to return.",
        ],
      },
      {
        id: "the-founders-job-changes",
        heading: "The Founder’s Job Changes",
        paragraphs: [
          "In the beginning, founders do nearly everything. As the company grows, their work shifts from completing every task to establishing direction, hiring exceptional people and creating an environment where good decisions can happen without them.",
          "Delegation does not mean distance. The founder remains responsible for the quality bar, the company’s values and the few decisions that can alter its trajectory.",
        ],
      },
    ],

    items: [
      {
        label: "Customer truth",
        description:
          "Stay close enough to customers to understand what they do, not only what they say. Their behavior is the clearest signal of whether the product matters.",
      },
      {
        label: "Technical ambition",
        description:
          "Use technology to make something fundamentally better, not merely more convenient. Lasting advantages usually come from difficult work compounded over time.",
      },
      {
        label: "Talent density",
        description:
          "A small group of exceptional people can move with more clarity and speed than a larger team built before the work demands it.",
      },
      {
        label: "Speed",
        description:
          "Move quickly where decisions are reversible. Learning sooner creates more opportunities to correct the course while the cost of change remains low.",
      },
      {
        label: "Endurance",
        description:
          "Important companies take time. Protect the energy, relationships and financial discipline required to continue through periods when progress is less visible.",
      },
      {
        label: "Stewardship",
        description:
          "Every product decision shapes the trust customers place in the company. Treat that trust as an asset that must be earned repeatedly.",
      },
    ],

    closing:
      "There is no single path to building an enduring company. The common thread is a founder who keeps learning, makes difficult choices and remains accountable for turning an ambitious idea into useful reality.",

    callToAction:
      "If you are building for the long term, we want to hear from you.",
  },

  share: {
    title: "Founder: Build for the long term.",
  },
} as const satisfies FounderPageContent;
