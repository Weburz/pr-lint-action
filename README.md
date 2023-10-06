# PR Title Linter

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/Weburz/pr-lint-action?style=flat-square&logo=github&label=Commit%20Activity)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Weburz/pr-lint-action/qa-checks.yml?style=flat-square&logo=github&label=QA%20Checks&link=https%3A%2F%2Fgithub.com%2FWeburz%2Fpr-lint-action%2Factions%2Fworkflows%2Fqa-checks.yml)
![GitHub](https://img.shields.io/github/license/Weburz/pr-lint-action?style=flat-square&logo=github&label=License&link=https%3A%2F%2Fgithub.com%2FWeburz%2Fpr-lint-action%3Ftab%3DMIT-1-ov-file%23readme)
![GitHub repo size](https://img.shields.io/github/repo-size/Weburz/pr-lint-action?style=flat-square&logo=github&label=Repo%20Size)
![GitHub release (with filter)](https://img.shields.io/github/v/release/Weburz/pr-lint-action?style=flat-square&logo=github&label=Latest%20Release&link=https%3A%2F%2Fgithub.com%2FWeburz%2Fpr-lint-action%2Freleases%2Flatest)

**NOTE**: This a **WIP** project and **IS NOT** ready for production usage yet!

PR Title Linter is a GitHub Action which uses the
[CommitLint specifications](https://commitlint.js.org/#/concepts-commit-conventions)
behind-the-scenes to lint PR titles. The events which triggers the Action are:

1. When a fresh new PR is created/opened.
2. When a PR is synchronised or updated with the latest updates from the
   `main`/`master` branch.
3. When the title of an existing PR is edited/changed.

You can find an entire list of certain events which triggers the Action on
GitHub's documentations here -
[Events that trigger workflows - `pull_request_target`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target).
So, if you feel we are missing on a certain event please let us know or even
better sharing a PR 😉

## Usage and Development Guidelines

To use this Action to lint the PR titles of your repositories on GitHub, follow
the instructions detailed in this section.

All you will need is an YAML file, name it anything but at Weburz we like the
filename to be as `pr-lint.yml`. Store the `pr-lint.yml` file at the
`.github/workflows` directory. If you want to learn more about using existing
GitHub Actions for certain workflows, refer to the documentations at -
[About Workflows](https://docs.github.com/en/actions/using-workflows).

That said, with the `pr-lint.yml` file created, copy the following contents to
it:

```yaml
name: Lint PR Titles

on:
  pull_request_target:
    types:
      - opened
      - edited
      - synchronize

jobs:
  pr-lint:
    name: Lint PR Titles
    runs-on: ubuntu-latest
    steps:
      - uses: Weburz/pr-lint-action@v0.0.1
```

Push the latest commits to a remote repository and then create an example PR
which should trigger the Action thereafter. If you stumbled across a bug or an
unintended behaviour, please report it to us at the earliest.

## Licensing and Distribution

The contents of this repository are licensed under an open-source license - MIT
License. Therefore you are free to copy, modify and distribute the source as you
see fit for both commercial and non-commercial usage as long as the usage does
not breach the terms and conditions (T&Cs) of the license. To learn more about
the T&Cs, please refer to the [LICENSE](./LICENSE) document for a more detailed
explanation!
