import type { ArticleContinuationContent } from "@/components/article";

export type EditorialSection = Readonly<{
  id: string;
  heading: string;
  paragraphs: readonly string[];
}>;

export type Opportunity = Readonly<{
  label: string;
  description: string;
}>;

export const articleContinuationSection = [
  {
    id: "copilots-and-autopilots",
    heading: "Copilots and Autopilots",
    paragraphs: [
      "A copilot helps a specialist perform a task. An autopilot takes responsibility for delivering its result.",
      "Earlier AI products worked best as assistants because people still had to make many of the decisions. Professionals bought tools that made their daily work quicker, while retaining responsibility for quality and delivery. That arrangement made sense when models needed close supervision.",
      "More capable models change the buyer and the product. A business can now pay a provider to complete a defined job instead of buying software for its staff to operate. The provider owns the workflow, checks the result and benefits whenever the underlying model improves.",
      "Workflows with clear rules and verifiable outputs are especially suited to this shift.",
    ],
  },
  {
    id: "the-convergence",
    heading: "The Convergence",
    paragraphs: [
      "Decisions that demand expert judgement today may become repeatable as a service gathers examples, corrections and outcome data. Assistive tools can gradually take on more of the work, while providers that already sell completed outcomes can improve their margins and scope. The initial customer relationship still matters: it determines which team can learn from real work soonest.",
    ],
  },
  {
    id: "autopilot-playbook",
    heading: "The Autopilot Playbook: Outsourcing as the Wedge",
    paragraphs: [
      "Companies spend substantially more on human services than on the software those workers use.",
      "The broad opportunity includes work performed by employees and outside firms. Outsourced tasks offer a practical starting point because a buyer already knows the work can be assigned externally and already has a budget for its completion.",
      "A provider can begin with a narrow, repeatable task and replace an existing service contract. That creates a clearer purchase than asking a company to reorganize its team. The first offering should be easy to evaluate, with an outcome both sides can recognize.",
      "Once delivery works reliably, the service can cover adjacent tasks that require more context and judgement. Each completed assignment can improve the systems, processes and data behind the next one.",
      "Routine legal documents illustrate the approach: the scope is defined, the output can be reviewed, and businesses already send this work to outside providers.",
    ],
  },
  {
    id: "opportunity-map",
    heading: "Opportunity Map",
    paragraphs: [
      "Services differ in how much judgement they require and how often buyers already outsource them. Looking at both dimensions helps reveal where an outcome-based AI service can enter first and where it might expand later.",
    ],
  },
] as const satisfies readonly EditorialSection[];

export const Opportunities = [
  {
    label: "Insurance distribution",
    description:
      "Many standard policies involve gathering information, comparing carriers and completing familiar forms. A service that manages that process for the buyer could replace portions of a fragmented brokerage workflow.",
  },
  {
    label: "Accounting and audit",
    description:
      "Finance teams still spend heavily on closing books, checking records and preparing reports. Repeated procedures and a shortage of experienced staff make these tasks promising candidates for services that deliver verified results.",
  },
  {
    label: "Healthcare billing",
    description:
      "Coding and reimbursement depend on extensive rules, documentation and insurer requirements. Providers already outsource much of this work, creating a clear route for a service that improves accuracy and turnaround time.",
  },
  {
    label: "Claims handling",
    description:
      "Routine claims require policy interpretation, document review and reserve calculations. Insurers already rely on external administrators, so an AI-led provider could enter through a familiar service relationship.",
  },
  {
    label: "Tax services",
    description:
      "Tax work combines recurring rules with jurisdiction-specific details. A service that handles more filings and jurisdictions can accumulate useful operational knowledge while serving businesses that lack dedicated specialists.",
  },
  {
    label: "Transactional legal work",
    description:
      "Standard agreements and filings have defined outputs that a buyer can inspect. This creates room for a provider to deliver completed documents, with human review reserved for unusual or higher-risk matters.",
  },
  {
    label: "Managed IT",
    description:
      "Small businesses already pay outside teams to maintain devices, accounts and systems. Monitoring, provisioning and routine issue resolution could be sold as a dependable operating service.",
  },
  {
    label: "Procurement",
    description:
      "Teams often devote attention to their largest suppliers while smaller contracts receive little scrutiny. A service could handle comparison, negotiation preparation and contract follow-up across that neglected volume.",
  },
  {
    label: "Recruitment",
    description:
      "Sourcing, screening and outreach contain repeatable steps, particularly for high-volume roles. Relationship building and final hiring decisions still need people, leaving a useful division between automated work and human judgement.",
  },
  {
    label: "Consulting",
    description:
      "Research, data collection and benchmarking can be separated from strategic recommendations. Providers that deliver those defined pieces of work may find an entry point even where the final advice remains highly judgement-driven.",
  },
] as const satisfies readonly Opportunity[];

export const articleClosing =
  "As these services mature, teams that once sold assistants may try to take responsibility for complete outcomes. Companies built around delivery from the start can move quickly because their product, operations and customer relationship already center on the finished work.";

export const articleCallToAction = "If you’re building one, reach out.";

export const articleContinuationContent = {
  sections: articleContinuationSection,
  items: Opportunities,
  closing: articleClosing,
  callToAction: articleCallToAction,
} as const satisfies ArticleContinuationContent;
