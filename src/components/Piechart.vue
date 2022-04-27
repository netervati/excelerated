<template>
    <div class="col-4">
        <div class="card mt-3">
            <div class="card-body">
                <apexchart type="pie" :options="chartOptions" :series="series" />
                {{ chartOptions.labels }}
            </div>
        </div>
    </div>
</template>

<script>
import { excelStore } from "../store/excel"

export default {
    setup() {
        const excel = excelStore()

        return { excel }
    },
    computed: {
        refreshTrigger: {
            set() {
                this.series = this.excel.splitData.series
                this.chartOptions.labels = this.excel.splitData.labels
            }
        }
    },
    data() {
        return {
            series: [],
            chartOptions: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: [],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: { width: 200 },
                            legend: { position: 'bottom' }
                        }
                    }
                ]
            },
            test: false
        }
    },
    methods: {
        refreshData() {
            this.refreshTrigger = Date.now()
        }
    }, 
    mounted() {
        this.excel.$subscribe( this.refreshData)
    }
}
</script>
