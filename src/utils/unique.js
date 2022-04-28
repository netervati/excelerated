export const mergeData = function (params) {
    /** TODO: Grouped rows should have their data columns summed. */
    const uniqueArray = []

    for (let x = 0, y = params.data.length, data = params.data; x < y; x++) {
        let exists = false

        for (let v = 0, w = uniqueArray.length, dataUnique = uniqueArray; v < w; v++) {
            if (dataUnique[v][params.column] == data[x][params.column]){
                // uniqueArray[v][params.series] = 100
                exists = true
            }
        }

        if (!exists) uniqueArray.push(data[x])
    }

    return uniqueArray
}
