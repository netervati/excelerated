<template>
    <section class="col-sm-12 col-md-6 col-lg-3">
        <div class="card mt-3">
            <div class="card-body">
                <section class="input-group input-group-sm">
                    <input type="file" ref="file" class="form-control"
                            v-on:change="fileUploader()">
                </section>
            </div>
        </div>
    </section>
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
                excel.excelData = await readXlsxFile(file.value.files[0]).
                                        then( rows => { return rows })
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
