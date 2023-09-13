import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const DevelopmentPage = () => {
  const process = [
    {
      title: "Discovery and Planning",
      description:
        "The discovery and planning stage is where we begin by learning about our client's business, goals, and objectives. We conduct an in-depth consultation to understand their needs, target audience, and project requirements. From there, we create a comprehensive plan that outlines the scope of the project, timelines, and milestones. We also create a site map and wireframes to ensure that the website's structure and layout align with our client's requirements.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-1.svg",
      icon: "ml-edu-86-People",
    },
    {
      title: "Design and Development",
      description:
        "Once the planning stage is complete, we move on to the design and development stage. Our team of experienced designers and developers work collaboratively to create a custom design that aligns with our client's branding guidelines and aesthetic preferences. From there, we begin coding the website using front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js, PHP, and more. During the development stage, we ensure that the website is optimized for performance, security, and accessibility. We also conduct extensive testing to ensure that the website functions correctly on all devices and browsers.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-2.svg",
      icon: "ml-des-19-Transform-shape-graphics-design-tool-interface",
    },
    {
      title: "Launch and Maintenance",
      description:
        "After the design and development stage is complete, we move on to the launch and maintenance stage. We deploy the website to a web hosting service and ensure that it's accessible to users. Additionally, we provide ongoing maintenance and support to ensure that the website remains up-to-date, secure, and fully functional. This includes updating software, fixing bugs, and making any necessary changes to the website based on user feedback or changing requirements.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-3.svg",
      icon: "ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop",
    },
  ];

  return (
    <React.Fragment key={"website-development"}>
      <InnerMain style={"body-style-1"}>
        <h1>Website Development</h1>
        <p>The backbone of any great company is its people.</p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/web-design.svg"}>
        <h2>Full-Stack Web Development</h2>
        <p>
          In full-stack web development, the front-end layer deals with the user interface and user
          experience of the application, while the back-end layer handles the server-side logic,
          database management, and API development. A full-stack developer should be capable of
          understanding and working with all layers of the stack, as well as deploying and
          maintaining web applications in production.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default DevelopmentPage;
