<template>
    <div class="col-4">
        <div class="card mt-3">
            <div class="card-body">
                <form>
                    <div class="input-group input-group-sm mb-3">
                        <input type="file" ref="file" class="form-control"
                                v-on:change="fileUploader()">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { excelStore } from "../store/excel"
import readXlsxFile from 'read-excel-file'
import { ref } from "vue"

export default {
    name: "Import",
    setup() {
        const excel = excelStore()
        const file = ref(null)

        const fileUploader = async () => {
            /** TODO: Handle error */
            try {
                excel.excel_data = readXlsxFile(file.value.files[0])
                                    .then( rows => { return rows })
            }
            catch { console.log("Error") }
        }

        return { 
            excel,
            fileUploader, 
            file 
        }
    }
}
</script>
