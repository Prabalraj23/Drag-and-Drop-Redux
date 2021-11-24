import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ItemTypes } from "../ItemTypes";
import { addElement } from "../store/functions/function.action";


const style = {
    border: "2px solid gray",
    padding: "0.5rem 1rem",
    width: "80%",
    margin: "1rem",
    cursor: "move",
    float: "left",
}

const ColBox = ({ name }) => {


    const dispatch = useDispatch()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.COLUMN,
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
        <div ref={drag}
            style={{ ...style, opacity }}>
            {name}
        </div>
    )
}


export default ColBox;