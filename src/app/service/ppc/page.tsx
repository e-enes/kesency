import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const PPCPage = () => {
  const process = [
    {
      title: "Discover",
      description:
        "The discovery stage is where we gather information about the client's business, target audience, competitors, and existing PPC performance. This involves conducting a thorough analysis of the client's website and PPC campaigns, identifying the target audience and their search intent, and reviewing the competition. We use this information to identify opportunities and challenges and set a baseline for measuring success.",
      image: CDN + "/images/services/process-tab/ppc-process/ppc-process-img-1.svg",
      icon: "ml-edu-8-telescope-geography-astronomy-science-research-discover",
    },
    {
      title: "Strategy",
      description:
        "Based on the information gathered in the discovery stage, we create a customized PPC strategy that aligns with the client's business goals and target audience. This involves setting specific objectives, selecting target keywords, creating ad copy, and outlining bidding and targeting recommendations. We work closely with the client to ensure that the strategy aligns with their goals and expectations.",
      image: CDN + "/images/services/process-tab/ppc-process/ppc-process-img-2.svg",
      icon: "ml-baftwo-43-chess-leader-leadership-horse-strategy",
    },
    {
      title: "Optimization",
      description:
        "The optimization stage is where we implement the recommendations outlined in the strategy. This involves creating and optimizing ad campaigns, selecting target audiences, setting up tracking and reporting, and monitoring the performance of the campaigns. We continuously test and adjust the campaigns to improve their effectiveness and ROI.",
      image: CDN + "/images/services/process-tab/ppc-process/ppc-process-img-3.svg",
      icon: "ml-baftwo-42-jigsaw-puzzle-solve-problem-strategy",
    },
    {
      title: "Content",
      description:
        "The content stage is where we create high-quality and relevant ad content that aligns with the target audience's search intent and interests. This includes creating ad copy, headlines, descriptions, and other content formats that help to improve the ad's click-through rate and engagement. We also optimize the ad content with target keywords and ensure that it is relevant to the landing page.",
      image: CDN + "/images/services/process-tab/ppc-process/ppc-process-img-4.svg",
      icon: "ml-baftwo-56-legal-document-sign-contract-paper",
    },
    {
      title: "Reporting",
      description:
        "The reporting stage is where we measure and report on the effectiveness of the PPC campaigns. We use analytics tools to monitor ad performance, conversions, and other key performance indicators (KPIs) to track progress and identify areas for improvement. We provide regular reports to the client that include insights and recommendations for ongoing optimization.",
      image: CDN + "/images/services/process-tab/ppc-process/ppc-process-img-5.svg",
      icon: "ml-baftwo-37-discount-legal-paper-bill-invoice-percentage",
    },
  ];

  return (
    <React.Fragment key={"ppc"}>
      <InnerMain style={"body-style-1"}>
        <h1>Pay-Per-Click</h1>
        <p>
          PPC (Pay-Per-Click) advertising is a digital marketing strategy in which advertisers pay a fee each time one of their ads is
          clicked.
        </p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/pay-per-click.svg"}>
        <h2>Quickest Way to Increase</h2>
        <p>
          PPC ads can appear in various formats such as search engine results app, social media platforms, and websites. Advertisers bid on
          specific keywords relevant to their business and target audience, and the ads are displayed to users who are searching for those
          keywords or are within the targeted demographic.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default PPCPage;
