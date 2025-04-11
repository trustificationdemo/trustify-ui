import type { Labels } from "@app/client";
import type { Severity } from "@app/client";

export type WithUiId<T> = T & { _ui_unique_id: string };

/** Mark an object as "New" therefore does not have an `id` field. */
export type New<T extends { id: number }> = Omit<T, "id">;

export interface HubFilter {
  field: string;
  operator?: "=" | "!=" | "~" | ">" | ">=" | "<" | "<=";
  value:
    | string
    | number
    | {
        list: (string | number)[];
        operator?: "AND" | "OR";
      };
}

export interface HubRequestParams {
  filters?: HubFilter[];
  sort?: {
    field: string;
    direction: "asc" | "desc";
  };
  page?: {
    pageNumber: number; // 1-indexed
    itemsPerPage: number;
  };
}

export interface HubPaginatedResult<T> {
  data: T[];
  total: number;
  params: HubRequestParams;
}

// Common

export type VulnerabilityStatus =
  | "fixed"
  | "not_affected"
  | "known_not_affected"
  | "affected";

export interface DecomposedPurl {
  type: string;
  name: string;
  namespace?: string;
  version?: string;
  qualifiers?: Labels;
  path?: string;
}

export type ExtendedSeverity = Severity | "unknown";
export const extendedSeverityFromSeverity = (
  value?: Severity | null,
): ExtendedSeverity => value ?? "unknown";

// User preferences

export interface WatchedSboms {
  sbom1Id: string | null;
  sbom2Id: string | null;
  sbom3Id: string | null;
  sbom4Id: string | null;
}
