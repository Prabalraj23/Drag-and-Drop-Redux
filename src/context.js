/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react'


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [dropResult, setDropResult] = useState(false)
    const [rows, setRows] = useState([])
    const [item, setItem] = useState(null)
    const [rowId, setRowId] = useState()
    const [colId, setColId] = useState()



    useEffect(() => {

        const circle = <div style={{ height: "20px", width: "20px", backgroundColor: "red", borderRadius: "50%", margin: "3px" }} />
        const rectangle = <div style={{ height: "20px", width: "20px", backgroundColor: "blue", margin: "3px" }} />

        const row = [{
            col: [{
                items: []
            }]
        }]


        let array = []
        const rowsArrayCopy = [...rows];

        switch (item?.name) {
            case "Add 2 Columns":
                for (let i = 0; i < 2; i++) {
                    const cols = {
                        col: [{
                            items: []
                        }]

                    }
                    array.push(cols)
                    rowsArrayCopy[rowId] = array;
                }
                setRows(rowsArrayCopy)
                setItem(null);
                break;
            case "Add 3 Columns":
                for (let i = 0; i < 3; i++) {
                    const cols = {
                        col: [{
                            items: []
                        }]

                    }
                    array.push(cols)
                    rowsArrayCopy[rowId] = array;
                }
                setRows(rowsArrayCopy)
                setItem(null);
                break;
            case "Add 4 Columns":
                for (let i = 0; i < 4; i++) {
                    const cols = {
                        col: [{
                            items: []
                        }]
                    }
                    array.push(cols)
                    rowsArrayCopy[rowId] = array;
                }
                setRows(rowsArrayCopy)
                setItem(null);
                break;
            case "Add a Row":
                rowsArrayCopy.splice(rowId + 1, 0, row)
                setRows(rowsArrayCopy)
                setItem(null);
                break;
            case "circle":
                rowsArrayCopy.map((row, rId) => {
                    if (rId === rowId) {
                        return row.map((column, cId) => {
                            if (cId === colId) {
                                column.col.map((colItem) => {
                                    return colItem.items = [...colItem.items, circle]
                                })
                            }
                            return row
                        })
                    }
                    return rowsArrayCopy
                })
                setRows(rowsArrayCopy)
                setItem(null)
                break;
            case "rectangle":
                rowsArrayCopy.map((row, rId) => {
                    if (rId === rowId) {
                        return row.map((column, cId) => {
                            if (cId === colId) {
                                column.col.map((colItem) => {
                                    return colItem.items = [...colItem.items, rectangle]
                                })
                            }
                            return row
                        })
                    }
                    return rowsArrayCopy
                })
                setRows(rowsArrayCopy)
                setItem(null)
                break;
            default:
                break;
        };

    }, [colId, item, rowId, rows])

    return (
        <UserContext.Provider
            value={{
                dropResult, setDropResult, rows, setRows, item, setItem, rowId, setRowId, colId, setColId
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
