import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const LogoPage = () => {
  const process = [
    {
      title: "Exploration",
      description:
        "The consultation stage is where we begin by learning about our client's business, goals, and objectives. We conduct an in-depth consultation to understand their needs, target audience, and project requirements. We also review any existing branding and marketing materials to ensure that the new logo and branding align with the company's existing visual identity.",
      image:
        CDN +
        "/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-1.svg",
      icon: "ml-des-21-Transform-shape-graphics-design-tool-interface-layers-tool-bar",
    },
    {
      title: "Sketches",
      description:
        "Once we have a clear understanding of our client's needs and requirements, we move on to the sketches stage. Our team of experienced designers create multiple sketches and concepts for the new logo and branding. These sketches are based on our client's requirements and feedback from the consultation stage.",
      image:
        CDN +
        "/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-2.svg",
      icon: "ml-des-62-Precision-compasses-graphics-design-tool-interface",
    },
    {
      title: "Digitization",
      description:
        "After the sketches stage, we digitize the best concepts and refine them further. We use design software such as Adobe Illustrator to create vector versions of the sketches, which allows us to easily modify and resize the logo without losing quality. During this stage, we experiment with different typefaces, layouts, and shapes to create a unique and memorable logo.",
      image:
        CDN +
        "/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-3.svg",
      icon: "ml-des-35-divide-unite-intersect-exclude-graphics-design-tool-interface",
    },
    {
      title: "Color",
      description:
        "Once we have a strong vector version of the logo, we move on to the color stage. We experiment with different color palettes to find the perfect combination that aligns with our client's branding guidelines and aesthetic preferences. We also ensure that the colors chosen are appropriate for the industry and target audience.",
      image:
        CDN +
        "/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-4.svg",
      icon: "ml-des-49-color-picker-paint-graphics-design-tool-interface",
    },
    {
      title: "Final Logo",
      description:
        "After the color stage, we present our client with a selection of final logo options. These logos are refined and polished versions of the best concepts from the previous stages. Our client selects their preferred logo, and we provide them with the necessary files and assets for their branding and marketing materials. We also provide guidelines on how to use the logo to ensure that it is consistent across all mediums and applications.",
      image:
        CDN +
        "/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-5.svg",
      icon: "ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop",
    },
  ];

  return (
    <React.Fragment key={"logo"}>
      <InnerMain style={"body-style-1"}>
        <h1>Logo &amp; Branding</h1>
        <p>We’ll create custom tailored logo specifically for your company.</p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/logo-and-branding.svg"}>
        <h2>Why Branding Matters?</h2>
        <p>
          Branding is an essential element of any business or organization, and it plays a critical
          role in attracting and retaining customers. A brand is more than just a logo; it
          encompasses the entire image and perception of a business, including its products,
          services, values, and customer experience. Branding matters because it helps to
          differentiate a business from its competitors and creates a lasting impression on
          customers.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default LogoPage;
