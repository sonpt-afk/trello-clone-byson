import Box from "@mui/material/Box";
import Card from "./Card/Card";
function ListCards() {
  return (
    <div>
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
                  ${theme.trello.ColumnHeaderHeight} - ${theme.trello.ColumnFooterHeight}
                )`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        <Card />
        <Card temporaryHideMedia />
      </Box>
    </div>
  );
}

export default ListCards;
