/**
NOTE: This is a WIP project and is not ready yet!

Things to-do:
  1. Ensure if a "commitling.config.js|ts" file exists then use it instead of
     custom configurations
  2. Ensure the project is bug free
  3. Write some tests for the project
*/
import lintPullRequestTitle from "./linter";
import { error, getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

async function run() {
  try {
    const token = getInput("GITHUB_TOKEN");
    const octokit = getOctokit(token);
    const pullRequestContext = context.payload.pull_request;

    if (!pullRequestContext) {
      error(
        `This action can only be invoked in "pull_request" or
        "pull_request_target" events!`
      );
    }

    const owner = pullRequestContext?.base.user.login;
    const repo = pullRequestContext?.base.repo.name;

    const { data: pullRequest } = await octokit.rest.pulls.get({
      owner: owner,
      repo: repo,
      pull_number: pullRequestContext?.number || 0
    });

    await lintPullRequestTitle(pullRequest.title);
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
}

export default run;
