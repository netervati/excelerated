export const sortData = function (colIndex, sortOrder, tempArray) {
    if (sortOrder == 0) {
        tempArray.sort(
            (a, b) => {
                return a[colIndex] - b[colIndex]
            }
        )
    }else {
        /** TODO: Fix for descending string types */
        tempArray.sort(
            (a, b) => {
                return a[colIndex] - b[colIndex]
            }
        )
    }

    return tempArray
}
