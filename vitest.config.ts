import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      // v8 is incompatible with firefox
      provider: 'istanbul',
    },
  },
})
