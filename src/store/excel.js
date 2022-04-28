import { defineStore } from "pinia"
import { sortData } from "../utils/datasort"
import { mergeData } from "../utils/unique"

export const excelStore = defineStore('excel', {
    state: ()=> {
        return { excelData: [] }
    },
    getters: {
        findTopFive(state) {
            return (colIndex, sortOrder) => {
                return sortData({
                    data: state.excelData,
                    index: colIndex, 
                    order: sortOrder
                })
            }
        },
        groupData(state) {
            return (params) => {
                const tmpData = JSON.parse(JSON.stringify(state.excelData))

                const uniqueData = mergeData({
                    column: params.label,
                    data: tmpData,
                    series: params.data
                })

                const splittedData = { series: [], labels: [] }

                if (uniqueData.length > 0){
                    for (let x = 0, y = uniqueData.length; x < y; x++){
                        splittedData.series.push(uniqueData[x][params.data])
                        splittedData.labels.push(uniqueData[x][params.label])
                    }
                }

                return splittedData
            }
        },
        splitData(state) {
            return (params) => {
                const splittedData = { series: [], labels: [] }

                if (state.excelData.length > 0){
                    for (let x = 0, y = state.excelData.length; x < y; x++){
                        splittedData.series.push(state.excelData[x][params.data])
                        splittedData.labels.push(state.excelData[x][params.label])
                    }
                }

                return splittedData
            }
        }
    }
})
