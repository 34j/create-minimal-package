import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      name: 'node',
      environment: 'node',
    },
  },
  {
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
