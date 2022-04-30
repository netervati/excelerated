<template>
    <section class="card mt-3">
        <div class="card-body">
            <section class="input-group input-group-sm">
                <span class="input-group-text">Labels & Data</span>
                <input type="number" aria-label="Label Index" class="form-control" 
                    v-model="labelIndex" 
                    v-on:change="refreshData">
                <input type="number" aria-label="Data Index" class="form-control" 
                    v-model="dataIndex" 
                    v-on:change="refreshData">
            </section>
            <section class="form-check mt-2 mb-3">
                <input class="form-check-input" type="checkbox" id="check-pie"
                    v-model="isGrouped"
                    v-on:change="refreshData">
                <label class="form-check-label" for="check-pie">Group Labels</label>
            </section>
            <Pie :chart-data="chartData" />
        </div>
    </section>
</template>

<script>
import { HEX_COLORS } from "../constants/hexcodes";
import { excelStore } from "../store/excel"
import 'chart.js/auto';
import { Pie } from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    ArcElement, 
    CategoryScale 
} from 'chart.js'

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    ArcElement, 
    CategoryScale
)

export default {
    setup() {
        const excel = excelStore()

        return { excel }
    },
    components: { Pie },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: HEX_COLORS,
                        data: []
                    }
                ]
            },
            labelIndex: 0,
            dataIndex: 1,
            isGrouped: false
        }
    },
    methods: {
        refreshData() {
            const toPassValues = [
                {
                    data: this.dataIndex, 
                    label: this.labelIndex 
                }
            ]

            const splittedData = this.isGrouped === false ? 
                this.excel.showData(toPassValues) :
                this.excel.groupData(toPassValues)

            this.chartData.labels = splittedData[0].labels
            this.chartData.datasets[0].data = splittedData[0].series
        },
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
