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
                return sortData(colIndex, sortOrder, state.excelData)
            }
        },
        groupData(state) {
            return (colValue) => {
                return groupedData({
                    data: state.excelData,
                    column: colValue
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
