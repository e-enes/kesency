import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const SEOPage = () => {
  const process = [
    {
      title: "Discover",
      description:
        "The discovery stage is where we gather information about the client's business, industry, target audience, competitors, and existing website performance. This involves conducting a thorough website audit, keyword research, and competitor analysis. We use this information to identify opportunities and challenges and set a baseline for measuring success.",
      image: CDN + "/images/services/process-tab/seo-process/seo-process-img-1.svg",
      icon: "ml-edu-8-telescope-geography-astronomy-science-research-discover",
    },
    {
      title: "Strategy",
      description:
        "Based on the information gathered in the discovery stage, we create a customized SEO strategy that aligns with the client's business goals and target audience. This involves setting specific objectives, selecting target keywords, creating a content plan, and outlining technical optimization recommendations. We work closely with the client to ensure that the strategy aligns with their goals and expectations.",
      image: CDN + "/images/services/process-tab/seo-process/seo-process-img-2.svg",
      icon: "ml-baftwo-43-chess-leader-leadership-horse-strategy",
    },
    {
      title: "Optimization",
      description:
        "The optimization stage is where we implement the recommendations outlined in the strategy. This involves optimizing the website's technical elements, on-page content, and off-page factors to improve its visibility and ranking in search engine results app (SERPs). We also optimize the website for mobile responsiveness, site speed, and security.",
      image: CDN + "/images/services/process-tab/seo-process/seo-process-img-3.svg",
      icon: "ml-baftwo-42-jigsaw-puzzle-solve-problem-strategy",
    },
    {
      title: "Content",
      description:
        "The content stage is where we create high-quality and relevant content that aligns with the target audience's search intent and interests. This includes creating blog posts, articles, infographics, videos, and other content formats that help to improve the website's visibility and engagement. We also optimize the content with target keywords and ensure that it is shareable and linkable.",
      image: CDN + "/images/services/process-tab/seo-process/seo-process-img-4.svg",
      icon: "ml-baftwo-56-legal-document-sign-contract-paper",
    },
    {
      title: "Reporting",
      description:
        "The reporting stage is where we measure and report on the effectiveness of the SEO strategy. We use analytics tools to monitor website traffic, keyword rankings, and other key performance indicators (KPIs) to track progress and identify areas for improvement. We provide regular reports to the client that include insights and recommendations for ongoing optimization.",
      image: CDN + "/images/services/process-tab/seo-process/seo-process-img-5.svg",
      icon: "ml-baftwo-37-discount-legal-paper-bill-invoice-percentage",
    },
  ];

  return (
    <React.Fragment key={"seo"}>
      <InnerMain style={"body-style-1"}>
        <h1>Search Engine Optimization</h1>
        <p>
          Search Engine Optimization (SEO) is the practice of optimizing a website or online content to improve its ranking and visibility
          in search engine results app.
        </p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/seo.svg"}>
        <h2>Stand Out in the Crowd!</h2>
        <p>
          Standing out in the crowd with SEO involves more than just implementing a few optimization techniques. It requires a comprehensive
          and strategic approach that includes ongoing monitoring and adjustments to stay ahead of the competition. By partnering with an
          experienced SEO agency, you can create a customized SEO strategy that aligns with your business goals and helps you stand out in
          the crowded online marketplace.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default SEOPage;
