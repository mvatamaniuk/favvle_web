import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    gradient: { main: string; lightGreen: string; green: string }
  }

  interface PaletteOptions extends MuiPaletteOptions {
    gradient?: { main: string; lightGreen: string; green: string }
  }
}
