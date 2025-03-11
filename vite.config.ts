import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Plugin } from 'vite'

// CSV plugin to handle CSV imports
function csvPlugin(): Plugin {
  return {
    name: 'vite-plugin-csv',
    transform(code, id) {
      if (id.endsWith('.csv')) {
        const lines = code.split('\n')
        const headers = lines[0].split(',').map(header => header.trim())

        const result = lines.slice(1)
          .filter(line => line.trim())
          .map(line => {
            const values = line.split(',')
            return headers.reduce((obj, header, index) => {
              obj[header] = values[index]?.trim() || ''
              return obj
            }, {} as Record<string, string>)
          })

        return {
          code: `export default ${JSON.stringify(result)}`,
          map: null
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), csvPlugin()],
  assetsInclude: ['**/*.csv'],
  base: process.env.NODE_ENV === 'production' ? '/womens-day-bingo/' : '/',
})
