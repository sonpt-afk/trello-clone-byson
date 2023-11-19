import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar/AppBar";
import Container from "@mui/material/Container";
import ModeSelect from "../../components/ModeSelect/ModeSelect";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";

function Board() {
  return (
    <div>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </div>
  );
}

export default Board;
