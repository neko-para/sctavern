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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
