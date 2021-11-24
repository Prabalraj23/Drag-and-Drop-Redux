import React from "react";
import { Col } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";


const Columns = () => {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CIRCLE && ItemTypes.RECTANGLE,
        drop: () => ({ name: "ColBox" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    return (
        <Col ref={drop} style={{ border: "1px solid black", height: "30px" }}></Col>
    )
}
export default Columns;