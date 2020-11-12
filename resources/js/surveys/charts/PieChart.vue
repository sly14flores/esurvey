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

    data() {
        return {
            chartColors: {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(201, 203, 207)'
            }
        }
    },

    props: ['pieIndex'],

    created() {

    },
    
    mounted() {

		const ctx = document.getElementById('pie-'+this.pieIndex);

        const pieChart = new Chart(ctx, {
            type: 'pie',
			data: {
				datasets: [{
					data: [
						5,
						5,
						5,
						5,
						5,
					],
					backgroundColor: [
						this.chartColors.red,
						this.chartColors.orange,
						this.chartColors.yellow,
						this.chartColors.green,
						this.chartColors.blue,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			options: {
				responsive: true
			}
        });

    }

}
</script>

<style scoped>

</style>