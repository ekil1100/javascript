import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        coverage: {
            reporter: ['lcov', 'text', 'json', 'html'],
        },
        reporters: 'verbose',
    },
})
