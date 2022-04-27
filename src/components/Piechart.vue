<template>
    <div class="col-3">
        <div class="card mt-3">
            <div class="card-body">
                <Pie :chart-data="chartData" />
            </div>
        </div>
    </div>
</template>

<script>
import { excelStore } from "../store/excel"
import 'chart.js/auto';
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

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
                        backgroundColor: ['#43857C', '#4D658D', '#68B159'],
                        data: []
                    },
                ]
            }
        }
    },
    methods: {
        refreshData() {
            const split_data = this.excel.splitData
            this.chartData = {
                labels: split_data.labels,
                datasets: [
                    {
                        backgroundColor:  ['#43857C', '#4D658D', '#68B159'],
                        data: split_data.series
                    },
                ]
            }
        }
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
