export const sortData = function (col_index, sort_order, temp_array) {
    if (sort_order == 0) {
        temp_array.sort(
            (a, b) => {
                return a[col_index] - b[col_index]
            }
        )
    }else {
        /** TODO: Fix for descending string types */
        temp_array.sort(
            (a, b) => {
                return a[col_index] - b[col_index]
            }
        )
    }

    return temp_array
}
