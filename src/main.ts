import * as github from "@actions/github";

async function run() {
  // Check if the workflow was triggered by a Pull Request event
  if (github.context.eventName === "pull_request") {
    const pullRequestTitle = github.context.payload.pull_request?.title;

    console.log(`Pull Request Title: ${pullRequestTitle}`);
  } else {
    console.log("This workflow was not triggered by a Pull Request event.");
  }
}

export default run;
