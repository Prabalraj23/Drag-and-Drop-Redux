
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ItemTypes } from "../ItemTypes";
import "../Main.css";
import { addElement } from "../store/functions/function.action";

const style = {
    border: "2px solid gray",
    padding: "0.5rem 1rem",
    width: "80%",
    margin: "1rem",
    cursor: "move",
    float: "left",
}

const RowBox = ({ name }) => {

    const dispatch = useDispatch()

    const [{ isDragging, handlerId }, drag] = useDrag(() => ({
        type: ItemTypes.ROW,
        item: { name },
        end: (item, monitor) => {
            dispatch(addElement(item))
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))


    const opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={drag} data-handler-id={handlerId}
            style={{ ...style, opacity }}>
            {name}
        </div>
    )
}
export default RowBox;