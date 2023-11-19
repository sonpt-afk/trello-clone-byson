import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";

import DarkModeOutlinedICon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

import LightModeIcon from "@mui/icons-material/LightMode";

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "50px";
function BoardContent() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#3498db",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
        }}
      >
        {/* BOX COLUMN */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
          }}
        >
          <Box sx={{}}>Header</Box>
          <Box sx={{}}>list card</Box>
          <Box sx={{}}>Footer</Box>
        </Box>
      </Box>
    </div>
  );
}

export default BoardContent;
