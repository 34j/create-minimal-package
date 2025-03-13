# create-minimal-package

Zero-knowledge ***minimalistic*** template for creating a new npm package.

---

**Docs Demo**: [https://34j.github.io/create-minimal-package/](https://34j.github.io/create-minimal-package/)

**Package Demo**: [https://www.npmjs.com/package/create-minimal-package](https://www.npmjs.com/package/create-minimal-package)

---

## Features

- The **proof** that the config is ***minimalistic*** is shown below.
- The main reason of the slight complexity is because of the project structure (`src`, `dist`, `test`) needs to be specified, denoted by `☆`.

- 👾Github
  - [📦🚀semantic-release](https://github.com/semantic-release/semantic-release) & [Commitizen](https://github.com/search?q=commitizen): from [this article](https://zenn.dev/wakamsha/articles/learn-semantic-release)
  - [New Issue Templates](https://github.com/34j/create-minimal-package/tree/main/.github/ISSUE_TEMPLATE): from [browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/tree/main/.github/ISSUE_TEMPLATE)
  - [💨GitHub Actions](https://github.com/34j/create-minimal-package/tree/main/.github/workflows) and [Codecov](https://about.codecov.io/): npm version of [browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/blob/main/.github/workflows/ci.yml)
- [⚙TypeScript](https://www.typescriptlang.org/):`tsconfig.json`,`tsconfig.build.json`(w/o tests): inherits [@tsconfig/strictest](https://www.npmjs.com/package/@tsconfig/strictest): 4 lines for `☆`, [3 lines for ES types](https://youtu.be/H91aqUHn8sE?t=148)
- ✨️Formatting
  - [🐶Husky](https://github.com/typicode/husky): runs Lint Staged and typedoc
  - [Lint Staged](https://github.com/okonet/lint-staged): calls ESLint
  - [ESLint](https://eslint.org/): inherits [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)
- ⚠️ Testing
  - [👢Jest](https://jestjs.io/): 2 lines for supporting Codecov and 2 lines for supporting Node.js `P`
- 📖Documentation
  - [🌐GitHub Pages](https://pages.github.com/)
  - [📖TypeDoc](https://typedoc.org/): 2 lines for `☆` `P`
  - [🧱Renovate](https://docs.renovatebot.com/): inherits [config:best-practices](https://docs.renovatebot.com/presets-config/#configbest-practices)

<details>
<summary>Removed Features (to achieve minimalism)</summary>
- Removed Commitizen integration and VS Code stuff (from [ryansonshine/typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template)) because it's not maintained and complex. Commitizen can be still used (Semantic Release supports it natively).
- Removed Nix stuff and typedoc-plugin-markdown (from [typescript-npm-package-template](https://github.com/Atry/typescript-npm-package-template/tree/main)) because it's not necessary.
- Removed Prettier due to [@antfu/eslint-config's opinions](https://github.com/antfu/eslint-config?tab=readme-ov-file#prettier).
</details>

## Getting started

### Set up your repository

1. **Click the "Use this template" button.**
2. Replace `FULL_NAME`, `GITHUB_USER`, and `REPO_NAME` using `sed`:
  ```bash
  FULL_NAME="John Smith"
  GITHUB_USER="johnsmith"
  REPO_NAME="my-cool-package"
  sed -i.mybak "s/\([^@]\)34j/\1$GITHUB_USER/g; s/create-minimal-package\|my-package-name/$REPO_NAME/g; s/Ryan Sonshine/$FULL_NAME/g" package.json package-lock.json src/index.ts
  rm *.mybak
  ```
3. Add `NPM_TOKEN` to `Settings/Secrets and variables/Actions/Repository secrets`.
4. Enable [Codecov GitHub App](https://github.com/apps/codecov) and add `CODECOV_TOKEN` to `Settings/Secrets and variables/Actions/Repository secrets`.
5. Remove everything above `---`.

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

**Documentation**: [https://34j.github.io/create-minimal-package/](https://34j.github.io/create-minimal-package/)

**Source Code**: [https://github.com/34j/create-minimal-package](https://github.com/34j/create-minimal-package)

**Package**: [https://www.npmjs.com/package/create-minimal-package](https://www.npmjs.com/package/create-minimal-package)

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
