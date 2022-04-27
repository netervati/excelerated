import { defineStore } from "pinia"
import { sortData } from "../utils/datasort"
import { groupedData } from "../utils/unique"

export const excelStore = defineStore('excel',{
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
            return (colValue) => {
                return groupedData({
                    column: colValue,
                    data: state.excelData
                })
            }
        },
        splitData(state) {
            return (params) => {
                const splittedData = {series: [], labels: [] }

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
