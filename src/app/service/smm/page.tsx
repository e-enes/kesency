import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const SMMPage = () => {
  const process = [
    {
      title: "Discover",
      description:
        "The discovery stage is where we conduct a thorough analysis of our client's social media presence and their competitors. We evaluate their strengths, weaknesses, opportunities, and threats to create a baseline for our strategy. We also gather insights on their target audience, the industry trends, and the best practices in their field.",
      image: CDN + "/images/services/process-tab/smm-process/smm-process-img-1.svg",
      icon: "ml-edu-8-telescope-geography-astronomy-science-research-discover",
    },
    {
      title: "Strategy",
      description:
        "Once we have a clear understanding of our client's social media presence, we move on to the strategy stage. Our team of experts creates a customized strategy that aligns with our client's goals and objectives. This strategy includes the platforms to be used, the target audience, the content strategy, and the budget allocation. We also set metrics and KPIs to track the success of the campaign.",
      image: CDN + "/images/services/process-tab/smm-process/smm-process-img-2.svg",
      icon: "ml-baftwo-43-chess-leader-leadership-horse-strategy",
    },
    {
      title: "Optimization",
      description:
        "After the strategy stage, we move on to the optimization stage. Here, we create and optimize our client's social media profiles to ensure they are consistent with their branding and messaging. We also perform ongoing monitoring and optimization to improve engagement, reach, and conversion rates. This stage includes testing different content types, posting times, and ad formats to find the best performing options.",
      image: CDN + "/images/services/process-tab/smm-process/smm-process-img-3.svg",
      icon: "ml-baftwo-42-jigsaw-puzzle-solve-problem-strategy",
    },
    {
      title: "Content",
      description:
        "The content stage is where we create high-quality content that resonates with our client's target audience. We use a mix of graphics, videos, and text to create engaging and shareable content. We also ensure that the content aligns with the client's branding and messaging while being optimized for the specific social media platforms being used.",
      image: CDN + "/images/services/process-tab/smm-process/smm-process-img-4.svg",
      icon: "ml-baftwo-56-legal-document-sign-contract-paper",
    },
    {
      title: "Reporting",
      description:
        "The final stage is the reporting stage. We provide our clients with regular reports that show the performance of their social media marketing efforts. These reports include metrics such as engagement rate, reach, conversion rate, and ROI. We also provide recommendations on how to optimize the campaign based on the data gathered.",
      image: CDN + "/images/services/process-tab/smm-process/smm-process-img-5.svg",
      icon: "ml-baftwo-37-discount-legal-paper-bill-invoice-percentage",
    },
  ];

  return (
    <React.Fragment key={"smm"}>
      <InnerMain style={"body-style-1"}>
        <h1>Social Media Marketing</h1>
        <p>It involves creating and sharing engaging content, building a community</p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/smm.svg"}>
        <h2>Result Oriented Marketing</h2>
        <p>
          Result Oriented Marketing is a marketing approach that focuses on achieving specific and
          measurable outcomes. It involves setting clear goals, developing a targeted strategy, and
          implementing tactics that are designed to produce measurable results. The primary
          objective of Result Oriented Marketing is to drive business growth by increasing revenue,
          generating leads, and building brand awareness.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default SMMPage;
