<template>
  <div class="m-3">
    <h3>Dashboard</h3>
    <BackupsStatus v-if="true"></BackupsStatus>
    <BackupsStatusDoughnut></BackupsStatusDoughnut>
  </div>
</template>
<script>

  import BackupsStatus from './BackupsGeneralStatus';
  import BackupsStatusDoughnut from './BackupsGeneralStatus-Doughnut'
  export default {
      name: "dashboard-view",
      components: {
        BackupsStatus,
        BackupsStatusDoughnut
      },
      data() {
        return {

        };
      },
      methods: {

      },
      mounted() {
        
      }
  };
  
</script>

<style scoped>
</style>  