<template>
    <div>
        <div style="width: 100px; height: 100px;" v-for="(item, index) in doughnut_data"
              :key="index">
              <Doughnut :data="item.data" :options="item.options" />
        </div>
        
    </div>
</template>
<script>
import BackupTracesDataService from "../services/BackupTracesDataService";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: "general-status",
    components: {
        Doughnut
    },
    data() {
        return {
            backup_states: [],
            doughnut_data: []
        };
      },
      methods: {
        getStatus(){
            BackupTracesDataService.generalStatus()
            .then(response => {
                this.backup_states = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        update_doughnuts(item){
            console.log(item);
            let color;
            switch(item.last_status) {
                case "[ALL OK]":
                    color = "green";
                    break;
                case "[RUNNING]":
                    color = "blue";
                    break;
                case "[NOT OK]":
                    color = "red";
                    break;
                case "[FINISHED WITH ERRORS]":
                    color = "yellow";
                    break;
                default:
                    color = "currentColor";
            }
            return {
                    data: {
                        labels: [item.name],
                        datasets: [
                            {
                                backgroundColor: [color],
                                data: [1]
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true
                    }
                }
        }
      },
      mounted() {
        this.getStatus();
        this.timer = setInterval(() => {
            this.getStatus();
            this.doughnut_data = this.backup_states.map(this.update_doughnuts);
        }, 300)
      }
}
</script>
<style>
    
</style>