import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        // node test config
        test: {
          name: 'node',
          include: ['./test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        },
      },
      {
        // browser test config
        test: {
          name: 'browser',
          include: ['./test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
              // It is highly recommend to give up firefox and webkit support to use v8 coverage provider, which is considered more stable.
              // { browser: 'firefox' },
              // Current flake.nix does not support webkit.
              // { browser: 'webkit' },
            ],
          },
        },
      },
    ],
  },
})
