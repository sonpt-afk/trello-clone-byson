import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
function Workspaces() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
    <div>
      <Box>
      <Button
      sx={{color:'white'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu-workspaces' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        
        Workspaces
      </Button>
      <Menu
        id="basic-menu-workspaces"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem>
         <ContentCutIcon></ContentCutIcon>
          <ListItemText inset>Cut</ListItemText>
        </MenuItem>
        <MenuItem>
        <ContentCopyIcon></ContentCopyIcon>
          <ListItemText inset>Copy</ListItemText>
        </MenuItem>
        <MenuItem>
        <ContentPasteIcon></ContentPasteIcon>
          <ListItemText inset>Paste</ListItemText>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
        <Cloud></Cloud>
          <ListItemText inset>Web Clipboard</ListItemText>
        </MenuItem>
      </Menu>
      </Box>
    </div>
  )
}

export default Workspaces
