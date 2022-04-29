<template>
    <section class="card mt-3">
        <div class="card-body">
            <section class="input-group input-group-sm mb-2">
                <span class="input-group-text">Order by</span>
                <input type="number" aria-label="Label Index" class="form-control" 
                    v-model="dataIndex" 
                    v-on:change="refreshData">
            </section>
            <h6 class="mb-2">Top Five Data</h6>
            <section class="table-responsive">
                <table class="table table-striped table-sm">
                    <tbody>
                        <tr v-for="top of topData" :key="top">
                            <td v-for="cell of top" :key="cell">{{ cell }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </section>
</template>

<script>
import { excelStore } from "../store/excel"

export default {
    setup() {
        const excel = excelStore()

        return { excel }
    },
    data() {
        return { 
            dataIndex: 0,
            topData: [] 
        }
    },
    methods: {
        refreshData() {
            this.topData = this.excel.findTopFive({ index: this.dataIndex })
        }
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
