import React from "react";
import { Col } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import RowContainer from "./RowContainer";

const DropContainer = () => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.ROW, ItemTypes.COLUMN, ItemTypes.CIRCLE, ItemTypes.RECTANGLE],
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = isOver && canDrop;
    return (
        <Col sm={8} md={8} className="right-grid" role={'DropContainer'} ref={drop} >
            {isActive ? <h3>Release to drop</h3> : <h3>Drag a Row or Column here</h3>}
            <br />
            <RowContainer />
        </Col>
    )
}

export default DropContainer;