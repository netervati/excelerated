export const sortData = function (params) {
    /** TODO: Fix for string types */
    params.data.sort((a, b) => {
            return a[params.index] - b[params.index]
        }
    )

    params.data.reverse()

    return params.data
}
