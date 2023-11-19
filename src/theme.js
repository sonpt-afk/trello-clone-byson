import { deepOrange, orange, cyan, blue } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "58px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
// Create a theme instance.
const theme = extendTheme(
  {
    trello: {
      appBarHeight: APP_BAR_HEIGHT,
      boardBarHeight: BOARD_BAR_HEIGHT,
    },
    colorSchemes: {
      light: {
        palette: {
          primary: blue,
          secondary: deepOrange,
        },
      },

      dark: {
        palette: {
          primary: cyan,
          secondary: orange,
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "*::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#dcdce1",
              borderRadius: "8px",
            },
            "*::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#fff",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            // color: theme.palette.primary.main,
            fontSize: "0.875rem",
            // ".MuiOutlinedInput-notchedOutline": {
            //   borderColor: theme.palette.primary.light,
            // },
            // "&:hover": {
            //   ".MuiOutlinedInput-notchedOutline": {
            //     borderColor: theme.palette.primary.main,
            //   },
            // },
            "& fieldset": {
              borderWidth: "0.5px !important",
            },
            "&:hover fieldset": {
              borderWidth: "1px !important",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "1px !important",
            },
          }),
        },
      },
    },
  }
  // ...other properties
);
export default theme;
