import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        {
          react: [
            'useState',
            'useRef',
            'useMemo',
            'useEffect',
            'useCallback',
            'useContext',
            'Fragment',
          ],
          '@mui/material': [
            'Accordion',
            'AccordionSummary',
            'AccordionDetails',
            'Box',
            'Button',
            'Container',
            'Checkbox',
            'Dialog',
            'DialogContent',
            'DialogActions',
            'Divider',
            'FormControl',
            'FormControlLabel',
            'Grid',
            'InputLabel',
            'MenuItem',
            'Select',
            'Step',
            'Stepper',
            'StepLabel',
            'Tab',
            'Tabs',
            'TextField',
            'Typography',
            ['Card', 'CardView'],
            'CardContent',
            'CardActions',
          ],
          immer: ['produce'],
        },
      ],
    }),
  ],
  base: mode === 'direct' ? '/' : '/sctavern/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: mode === 'direct' ? 'dist-direct' : 'dist',
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            if (id.includes('sctavern/packages')) {
              return 'sctavern'
            }
            return 'vender'
          }
        },
      },
      external: ['chalk'],
    },
  },
  server: {
    proxy: {
      '/wsapi': {
        target: 'ws://localhost:6658',
        ws: true,
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:6658',
        changeOrigin: true,
      },
    },
  },
}))
