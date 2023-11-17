import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DarkModeOutlinedICon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import LightModeIcon from '@mui/icons-material/LightMode'
import Container from '@mui/material/Container';
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




function App() {


  return (
    <>
    <Container disableGutters maxWidth={false}  sx={{height: '100vh'}}>
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect></ModeSelect>
    </Box>
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,

      display: 'flex',
      alignItems: 'center'
    }}>Board Bar</Box>
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height:(theme) =>  `calc(100vh - ${ theme.trello.appBarHeight } - ${ theme.trello.boardBarHeight })}`,
      display: 'flex',
      alignItems: 'center'
    }}>Content</Box>
    </Container>
      
    </>
  )
}

export default App
