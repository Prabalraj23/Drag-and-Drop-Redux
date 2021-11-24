
export const rowHandler = (id) => ({
    type: "rowId",
    value: id

})

export const colHandler = (id) => ({
    type: "colId",
    value: id

})

export const handleDelete = (id)=>({
    type: "deleteRow",
    value: id
})

export const addElement = (item) => ({
    type: "item",
    value: item
})

