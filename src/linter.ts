import { rules } from "./config";
import lint from "@commitlint/lint";

// INFO: The logic which validates the PR title
async function lintPullRequestTitle(title: string) {
  const result = await lint(title, rules);

  if (!result.valid) {
    const errorMessages = result.errors.map((error) => error.message);
    throw new Error(errorMessages.join("; "));
  }
}

export default lintPullRequestTitle;
