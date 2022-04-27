<template>
    <section class="col-sm-12 col-md-6 col-lg-3">
        <div class="card mt-3">
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
                <Pie :chart-data="chartData" />
            </div>
        </div>
    </section>
</template>

<script>
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
    components: {
        Pie
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: [
                            '#43857C', 
                            '#4D658D', 
                            '#68B159'
                        ],
                        data: []
                    },
                ]
            },
            labelIndex: 0,
            dataIndex: 1,
        }
    },
    methods: {
        refreshData() {
            const splittedData = this.excel.splitData({ 
                data: this.dataIndex, 
                label: this.labelIndex 
            })

            this.chartData.labels = splittedData.labels
            this.chartData.datasets[0].data = splittedData.series
        }
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
