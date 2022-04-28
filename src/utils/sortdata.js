export const sortData = function (params) {
    if (params.order == 0) {
        params.data.sort((a, b) => {
                return a[params.index] - b[params.index]
            }
        )
    }else {
        /** TODO: Fix for descending string types */
        params.data.sort((a, b) => {
                return a[params.index] - b[params.index]
            }
        )
    }

    return params.data
}
