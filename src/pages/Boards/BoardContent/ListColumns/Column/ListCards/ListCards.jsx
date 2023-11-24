import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListCards({ cards }) {
  return (
    <div>
      <SortableContext
        items={cards?.map((c) => c._id)}
        strategy={verticalListSortingStrategy}
      >
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
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </Box>
      </SortableContext>
    </div>
  );
}

export default ListCards;
