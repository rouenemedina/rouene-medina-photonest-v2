import "./DragItem.scss";
import React, { ReactNode } from "react";
import { useDrag } from "react-dnd";

interface DragItemProps {
  type: string;
  children: ReactNode;
}

const DragItem: React.FC<DragItemProps> = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <main ref={drag} className={isDragging ? "dragItem__dragging" : "dragItem"}>
      {children}
    </main>
  );
};

export default DragItem;
