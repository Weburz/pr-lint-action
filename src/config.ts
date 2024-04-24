import {
  QualifiedRules,
  RuleConfigSeverity,
  UserConfig
} from "@commitlint/types";

export const rules: QualifiedRules = {
  "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  "body-empty": [RuleConfigSeverity.Error, "always"],
  "type-enum": [
    RuleConfigSeverity.Error,
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
  "type-case": [RuleConfigSeverity.Error, "always", "lowercase"],
  "type-empty": [RuleConfigSeverity.Error, "always"]
};

// INFO: These are the default configurations provided by the Action
const config: UserConfig = { rules };

export default config;
