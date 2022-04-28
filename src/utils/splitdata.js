export const splitData = function (params) {
    const splittedData = { series: [], labels: [] }

    if (params.data.length > 0){
        for (let x = 0, y = params.data.length; x < y; x++){
            splittedData.series.push(params.data[x][params.series])
            splittedData.labels.push(params.data[x][params.column])
        }
    }

    return splittedData
}