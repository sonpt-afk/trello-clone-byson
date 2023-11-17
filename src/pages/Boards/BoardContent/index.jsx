import { InputLabel,Select,MenuItem,FormControl}
 from "@mui/material";
 
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
    useColorScheme,
  } from '@mui/material/styles';
 import Box from '@mui/material/Box';

 import DarkModeOutlinedICon from '@mui/icons-material/DarkModeOutlined'
 import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

  import LightModeIcon from '@mui/icons-material/LightMode'

function BoardContent() {
  return (
    <div>
      <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height:(theme) =>  `calc(100vh - ${ theme.trello.appBarHeight } - ${ theme.trello.boardBarHeight })}`,
      display: 'flex',
      alignItems: 'center'
    }}>Content</Box>
    </div>
  )
}

export default BoardContent
