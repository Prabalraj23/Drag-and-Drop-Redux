import { createStore } from "redux";

const initialState = {
    dropResult: false,
    rows: [],
    item: null,
    rowId: 0,
    colId: 0,
    row: [{
        col: [{
            items: []
        }]
    }]
}


const circle = <div style={{ height: "20px", width: "20px", backgroundColor: "red", borderRadius: "50%", margin: "3px" }} />
const rectangle = <div style={{ height: "20px", width: "20px", backgroundColor: "blue", margin: "3px" }} />


const functionReducer = (state = initialState, action) => {

    let rowsArrayCopy = [...state.rows]
    let array = []
    switch (action?.type) {
        case "rowId":
            state.rowId = action?.value
            return state
        case "colId":
            state.colId = action?.value
            return state
        case "deleteRow":
            rowsArrayCopy?.splice(action?.value, 1)
            return {
                ...state, rows: rowsArrayCopy
            }
        case "item":
            switch (action?.value?.name) {
                case "Add a Row":
                    let row = [{
                        col: [{
                            items: []
                        }]
                    }]
                    rowsArrayCopy.splice(state.rowId + 1, 0, row)
                    return {
                        ...state, rows: rowsArrayCopy
                    }
                case "Add 2 Columns":
                    for (let i = 0; i < 2; i++) {
                        const cols = {
                            col: [{
                                items: []
                            }]

                        }
                        array.push(cols)
                    }
                    rowsArrayCopy[state.rowId] = array
                    return {
                        ...state, rows: rowsArrayCopy
                    }

                case "Add 3 Columns":
                    for (let i = 0; i < 3; i++) {
                        const cols = {
                            col: [{
                                items: []
                            }]

                        }
                        array.push(cols)

                    }
                    rowsArrayCopy[state.rowId] = array
                    return {
                        ...state, rows: rowsArrayCopy
                    }
                case "Add 4 Columns":
                    for (let i = 0; i < 4; i++) {
                        const cols = {
                            col: [{
                                items: []
                            }]
                        }

                        array.push(cols)
                    }
                    rowsArrayCopy[state.rowId] = array
                    return {
                        ...state, rows: rowsArrayCopy
                    }

                case "circle":
                    rowsArrayCopy.map((row, rId) => {
                        if (rId === state.rowId) {
                            return row.map((column, cId) => {
                                if (cId === state.colId) {
                                    column.col.map((colItem) => {
                                        return colItem.items = [...colItem.items, circle]
                                    })
                                }
                                return row
                            })
                        }
                        return rowsArrayCopy
                    })
                    return {
                        ...state, rows: rowsArrayCopy
                    }
                case "rectangle":
                    rowsArrayCopy.map((row, rId) => {
                        if (rId === state.rowId) {
                            return row.map((column, cId) => {
                                if (cId === state.colId) {
                                    column.col.map((colItem) => {
                                        return colItem.items = [...colItem.items, rectangle]
                                    })
                                }
                                return row
                            })
                        }
                        return rowsArrayCopy
                    })
                    return {
                        ...state, rows: rowsArrayCopy
                    }
                default:
                    return state;
            };
        default:
            return
    }


}
export const store = createStore(functionReducer);



export default functionReducer