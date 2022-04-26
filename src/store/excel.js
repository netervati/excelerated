import { defineStore } from "pinia"

export const excelStore = defineStore('excel',{
    state: ()=> {
        return { excel_data: [] }
    }
})