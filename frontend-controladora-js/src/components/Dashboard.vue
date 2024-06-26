<template>
    <h3>Dashboard</h3>
    <BackupsStatus></BackupsStatus>
</template>
<script>

  import BackupsStatus from './BackupsGeneralStatus';
  export default {
      name: "dashboard-view",
      components: {
        BackupsStatus
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