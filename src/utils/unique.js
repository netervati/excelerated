export const groupedData = function (col_value, temp_array) {
    let unique_array = []

    temp_array.filter(a => {
        let exists = unique_array.filter(b => {
            if (a[col_value] == b[col_value]) return b
        })

        if (exists.length == 0) unique_array.push(a)
    })

    return unique_array
}