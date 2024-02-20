import { QualifiedRules, UserConfig } from "@commitlint/types";

export const rules: QualifiedRules = {
  "header-max-length": [2, "always", 72],
  "body-empty": [2, "always"],
  "type-enum": [
    2,
    "always",
    [
      "build",
      "chore",
      "ci",
      "docs",
      "feat",
      "fix",
      "perf",
      "refactor",
      "revert",
      "style",
      "test"
    ]
  ],
  "type-case": [2, "always", "lowercase"],
  "type-empty": [2, "always"]
};

// INFO: These are the default configurations provided by the Action
const config: UserConfig = { rules };

export default config;
