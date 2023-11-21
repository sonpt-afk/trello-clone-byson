import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { useState, useEffect } from "react";
function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  //Yeu cau chuoi di chuyen 10px thi moi kich hoat event, fix truong hop click vao card thi goi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  //Nhan giu 250ms va tolerance cam ung (chenh lech/di chuyen 5px) thi moi kich hoat event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  //Uu tien dung ket hop 2 loai sensors la mouse va touch de co trai nghiem tren mobile tot nhat ,ko bi bug

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    console.log("drag end", event);
    const { active, over } = event;

    //Kiem tra neu ko ton tai over -> keo linh tinh ra ngoai thi return luon tranh loi
    if (!over) return;

    //Neu vi tri sau khi keo tha khac voi vi tri ban dau
    if (active.id !== over.id) {
      //lay vi tri cu tu active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      //lay vi tri cu tu over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
      //dung arrayMove de sap xep lai mang Columns ban dau

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      //2 cai console log data sau nay dung de xu li API
      // const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id);
      // console.log("dndOrderedColumns:", dndOrderedColumns);
      // console.log("dndOrderedColumnIds:", dndOrderedColumnIds);

      //Cap nhat state columns ban dau sau khi da keo tha
      setOrderedColumns(dndOrderedColumns);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#000" : "#3498db",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
