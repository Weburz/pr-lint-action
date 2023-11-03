import lint from "@commitlint/lint";

async function lintPullRequestTitle(title: string) {
  // TODO: Check if there is a user-defined "commitlint" config file, if not
  // use "default" configurations as defined by the GH Action itself.
  const config = {
    rules: {}
  };

  const result = await lint(title, config.rules);

  if (!result.valid) {
    const errorMessages = result.errors.map((error) => error.message);
    throw new Error(errorMessages.join("; "));
  }
}

export default lintPullRequestTitle;
