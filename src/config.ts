import { UserConfig } from "@commitlint/types";

// INFO: These are the default configurations provided by the Action
const config: UserConfig = {
  rules: {
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
  }
};

export default config;
