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

function ModeSelect() {
    const {mode,setMode} = useColorScheme();
    const handleChange = (event) => {
      const selectedMode = event.target.value;
      setMode(selectedMode)
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          label="Mode"
          onChange={handleChange}
          value={mode}
        >
        
          <MenuItem value='light'>
            <div style={{display:'flex', alignItems: 'center',gap:'8px'}}>
            <LightModeIcon/>
            Light
            </div>
            </MenuItem>
          <MenuItem value='dark'>
            <Box sx={{display:'flex',alignItems: 'center',gap:1}}>
        <DarkModeOutlinedICon/>
        
            Dark
            </Box>
            </MenuItem>
          <MenuItem value='system'>
          <Box sx={{display:'flex',alignItems: 'center',gap:1}}>
  
          <SettingsBrightnessIcon/>
            System
        </Box>
            
            </MenuItem>
        </Select>
      </FormControl>
    );
  }
  

export default ModeSelect
