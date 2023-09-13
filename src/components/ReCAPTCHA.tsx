import React, { LegacyRef } from "react";
import ReCaptcha from "react-google-recaptcha";

import { CAPTCHA_SITE_KEY } from "@utils/constant";

interface IReCAPTCHAProps {
  refKey: LegacyRef<ReCaptcha> | undefined;
}

const ReCAPTCHA = ({ refKey }: IReCAPTCHAProps) => {
  return (
    <ReCaptcha
      sitekey={CAPTCHA_SITE_KEY}
      ref={refKey}
      onChange={() => console.log("ReCaptcha Completed - " + Date.now())}
      onErrored={() => console.log("ReCaptcha Errored - " + Date.now())}
      onExpired={() => console.log("ReCaptcha Expired - " + Date.now())}
      size={"invisible"}
      badge={"bottomright"}
      className="rc-just-align"
    />
  );
};

export { ReCAPTCHA };
