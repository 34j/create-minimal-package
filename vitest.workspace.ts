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
          { browser: 'firefox' },
          { browser: 'chromium' },
        ],
      },
    },
  },
])
