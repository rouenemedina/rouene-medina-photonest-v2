import "./DropZone.scss";
import React from 'react';
import { DropTargetMonitor, useDrop } from "react-dnd";

//define the expected structure of the item being dropped
interface DropItem {
    type: string;
}

//specifies the prop 'onDrop' function which accepts an item of type 'DropItem'
interface DropZoneProps {
    onDrop: (item: DropItem) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop<DropItem, void, { isOver: boolean }>(() => ({
        accept: [],
        drop: (item: DropItem) => onDrop(item),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <main ref={drop} className={isOver ? "dropZone--active" : "dropZone"}>
            {isOver ? "Release to drop" : "Drop items here"}
        </main>
    )
};

export default DropZone;