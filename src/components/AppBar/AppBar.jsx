import ModeSelect from "../ModeSelect/ModeSelect";
import { Box, InputAdornment } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Template from "./Menus/Template";
import Starred from "./Menus/Starred";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function AppBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Box
        px={2}
        sx={{
          // backgroundColor: 'primary.light',
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.5rem",
          gap: 2,
          overflowX: "auto",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1565c0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AppsIcon sx={{ color: "white" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              fontSize="small"
              sx={{ color: "white" }}
            />
            <Typography
              variant="span"
              sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "white" }}
            >
              TRELLO{" "}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Workspaces></Workspaces>
            <Recent></Recent>
            <Starred></Starred>
            <Template></Template>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "none",
                "&:hover": { border: "none" },
              }}
            >
              <LibraryAddIcon />
              <Typography
                variant="span"
                sx={{ fontSize: "0.75rem", fontWeight: "bold", color: "white" }}
              >
                CREATE{" "}
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size="small"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: searchValue ? "white" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSearchValue("")}
                />
              ),
            }}
            sx={{
              minWidth: "120px",
              maxWidth: "170px",
              "& label": { color: "white" },
              "& input": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />

          <ModeSelect></ModeSelect>
          <Tooltip title="notification">
            <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon sx={{ color: "white" }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
          </Tooltip>
          <Profiles></Profiles>
        </Box>
      </Box>
    </div>
  );
}

export default AppBar;
