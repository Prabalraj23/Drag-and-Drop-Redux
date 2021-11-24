import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ItemTypes } from "../ItemTypes";
import { addElement } from "../store/functions/function.action";


const style = {
    border: "2px solid gray",
    padding: "0.5rem 1rem",
    width: "60px",
    height: "60px",
    margin: "1rem",
    cursor: "move",
    float: "left",
}

const Rectangle = ({ name }) => {

    const dispatch = useDispatch()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.RECTANGLE,
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            dispatch(addElement(item))
        },

    }))



    const opacity = isDragging ? 0.5 : 1;
    return (
        <div className="rectangle" ref={drag} style={{ ...style, opacity }} />
    )
}

export default Rectangle;