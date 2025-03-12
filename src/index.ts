/**
 * > Zero-knowledge minimalistic template for creating a new npm package.
 *
 * Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [typescript-npm-package-template](https://github.com/Atry/typescript-npm-package-template/tree/main), which is great but unnecessarily complex and poorly maintained.
 *
 * ## Features
 *
 * The proof that the config is minimalistic is shown below. The main reason some lines of config are needed is because the project structure (`src`, `dist`, `test`) needs to be specified. We denote this reason `☆`.
 *
 * - Github
 *   - [Semantic Release](https://github.com/semantic-release/semantic-release) config with [Commitizen](https://github.com/search?q=commitizen) support from [semantic-release を使って Node パッケージのリリースワークフローを自動化する](https://zenn.dev/wakamsha/articles/learn-semantic-release)
 *   - [Issue Templates](https://github.com/34j/npm-package-template/tree/main/.github/ISSUE_TEMPLATE) from [pypackage-template/.github/ISSUE_TEMPLATE at main · browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/tree/main/.github/ISSUE_TEMPLATE)
 *   - [GitHub Actions](https://github.com/34j/npm-package-template/tree/main/.github/workflows) and [Codecov](https://about.codecov.io/) config is npm version of [pypackage-template/.github/workflows/ci.yml at main · browniebroke/pypackage-template](https://github.com/browniebroke/pypackage-template/blob/main/.github/workflows/ci.yml)
 * - [TypeScript](https://www.typescriptlang.org/) config inherits [@tsconfig/strictest](https://www.npmjs.com/package/@tsconfig/strictest) with minimal project-specific modifications (src/dist naming) [suggested by Fireship](https://www.npmjs.com/package/@tsconfig/strictest)
 * - Formatting
 *   - [Husky](https://github.com/typicode/husky) runs Lint Staged and typedoc
 *   - [Lint Staged](https://github.com/okonet/lint-staged) just calls ESLint
 *   - [ESLint](https://eslint.org/) config just inherits [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)
 * - Testing
 *   - [Jest](https://jestjs.io/) config is 4 lines, 2 lines for supporting Codecov and 2 lines for supporting Node.js
 * - Documentation
 *   - [GitHub Pages](https://pages.github.com/)
 *   - [TypeDoc](https://typedoc.org/) and  config is 4 lines, 1 line for automatic README.md generation and 2 lines for `☆`
 *   - [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown) does not need config
 *   - [Renovate](https://docs.renovatebot.com/) config just inherits [config:best-practices](https://docs.renovatebot.com/presets-config/#configbest-practices)
 *
 * - Removed Commitizen integration and VS Code stuff (from [ryansonshine/typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template)) because it's not maintained and complex. Commitizen can be still used (Semantic Release supports it natively).
 * - Removed Nix stuff (from [typescript-npm-package-template](https://github.com/Atry/typescript-npm-package-template/tree/main)) because it's not necessary.
 * - Removed Prettier due to @antfu/eslint-config's opinions.
 *
 * ## Getting started
 *
 * ### Set up your repository
 *
 * **Click the "Use this template" button.**
 *
 * Alternatively, create a new directory and then run:
 *
 * ```bash
 * curl -fsSL https://github.com/34j/npm-package-template/archive/main.tar.gz | tar -xz --strip-components=1
 * ```
 *
 * Replace `FULL_NAME`, `GITHUB_USER`, and `REPO_NAME` in the script below with your own details to personalize your new package:
 *
 * ```bash
 * FULL_NAME="John Smith"
 * GITHUB_USER="johnsmith"
 * REPO_NAME="my-cool-package"
 * sed -i.mybak "s/\([^@]\)34j/\1$GITHUB_USER/g; s/npm-package-template\|my-package-name/$REPO_NAME/g; s/Ryan Sonshine/$FULL_NAME/g" package.json package-lock.json src/index.ts
 * rm *.mybak
 * ```
 *
 * ### Add NPM Token
 *
 * Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.
 *
 * ### Add Codecov integration
 *
 * Enable the Codecov GitHub App [here](https://github.com/apps/codecov).
 *
 * **Remove everything from here and above**
 *
 * ---
 *
 * # npm-package-template
 *
 * [![npm package][npm-img]][npm-url]
 * [![Build Status][build-img]][build-url]
 * [![Downloads][downloads-img]][downloads-url]
 * [![Issues][issues-img]][issues-url]
 * [![Code Coverage][codecov-img]][codecov-url]
 * [![Commitizen Friendly][commitizen-img]][commitizen-url]
 * [![Semantic Release][semantic-release-img]][semantic-release-url]
 *
 * > My awesome module
 *
 * ## Install
 *
 * ```bash
 * npm install npm-package-template
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { myPackage } from 'npm-package-template';
 *
 * myPackage('hello');
 * //=> 'hello from my package'
 * ```
 *
 * [build-img]:https://github.com/34j/npm-package-template/actions/workflows/release.yml/badge.svg
 * [build-url]:https://github.com/34j/npm-package-template/actions/workflows/release.yml
 * [downloads-img]:https://img.shields.io/npm/dt/npm-package-template
 * [downloads-url]:https://www.npmtrends.com/npm-package-template
 * [npm-img]:https://img.shields.io/npm/v/npm-package-template
 * [npm-url]:https://www.npmjs.com/package/npm-package-template
 * [issues-img]:https://img.shields.io/github/issues/34j/npm-package-template
 * [issues-url]:https://github.com/34j/npm-package-template/issues
 * [codecov-img]:https://codecov.io/gh/34j/npm-package-template/branch/main/graph/badge.svg
 * [codecov-url]:https://codecov.io/gh/34j/npm-package-template
 * [semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
 * [semantic-release-url]:https://github.com/semantic-release/semantic-release
 * [commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
 * [commitizen-url]:http://commitizen.github.io/cz-cli/
 *
 * ## API Reference
 *
 * @module
 */

/**
 * Lorem ipsum.
 */
export const myPackage = (taco = ''): string => `${taco} from my package`
