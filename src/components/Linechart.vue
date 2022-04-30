<template>
    <section class="card mt-3">
        <div class="card-body">
            <section class="input-group input-group-sm mb-3">
                <span class="input-group-text">Labels & Data</span>
                <input type="number" aria-label="Label Index" class="form-control" 
                    v-model="labelIndex" 
                    v-on:change="refreshData">
                <input type="number" aria-label="Data Index" class="form-control" 
                    v-model="dataIndexA" 
                    v-on:change="refreshData">
                <input type="number" aria-label="Data Index" class="form-control" 
                    v-model="dataIndexB" 
                    v-on:change="refreshData">
            </section>
            <section class="form-check mt-2 mb-3">
                <input class="form-check-input" type="checkbox" id="check-line"
                    v-model="isGrouped"
                    v-on:change="refreshData">
                <label class="form-check-label" for="check-line">Group Labels</label>
            </section>
            <Line :height="250" :chart-data="chartData" />
        </div>
    </section>
</template>

<script>
import { 
    HEX_COLORS, 
    HEX_COLORS_TRANSPARENT 
} from "../constants/hexcodes";
import { excelStore } from "../store/excel"
import 'chart.js/auto';
import { Line } from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    LineElement, 
    CategoryScale, 
    LinearScale 
} from 'chart.js'

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    LineElement, 
    CategoryScale, 
    LinearScale
)


export default {
    setup() {
        const excel = excelStore()

        return { excel }
    },
    components: { Line },
     data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Line Chart',
                        backgroundColor: HEX_COLORS_TRANSPARENT,
                        borderColor: HEX_COLORS,
                        data: [],
                        fill: true,
                        lineTension: 0.5
                    },
                    {
                        label: 'Line Chart',
                        backgroundColor: HEX_COLORS_TRANSPARENT,
                        borderColor: HEX_COLORS,
                        data: [],
                        fill: true,
                        lineTension: 0.5
                    },
                ]
            },
            labelIndex: 0,
            dataIndexA: 1,
            dataIndexB: 1,
            isGrouped: false
        }
    },
    methods: {
        refreshData() {
            const toPassValues = [
                { 
                    data: this.dataIndexA, 
                    label: this.labelIndex 
                },
                { 
                    data: this.dataIndexB, 
                    label: this.labelIndex 
                }
            ]

            const splittedData = this.isGrouped === false ? 
                this.excel.showData(toPassValues) :
                this.excel.groupData(toPassValues)

            this.chartData.labels = splittedData[0].labels
            this.chartData.datasets[0].data = splittedData[0].series
            this.chartData.datasets[1].data = splittedData[1].series
        }
    },
    mounted() {
        this.excel.$subscribe(this.refreshData)
    }
}
</script>
