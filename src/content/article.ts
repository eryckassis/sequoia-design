import type {
  ArticleHeroContent,
  ArticleIntroContent,
} from "@/components/article";

export const articleHeroContent = {
  title: "The Design Ideas",
  techText: {
    text: "Sequoia:",
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
  author: "Eryck Assis",
  authorHref: "/people/julien-bek",
  publishedAt: "2026-03-05",
  publishedLabel: "March 5, 2026",
} as const satisfies ArticleHeroContent;

export const articleIntroContent = {
  lead: "The next $1T company will be a software company masquerading as a services firm.",
  overview:
    "Every founder building an AI tool is asking the same question: what happens when the next version of Claude makes my product a feature? They’re right to worry. If you sell the tool, you’re in a race against the model. But if you sell the work, every improvement in the model makes your service faster, cheaper, and harder to compete with. A company might spend $10K a year for QuickBooks and $120K on an accountant to close the books. The next legendary company will just close the books.",
  sectionTitle: "Intelligence vs Judgement",
  thesis: {
    prefix: "Writing code is mostly ",
    firstTerm: "intelligence",
    middle: ". Knowing what to build next is ",
    secondTerm: "judgement",
    suffix: ".",
  },
  explanation:
    "Translating a spec into code, testing, debugging: the rules are complex but they are rules. Judgement is different. It requires experience and taste, instinct built on years of practice. Deciding which feature to build next, whether to take on tech debt, when to ship before it’s ready.",
  conclusion:
    "A year ago, most Cursor users treated AI as autocomplete. Today, more tasks are started by agents than by humans. Software engineering accounts for over half of all AI tool usage across professions. Every other category is still in single digits. The reason is that software engineering is primarily intelligence work. AI has crossed the threshold where it can do most of the intelligence work autonomously and leave the judgement to humans. Software engineering got there first. It is coming to every single profession.",
} as const satisfies ArticleIntroContent;
