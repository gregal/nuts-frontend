import { createTheme } from '@mui/material'
import { blue, common } from '@mui/material/colors'

export const LightTheme = createTheme(
    {
        palette: {
            primary: {
                main: blue[700],
                dark: blue[800],
                light: blue[500],
                contrastText: common.white
            }
        }
    }
)