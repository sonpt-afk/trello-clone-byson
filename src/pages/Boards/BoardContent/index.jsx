import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import Tooltip from "@mui/material/Tooltip";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";
function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#3498db",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <Box
          sx={{
            bgcolor: "inherit",
            width: "100%",
            height: "100%",
            overflowX: "auto",
            overflowY: "hidden",
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
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - 40px)`,
              "*::-webkit-scrollbar-track": {
                m: 2,
              },
            }}
          >
            {/* box column header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                height: COLUMN_HEADER_HEIGHT,
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Header
              </Typography>
              <Box>
                <Tooltip title="More options">
                  <ExpandMoreIcon
                    sx={{ color: "text.primary", cursor: "pointer" }}
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? "basic-menu-column-dropdown" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  ></ExpandMoreIcon>
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-column-dropdown",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentCutIcon fontSize="small"></ContentCutIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentCopyIcon fontSize="small"></ContentCopyIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentPasteIcon fontSize="small"></ContentPasteIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small"></Cloud>
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            {/* box column list card */}

            <Box
              sx={{
                padding: "0 5px",
                margin: "0 5px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc(${theme.trello.boardContentHeight} - 40px - 
                  ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT}
                )`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ced0da",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#bfc2cf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.disneydining.com/wp-content/uploads/2023/08/ret-invasion-1-1.jpg"
                  title="variants"
                />
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Meet He Who Remains</Typography>
                </CardContent>
                <CardActions sx={{ p: "0 4px 8px 4px" }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    10
                  </Button>
                  <Button size="small" startIcon={<ModeCommentIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    30
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
            </Box>
            {/* box column footer */}

            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon></AddCardIcon>}>
                Add new card
              </Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              ml: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - 40px)`,
            }}
          >
            {/* box column header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                height: COLUMN_HEADER_HEIGHT,
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Header
              </Typography>
              <Box>
                <Tooltip title="More options">
                  <ExpandMoreIcon
                    sx={{ color: "text.primary", cursor: "pointer" }}
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? "basic-menu-column-dropdown" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  ></ExpandMoreIcon>
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-column-dropdown",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentCutIcon fontSize="small"></ContentCutIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentCopyIcon fontSize="small"></ContentCopyIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ContentPasteIcon fontSize="small"></ContentPasteIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small"></Cloud>
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            {/* box column list card */}

            <Box
              sx={{
                padding: "0 5px",
                margin: "0 5px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc(${theme.trello.boardContentHeight} - 40px - 
                  ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT}
                )`,
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ced0da",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#bfc2cf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.disneydining.com/wp-content/uploads/2023/08/ret-invasion-1-1.jpg"
                  title="variants"
                />
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Meet He Who Remains</Typography>
                </CardContent>
                <CardActions sx={{ p: "0 4px 8px 4px" }}>
                  <Button size="small" startIcon={<GroupIcon />}>
                    10
                  </Button>
                  <Button size="small" startIcon={<ModeCommentIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    30
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  overflow: "unset",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>CARD 1</Typography>
                </CardContent>
              </Card>
            </Box>
            {/* box column footer */}

            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon></AddCardIcon>}>
                Add new card
              </Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BoardContent;
