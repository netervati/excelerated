<template>
    <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card mt-3">
            <div class="card-body">
                <div class="input-group input-group-sm">
                    <input type="file" ref="file" class="form-control"
                            v-on:change="fileUploader()">
                </div>
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
                excel.excel_data = await readXlsxFile(file.value.files[0]).
                                        then( rows => { return rows })
                // console.log (excel.excel_data)
                // console.log (excel.groupData)
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
