<template>
    <div class="card">
        <div class="card-header">
            <h5>Visitors</h5>
            <span class="text-muted">For more details about usage, please refer <a href="https://www.amcharts.com/online-store/" target="_blank">amCharts</a> licences.</span>
            <div class="card-header-right">
                <ul class="list-unstyled card-option">
                    <li><i class="feather icon-maximize full-card"></i></li>
                    <li><i class="feather icon-minus minimize-card"></i></li>
                    <li><i class="feather icon-trash-2 close-card"></i></li>
                </ul>
            </div>
        </div>
        <div class="card-block">
            <canvas :id="'pie-'+pieIndex" width="400" height="400"></canvas>						
        </div>
    </div>    
</template>

<script>

import Chart from 'chart.js';

export default {

    props: ['pieIndex','pieData','pieOptions'],

    created() {

    },
    
    mounted() {

		const ctx = document.getElementById('pie-'+this.pieIndex);

        const pieChart = new Chart(ctx, {
            type: 'pie',
			data: this.pieData,
			options: this.pieOptions
        });

    }

}
</script>

<style scoped>

</style>