import { defineStore } from "pinia"
import { sortData } from "../utils/datasort"
import { groupedData } from "../utils/unique"

export const excelStore = defineStore('excel',{
    state: ()=> {
        return { excel_data: [] }
    },
    getters: {
        findTopFive(state) {
            return (col_index, sort_order) => {
                return sortData(col_index, sort_order, state.excel_data)
            }
        },
        groupData(state) {
            return (col_value) => {
                return groupedData(col_value, state.excel_data)
            }
        },
        splitData(state) {
            let split_data = {series: [], labels: [] }
            if (state.excel_data.length > 0){
                for (let x = 0, y = state.excel_data.length; x < y; x++){
                    split_data.series.push(state.excel_data[x][0])
                    split_data.labels.push(state.excel_data[x][1])
                }
            }

            return split_data
        }
    }
})
