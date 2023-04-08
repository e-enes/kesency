import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import CaseStudies from "./components/case-studies/CaseStudies";
import About from "./components/about/About";
import WebsiteDesign from "./components/services/website/design/WebsiteDesign";
import WebsiteDevelopment from "./components/services/website/development/WebsiteDevelopment";
import SocialMediaMarketing from "./components/services/social-media-marketing/SocialMediaMarketing";
import LogoBranding from "./components/services/logo-branding/LogoBranding";
import MobileAppDesign from "./components/services/mobile-app-design/MobileAppDesign";
import SearchEngineOptimization from "./components/services/search-engine-optimization/SearchEngineOptimization";
import PayPerClick from "./components/services/pay-per-click/PayPerClick";
import Account from "./components/account/Account";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsAndConditions from "./components/legal/TermsConditions";
import LegalNotice from "./components/legal/LegalNotice";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case/studies" element={<CaseStudies />} />
            <Route path="/about/us" element={<About />} />
            <Route path="/service/website/design" element={<WebsiteDesign />} />
            <Route path="/service/website/development" element={<WebsiteDevelopment />} />
            <Route path="/service/social/media/marketing" element={<SocialMediaMarketing />} />
            <Route path="/service/logo/and/branding" element={<LogoBranding />} />
            <Route path="/service/mobile/app/design" element={<MobileAppDesign />} />
            <Route path="/service/search/engine/optimization" element={<SearchEngineOptimization />} />
            <Route path="/service/pay/per/click" element={<PayPerClick />} />
            <Route path="/my/account" element={<Account />} />
            <Route path="/privacy/policy" element={<PrivacyPolicy />} />
            <Route path="/terms/and/conditions" element={<TermsAndConditions />} />
            <Route path="/legal/notice" element={<LegalNotice />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;