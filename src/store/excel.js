import { defineStore } from "pinia"
import { sortData } from "../utils/sortdata"
import { mergeData } from "../utils/mergedata"
import { splitData } from "../utils/splitdata"

export const excelStore = defineStore('excel', {
    state: ()=> {
        return { excelData: [] }
    },
    getters: {
        findTopFive(state) {
            return (params) => {
                const tmpData = JSON.parse(JSON.stringify(state.excelData))

                return sortData({
                    data: tmpData,
                    index: params.index
                }).slice(0,5)
            }
        },
        groupData(state) {
            return (params) => {
                const tmpData = JSON.parse(JSON.stringify(state.excelData))
                const uniqueData = []

                for (let excel of params){
                    let dataToSplit = mergeData({
                        column: excel.label,
                        data: tmpData,
                        series: excel.data
                    })

                    uniqueData.push(
                        splitData({
                            column: excel.label,
                            data: dataToSplit,
                            series: excel.data
                        })
                    )
                }

                return uniqueData
            }
        },
        showData(state) {
            return (params) => {
                const returnArray = []

                for (let excel of params){
                    returnArray.push(
                        splitData({
                            column: excel.label,
                            data: state.excelData,
                            series: excel.data
                        })
                    )
                }

                return returnArray
            }
        },
    }
})
