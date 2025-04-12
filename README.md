# create-minimal-package

Zero-knowledge ***minimalistic*** template for creating a new npm package.

---

**📘Docs Demo**: [https://34j.github.io/create-minimal-package/](https://34j.github.io/create-minimal-package/)

**📦️NPM Package Demo**: [https://www.npmjs.com/package/create-minimal-package](https://www.npmjs.com/package/create-minimal-package)

---

## Features

- The **proof** that the config is ***minimalistic*** is shown below.
- The main reason (`☆`) of the slight complexity is the need to specify the project structure (`src`, `dist`, `test`).

- 👾Github
  - [📦🚀semantic-release](https://github.com/semantic-release/semantic-release) & [Commitizen](https://github.com/search?q=commitizen): from [this article](https://zenn.dev/wakamsha/articles/learn-semantic-release)
  - [New Issue Templates](https://github.com/34j/create-minimal-package/tree/main/.github/ISSUE_TEMPLATE): from [browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/tree/main/.github/ISSUE_TEMPLATE)
  - [💨GitHub Actions](https://github.com/34j/create-minimal-package/tree/main/.github/workflows) + [📊Codecov](https://about.codecov.io/): npm version of [browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/blob/main/.github/workflows/ci.yml)
  - [🧱Renovate](https://docs.renovatebot.com/): inherits [config:best-practices](https://docs.renovatebot.com/presets-config/#configbest-practices)
- [⚙TypeScript](https://www.typescriptlang.org/):`tsconfig.json`: inherits [@tsconfig/strictest](https://www.npmjs.com/package/@tsconfig/strictest): 4 lines for `☆`, [3 lines for ES types](https://youtu.be/H91aqUHn8sE?t=148)
- ✨️Formatting
  - [⚠️pre-commit](https://pre-commit.com/) and [pre-commit.ci](https://pre-commit.ci/): from [browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/tree/main/.github/ISSUE_TEMPLATE) + [mirrors-eslint](https://github.com/pre-commit/mirrors-eslint) (⏪️[🐶Husky](https://github.com/typicode/husky) + [Lint Staged](https://github.com/okonet/lint-staged) for better CI support)
  - [ESLint](https://eslint.org/): inherits [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)
- 📦Packageing
  - [pnpm](https://pnpm.io/) (⏪️npm)
- ⚠️ Testing
  - [⚡️Vitest](https://vitest.dev/) (⏪️[👢Jest](https://jestjs.io/)): several lines for browser testing (optional, can be removed if Node.js only)
- 📖Documentation
  - [🌐GitHub Pages](https://pages.github.com/)
  - [📖TypeDoc](https://typedoc.org/): 2 lines for `☆` `P`
- ❄Nix Support (Optional, only needed for Nix users)
  - [❄`nix develop --ignore-environment`](https://nix.dev/manual/nix/latest/command-ref/new-cli/nix3-develop): many lines for Playwright support (optional, can be removed if Node.js only)

<details>
<summary>Removed Features (to achieve minimalism)</summary>

- Removed Commitizen integration and VS Code stuff (from [ryansonshine/typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template)) because it's not maintained and complex. Commitizen can be still used (Semantic Release supports it natively).
- Removed Prettier due to [@antfu/eslint-config's opinions](https://github.com/antfu/eslint-config?tab=readme-ov-file#prettier) and [mirrors-prettier](https://github.com/pre-commit/mirrors-prettier) being archived.

</details>

## Quickstart

1. Click the "Use this template" button.
2. Replace `GITHUB_USER` and `REPO_NAME` using `sed`:
  ```bash
  GITHUB_USER="johnsmith"
  REPO_NAME="my-cool-package"
  sed -i.tmp "s/\([^@]\)34j/\1$GITHUB_USER/g; s/create-minimal-package\|my-package-name/$REPO_NAME/g;" package.json src/index.ts README.md
  sed -i.tmp 's/"version": "[0-9.]*"/"version": "0.0.0"/' package.json
  rm *.tmp
  rm src/*.tmp
  rm CHANGELOG.md
  ```
3. [Create](https://www.npmjs.com/settings/34j/tokens/) and add `NPM_TOKEN` to [`Settings/Secrets and variables/Actions/Repository secrets`](https://github.com/34j/create-minimal-package/settings/secrets/actions).
4. [Create][codecov-url] and add `CODECOV_TOKEN` to [`Settings/Secrets and variables/Actions/Repository secrets`](https://github.com/34j/create-minimal-package/settings/secrets/actions).
5. Install GitHub Apps, [pre-commit.ci **lite**](https://github.com/apps/pre-commit-ci-lite/installations/select_target) and [Codecov](https://github.com/apps/codecov/installations/select_target).
6. Install [pre-commit](https://pre-commit.com/) using [`uv`](https://github.com/astral-sh/uv) by `uv tool install pre-commit` and install hooks by `pre-commit install`.
7. Enable Github Pages and set `Source` to `GitHub Actions` from [`Settings/Pages/Build and deployment`](https://github.com/34j/create-minimal-package/settings/pages)
8. Remove everything above `---`.

> Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [typescript-npm-package-template](https://github.com/Atry/typescript-npm-package-template/tree/main), which is great but unnecessarily complex and poorly maintained.

---

# create-minimal-package

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

---

**📘Documentation**: [https://34j.github.io/create-minimal-package/](https://34j.github.io/create-minimal-package/)

**📦️NPM Package**: [https://www.npmjs.com/package/create-minimal-package](https://www.npmjs.com/package/create-minimal-package)

---

TODO: Project Description.

## Installation

```bash
npm install create-minimal-package
```

## Usage

```ts
import { myPackage } from 'create-minimal-package'

myPackage('hello')
// => 'hello from my package'
```

[build-img]:https://github.com/34j/create-minimal-package/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/34j/create-minimal-package/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/create-minimal-package
[downloads-url]:https://www.npmtrends.com/create-minimal-package
[npm-img]:https://img.shields.io/npm/v/create-minimal-package
[npm-url]:https://www.npmjs.com/package/create-minimal-package
[issues-img]:https://img.shields.io/github/issues/34j/create-minimal-package
[issues-url]:https://github.com/34j/create-minimal-package/issues
[codecov-img]:https://codecov.io/gh/34j/create-minimal-package/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/34j/create-minimal-package
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
