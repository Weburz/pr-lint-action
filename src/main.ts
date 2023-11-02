import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const token = core.getInput("GITHUB_TOKEN");
  const octokit = github.getOctokit(token);

  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: "Weburz",
    repo: "pr-lint",
    pull_number: 1,
    mediaType: {
      format: "diff"
    }
  });

  try {
    console.log(pullRequest);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

export default run;
