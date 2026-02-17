---
name: deploy
description: Commit and push to GitHub Pages using personal account
disable-model-invocation: true
---

Deploy the portfolio site to GitHub Pages. Follow these steps exactly:

1. Run `git status` — if working tree is clean, tell the user "Nothing to deploy" and stop.
2. Stage changed files with `git add` (use specific filenames, not `-A`).
3. Commit with a descriptive message. Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`.
4. Switch to personal account: `gh auth switch --user erickaquino`
5. Push: `git push origin master`
6. Verify deployment: `gh api repos/erickaquino/erickaquino.github.io/pages/builds/latest --jq '.status'`
7. Switch back to work account: `gh auth switch --user ekw-erickaquino`
8. Report the commit hash and deployment status.
