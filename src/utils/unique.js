export const groupedData = function (params) {
    const uniqueArray = []

    params.data.filter(a => {
        let exists = uniqueArray.filter(b => {
            if (a[params.column] == b[params.column]) return b
        })

        if (exists.length == 0) uniqueArray.push(a)
    })

    return uniqueArray
}