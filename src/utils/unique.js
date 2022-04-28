export const mergeData = function (params) {
    const uniqueArray = []

    params.data.filter( data => {
        const exists = uniqueArray.filter( unique => {
            if (data[params.column] == unique[params.column]){
                unique[params.series] += data[params.series]

                return unique
            }
        })

        if (exists.length === 0) uniqueArray.push(data)
    })

    return uniqueArray
}
