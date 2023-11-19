import { Box, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLES = {
  color: "#fff",
  bgcolor: "#000",
  border: "none",
  borderRadius: "5px",
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
  "&:hover": {
    bgcolor: "#000",
  },
};

function BoardBar() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          justifyContent: "space-between",
          gap: 2,
          paddingX: 2,
          display: "flex",
          alignItems: "center",
          overflowX: "auto",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#3498db",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            sx={{
              color: "#fff",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#3498db",
              border: "none",
              borderRadius: "5px",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
              "&:hover": {
                bgcolor: "#2980b9",
              },
            }}
            icon={<DashboardIcon />}
            label="TrungSon MERN STACK Board"
            onClick={() => {}}
          />
          <Chip
            sx={{
              color: "#fff",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#3498db",
              border: "none",
              borderRadius: "5px",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
              "&:hover": {
                bgcolor: "#2980b9",
              },
            }}
            label="Public/Private Workspace"
            icon={<VpnLockIcon />}
            onClick={() => {}}
          />
          <Chip
            sx={{
              color: "#fff",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#3498db",
              border: "none",
              borderRadius: "5px",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
              "&:hover": {
                bgcolor: "#2980b9",
              },
            }}
            label="Add to Google Drive "
            icon={<AddToDriveIcon />}
            onClick={() => {}}
          />
          <Chip
            sx={{
              color: "#fff",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#3498db",
              border: "none",
              borderRadius: "5px",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
              "&:hover": {
                bgcolor: "#2980b9",
              },
            }}
            label="Automation"
            icon={<BoltIcon />}
            onClick={() => {}}
          />
          <Chip
            sx={{
              color: "#fff",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#000" : "#3498db",
              border: "none",
              borderRadius: "5px",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
              "&:hover": {
                bgcolor: "#2980b9",
              },
            }}
            label="Filter"
            icon={<FilterListIcon />}
            onClick={() => {}}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<PersonAddIcon />}
            sx={{
              color: "#fff",
              border: "1px solid #fff",
              "&:hover": {
                border: "0.5px solid #fff",
              },
            }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={3}
            sx={{
              "& .MuiAvatar-root": {
                width: 34,
                height: 34,
                fontSize: 16,
              },
            }}
          >
            <Tooltip title="sonpt">
              <Avatar
                alt=""
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/017lok-ons-mas-dsk-02-0-1574179195.jpg"
              />
            </Tooltip>

            <Tooltip title="sonpt">
              <Avatar
                alt=""
                src="
          https://i0.wp.com/www.heyuguys.com/images/2014/01/Loki.jpg?fit=1500%2C720
          "
              />
            </Tooltip>
            <Tooltip title="sonpt">
              <Avatar
                alt=""
                src="
          https://i0.wp.com/www.heyuguys.com/images/2014/01/Loki.jpg?fit=1500%2C720
          "
              />
            </Tooltip>
            <Tooltip title="sonpt">
              <Avatar
                alt=""
                src="
          https://i0.wp.com/www.heyuguys.com/images/2014/01/Loki.jpg?fit=1500%2C720
          "
              />
            </Tooltip>
            <Tooltip title="sonpt">
              <Avatar
                alt=""
                src="
          https://i0.wp.com/www.heyuguys.com/images/2014/01/Loki.jpg?fit=1500%2C720
          "
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </div>
  );
}

export default BoardBar;
