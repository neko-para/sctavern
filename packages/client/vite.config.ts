import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        {
          react: ['useState', 'useRef', 'useEffect', 'useContext'],
          '@mui/material': [
            'Box',
            'Button',
            'Container',
            'Grid',
            'Dialog',
            'DialogContent',
            'TextField',
            'Typography',
            ['Card', 'CardView'],
            'CardContent',
            'CardActions',
          ],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
