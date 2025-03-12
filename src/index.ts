/**
 * > Template to kickstart creating a Node.js module using TypeScript and VSCode
 *
 * Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [typescript-npm-package-template](https://github.com/Atry/typescript-npm-package-template/tree/main)
 *
 * ## Features
 *
 * - [Semantic Release](https://github.com/semantic-release/semantic-release)
 * - [Issue Templates](https://github.com/34j/npm-package-template/tree/main/.github/ISSUE_TEMPLATE)
 * - [GitHub Actions](https://github.com/34j/npm-package-template/tree/main/.github/workflows)
 * - [Codecov](https://about.codecov.io/)
 * - [VSCode Launch Configurations](https://github.com/34j/npm-package-template/blob/main/.vscode/launch.json)
 * - [TypeScript](https://www.typescriptlang.org/)
 * - [Husky](https://github.com/typicode/husky)
 * - [Lint Staged](https://github.com/okonet/lint-staged)
 * - [Commitizen](https://github.com/search?q=commitizen)
 * - [Jest](https://jestjs.io/)
 * - [ESLint](https://eslint.org/)
 * - [GitHub Pages](https://pages.github.com/)
 * - [TypeDoc](https://typedoc.org/)
 * - [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown)
 * - [Renovate](https://docs.renovatebot.com/)
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
