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
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./listColumns/Column/Column";
import Card from "./listColumns/Column/listCards/Card/Card";
import { useState, useEffect } from "react";
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
import { cloneDeep } from "lodash";
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
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null);
  //cùng thời điểm chỉ có 1 phần tử đang dc kéo (column or card)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  //Tim 1 cái column theo cardId
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column.cards.map((card) => card._id)?.includes(cardId)
    );
  };

  //KHI KẾT THÚC HÀNH ĐỘNG KÉO 1 PHẦN TỬ => HÀNH ĐỘNG THẢ (DROP)

  const handleDragEnd = (event) => {
    // console.log("drag end", event);
    const { active, over } = event;
    //Kiem tra neu ko ton tai over -> keo linh tinh ra ngoai thi return luon tranh loi
    if (!over) return;
    //XỬ LÍ KHI KÉO THẢ CARD
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      //activeDraggingCard là card đang đc kéo
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData },
      } = active;
      //overCard: là cái card đang tương tác trên hoặc dưới so với cái card đc kéo ở trên
      const { id: overCardId } = over;

      //tìm 2 cái columns theo cardId
      const activeColumn = findColumnByCardId(activeDraggingCardId);
      const overColumn = findColumnByCardId(overCardId);

      //nếu ko tồn tại 1 trong 2 column thì ko làm j hết tránh crash web
      if (!activeColumn || !overColumn) return;
      //hành động kéo thả giữa 2 column khác nhau
      //phải dùng tới activeDragItemData.columnId hoặc oldColumnWhenDraggingCard._id  (set  vào state từ bước handleStart) chứ ko phải activeData
      // trong scope handleDragEnd này vì sau khi đi qua onDragOver tới đây là state của card đã bị cập nhật 1 lần rồi
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        console.log("drag end card between 2 column");
      } else {
        //hanh dong keo tha card trong cung 1 column

        //lay vi tri cu tu thằng oldColumnWhenDraggingCard
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(
          (c) => c._id === activeDragItemId
        );
        //lay vi tri cu tu thằng overColumn
        const newCardIndex = overColumn?.cards?.findIndex(
          (c) => c._id === overCardId
        );

        //dùng arrMove vì kéo card trong 1 cái column thì tương tự với logic kéo column trong 1 cái board content
        const dndOrderedCards = arrayMove(
          oldColumnWhenDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        );
        //EDIT NHE
        setOrderedColumns((prevColumns) => {
          //clone mang OrderedColumnsState cũ ra 1 cái mới để xử lí data roồi return - cập nhật lại
          //orderedColumnsState mới
          const nextColumns = cloneDeep(prevColumns);

          //tìm tới column mà chúng ta đang  thả
          const targetColumn = nextColumns.find(
            (column) => column._id === overColumn._id
          );

          //cập nhật lại 2 giá trị mới là card và cardOrderIds trong cái targetColumn
          targetColumn.cards = dndOrderedCards;
          targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id);
          console.log("targetColumn:", targetColumn);

          return nextColumns;
        });
      }
    }

    //XỬ LÍ KHI KÉO THẢ COLUMN TRONG 1 CÁI BOARD CONTENT
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      console.log("drag end column");
      //Neu vi tri sau khi keo tha khac voi vi tri ban dau
      if (active.id !== over.id) {
        //lay vi tri cu tu active
        const oldColumnIndex = orderedColumns.findIndex(
          (c) => c._id === active.id
        );
        //lay vi tri cu tu over
        const newColumnIndex = orderedColumns.findIndex(
          (c) => c._id === over.id
        );
        //dung arrayMove de sap xep lai mang Columns ban dau

        const dndOrderedColumns = arrayMove(
          orderedColumns,
          oldColumnIndex,
          newColumnIndex
        );

        //2 cai console log data sau nay dung de xu li API
        // const dndOrderedColumnIds = dndOrderedColumns.map((c) => c._id);
        // console.log("dndOrderedColumns:", dndOrderedColumns);
        // console.log("dndOrderedColumnIds:", dndOrderedColumnIds);

        //Cap nhat state columns ban dau sau khi da keo tha
        setOrderedColumns(dndOrderedColumns);
      }
    }
    //dữ liệu sau khi kéo thả này luôn phải đưa về giá trị null mặc định ban đầu
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDraggingCard(null);
  };
  //KHI BẮT ĐẦU KÉO 1 PHẦN TỬ
  const handleDragStart = (event) => {
    console.log("drag start", event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);

    //NẾU LÀ KÉO CARD THÌ MỚI THƯC HIỆN CÁC XỬ LÍ SET GIÁ TRỊ oldColumnWhenDraggingCard
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id));
    }
  };

  //TRIGGER TRONG QUÁ TRÌNH KÉO 1 PHẦN TỬ
  const handleDragOver = (event) => {
    //KO LÀM GÌ THÊM NẾU ĐANG KÉO COLUMN
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return;
    }

    //NẾU KÉO CARD THÌ XỬ LÍ THÊM ĐỂ CÓ THỂ KÉO CARD QUA LẠI GIỮA CÁC COLUMN
    console.log("drag over:", event);

    const { active, over } = event;

    //Cần đảm bảo nếu ko tồn tại active hoặc over (khi kéo ra khỏi phạm vi container) thì ko làm j (tránh crash trang)

    if (!over || !active) return;

    //activeDraggingCard là card đang đc kéo
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    //overCard: là cái card đang tương tác trên hoặc dưới so với cái card đc kéo ở trên
    const { id: overCardId } = over;
    //tìm 2 cái columns theo cardId
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overCardId);
    //nếu ko tồn tại 1 trong 2 column thì ko làm j hết tránh crash web
    if (!activeColumn || !overColumn) return;

    console.log("activeColumn:", activeColumn);
    console.log("overColumn:", overColumn);
    if (activeColumn._id !== overColumn._id) {
      console.log("drag over not same column");
    } else {
      console.log("drag over same column");
    }
    //xử lí logic ở đây chỉ khi kéo thả card qua 2 column khác nhau còn nếu kéo
    //card trong cùng 1 column thì ko làm j hết
    //vì đây là đoạn xử lí lúc kéo (handleDragOver) còn xử lí lúc kéo xong thì nó lại là vấn đề
    //khác ở handleDragEnd

    if (activeColumn._id === overColumn._id) {
      setOrderedColumns((prevColumns) => {
        //tìm vị trí index của cái overcard trong column đích nơi mà activeCard sắp đc thả
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );
        //Logic tính toán cardIndex mới (trên or dưới của overCard) lấy chuẩn ra từ code từ thư viện

        const isBelowOverItem =
          over &&
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        let newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;

        //clone mang OrderedColumnsState cũ ra 1 cái mới để xử lí data roồi return - cập nhật lại
        //orderedColumnsState mới
        const nextColumns = cloneDeep(prevColumns);
        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );

        //nextActiveColumn: column cũ

        if (nextActiveColumn) {
          //xóa card ở cái column active (cũng có thể hiểu là column cũ , cái lúc mà kéo card ra khỏi nó để sang column khác)

          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          // Cập nhật lại mảng cardOrderIds của column active cho chuẩn dữ liệu
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        //nextOverColumn: column mới
        if (nextOverColumn) {
          //kiểm tra xem card đang kéo có tồn tại trong over Column hay ko ,nếu có thì cần xóa nó trước

          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          //thêm card đang kéo vào overColumn theo vị trí index mới tính toán ở trên
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );

          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
    }
  };

  //animation khi thả phần tử - test bằng cách kéo xong thả trực tiếp và nhìn phần giữ chỗ overlay

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  return (
    <DndContext
      //cảm biến
      sensors={sensors}
      //thuật toán phát hiện va chạm (nếu ko có thì card với cover lớn sẽ ko kéo qua Column đc vì lúc
      //đó nó đang conflict giữa card và column), chúng ta sẽ dùng closestCorners thay vì closestCenter
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
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
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
