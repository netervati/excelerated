<template>
    <section class="card mt-3">
        <div class="card-body">
            <section class="input-group input-group-sm">
                <input type="file" ref="file" class="form-control"
                        v-on:change="fileUploader()">
            </section>
        </div>
    </section>
</template>

<script>
import { excelStore } from "../store/excel"
import readXlsxFile from 'read-excel-file'
import { ref } from "vue"
import Swal from 'sweetalert2'

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
            catch { 
                Swal.fire(
                    'Invalid File Type.',
                    'Please import .xlsx files only',
                    'error'
                )
            }
        }

        return { 
            excel,
            fileUploader, 
            file 
        }
    }
}
</script>
