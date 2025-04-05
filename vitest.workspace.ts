import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    // node test config
    test: {
      name: 'node',
    },
  },
  {
    // browser test config
    test: {
      name: 'browser',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
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
])
