import type React from "react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  Title,
} from "@patternfly/react-core";
import SearchIcon from "@patternfly/react-icons/dist/esm/icons/search-icon";

export const StateNoResults: React.FC = () => {
  return (
    <EmptyState variant={EmptyStateVariant.sm}>
      <EmptyStateIcon icon={SearchIcon} />
      <Title headingLevel="h2" size="lg">
        No results found
      </Title>
      <EmptyStateBody>
        No results match the filter criteria. Remove all filters or clear all
        filters to show results.
      </EmptyStateBody>
    </EmptyState>
  );
};
