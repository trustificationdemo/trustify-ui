import type React from "react";

import {
  AboutModal,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextVariants,
} from "@patternfly/react-core";

import ENV from "@app/env";
import useBranding from "@app/hooks/useBranding";

interface IButtonAboutAppProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRANSPARENT_1x1_GIF =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw== ";

export const AboutApp: React.FC<IButtonAboutAppProps> = ({
  isOpen,
  onClose,
}) => {
  const { about } = useBranding();

  return (
    <AboutModal
      isOpen={isOpen}
      onClose={onClose}
      productName={about.displayName}
      brandImageAlt="Logo"
      brandImageSrc={about.imageSrc ?? TRANSPARENT_1x1_GIF}
      trademark={`COPYRIGHT © 2020, ${new Date().getFullYear()}`}
    >
      <TextContent>
        <Text component={TextVariants.p}>
          {about.displayName} is a proactive service that assists in risk
          management of Open Source Software (OSS) packages and dependencies.{" "}
          {about.displayName} brings awareness to and remediation of OSS
          vulnerabilities discovered within the software supply chain.
        </Text>

        {about.documentationUrl ? (
          <Text component={TextVariants.p}>
            For more information refer to{" "}
            <Text
              component={TextVariants.a}
              href={about.documentationUrl}
              target="_blank"
            >
              {about.displayName} documentation
            </Text>
          </Text>
        ) : null}
      </TextContent>
      <TextContent className="pf-v5-u-py-xl">
        <TextContent>
          <TextList component="dl">
            <TextListItem component="dt">Version</TextListItem>
            <TextListItem component="dd">{ENV.VERSION}</TextListItem>
          </TextList>
        </TextContent>
      </TextContent>
    </AboutModal>
  );
};
