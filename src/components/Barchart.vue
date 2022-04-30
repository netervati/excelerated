<template>
    <section class="card mt-3">
        <div class="card-body">
            <section class="input-group input-group-sm mb-3">
                <span class="input-group-text">Labels & Data</span>
                <input type="number" aria-label="Label Index" class="form-control" 
                    v-model="labelIndex" 
                    v-on:change="refreshData">
                <input type="number" aria-label="Data Index" class="form-control" 
                    v-model="dataIndex" 
                    v-on:change="refreshData">
            </section>
            <section class="form-check mt-2 mb-3">
                <input class="form-check-input" type="checkbox" id="check-bar"
                    v-model="isGrouped"
                    v-on:change="refreshData">
                <label class="form-check-label" for="check-bar">Group Labels</label>
            </section>
            <Bar :chart-data="chartData" />
        </div>
    </section>
</template>

<script>
import { HEX_COLORS } from "../constants/hexcodes";
import { excelStore } from "../store/excel"
import 'chart.js/auto';
import { Bar } from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    CategoryScale, 
    LinearScale 
} from 'chart.js'

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    CategoryScale, 
    LinearScale
)


export default {
    setup() {
        const excel = excelStore()

        return { excel }
    },
    components: { Bar },
     data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Bar Chart',
                        backgroundColor: HEX_COLORS,
                        data: []
                    },
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
        }
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
