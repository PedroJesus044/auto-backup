<template>
    <h3>Dashboard</h3>
</template>
<script>
import MetadataDataService from "../services/MetadataDataService";
import BackupDataService from "../services/BackupDataService";
import FileTracesDataService from "../services/FileTracesDataService";
import BackupTracesDataService from "../services/BackupTracesDataService";
import axios from "axios";
export default {
    name: "backups-list",
    data() {
      return {
        chartArray: [],
        
        backup_traces: null,

        backups: [],
        status: [],
        currentBackup: null,
        currentIndex: -1,
        title: "",
        name: "",
        currentMetadata: {
              id_backup: null,
              ruta_respaldo: "",
              ip_servidor: "",
              ip_nas: "",
              rash: "",
              user_servidor: "",
              pw_servidor: "",
              port: null,
              reintentos_maximos: null
        },
        noMetadataExists: true,
        currentHistory: null
      };
    },
    methods: {
      async getBackupHistory(max){
        var data = {
          id_backup: this.currentBackup.id,
          max: max
        }

      this.backup_traces = await new Promise((resolve, reject) => {
          console.log(data);
          BackupTracesDataService.backupHistory(data)
          .then(response => {
             resolve(response.data);
          })
          .catch(e => {
            reject(e);
          });
        });

      },

      color_by_id(id){
        switch (id) {
          case 0:
            return "#007bff";
          case 1:
            return "#6610f2";
          case 2:
            return "#28a745";
          case 3:
            return "#dc3545";
          case 4:
            return "#ffc107";
          case 5:
            return "#fd7e14";
          case 6:
            return "#17a2b8";
          case 7:
            return "#e83e8c";
          case 8:
            return "#6f42c1";
          case 9:
            return "#20c997";
          default:
            return "#007bff";
        }
      },

      async retreiveHistoryFile(file){
        var data = {
          id_backup: this.currentBackup.id,
          file: file
        }
      return await new Promise((resolve, reject) => {
          console.log(data);
          FileTracesDataService.historyFile(data)
          .then(response => {
             resolve(response.data);
          })
          .catch(e => {
            reject(e);
          });
        });
      },

      async retreiveDiffFiles(){
        var data = {
          id_backup: this.currentBackup.id
        }
        await FileTracesDataService.diffFiles(data).then(async response => {
          let aux = await response.data;
          let listed_labels = [];
          let file_name = "";
          let file_sizes = [];
          let chartArrayItem = null;
          let auxArrayItem = [];
          for (let i in aux){
            file_name = aux[i].file;
            let local_history = await this.retreiveHistoryFile(file_name);
            file_sizes = [];
            listed_labels = [];
            
            for (let j in local_history){
              listed_labels.push(local_history[j].createdAt);
              file_sizes.push(local_history[j].size);
            }
            console.log(i);
            let color = this.color_by_id(parseInt(i));

            chartArrayItem = {
              chartData: {
                labels: listed_labels,
                datasets: [
                  {label: file_name, data: file_sizes, tension: 0.3 , borderColor: color, backgroundColor: color}
                ]
              },
              chartOptions: {
                responsive: true,
              }
            }
            auxArrayItem.push(chartArrayItem);
          }
          console.log(auxArrayItem);
          this.chartArray = auxArrayItem;
          
          })
          .catch(e => {
            console.log(e);
          });
      },

      retrievebackups() {
        console.log("Trayendo backups");
        BackupDataService.getAll()
          .then(response => {
            this.backups = response.data;

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      async runBackup(index){
        this.status[index] = '[RUNNING]';
        
        let baseURL = `http://10.22.165.29:5000/?id=${this.currentBackup.id}`;
        axios.create({
            baseURL: baseURL,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'origin':'x-requested-with',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
            }
          });
        await axios.get(baseURL).then((response) => {
          console.log(response.data);
          if(response.data === '[ALL OK]') this.status[index] = 'success';
          if(response.data === '[NOT OK]') this.status[index] = 'failure';
          if(response.data === '[FINISHED WITH ERRORS]') this.status[index] = 'warning';
          this.retreiveDiffFiles();
          this.getBackupHistory(5);
        });
      },
      
      retreiveMetadata(){
        MetadataDataService.getMetaBackup(this.currentBackup.id)
          .then(async response => {

            if (response.data !== '' && response.data.constructor === Object) {
              this.noMetadataExists = true;
              this.currentMetadata = response.data;
              await this.retreiveDiffFiles();
              await this.getBackupHistory(5);
            }else{
              this.currentMetadata = {
              id_backup: this.currentBackup.id,
              ruta_respaldo: "",
              ip_servidor: "",
              ip_nas: "",
              rash: "",
              user_servidor: "",
              pw_servidor: "",
              port: null,
              reintentos_maximos: null
              }
              this.noMetadataExists = false;
            }

          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrievebackups();
        this.currentBackup = null;
        this.currentIndex = -1;
      },
  
      setActiveTutorial(tutorial, index) {
        this.currentBackup = tutorial;
        this.currentIndex = tutorial ? index : -1;
      },

      displaySpinner(tutorial, index) {
        this.currentBackup = tutorial;
        this.currentIndex = tutorial ? index : -1;
      },
  
      removeAllbackups() {
        BackupDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        BackupDataService.findByTitle(this.name)
          .then(response => {
            this.backups = response.data;
            this.setActiveTutorial(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },

      addBackup() {
        var data = {
          name: this.name
        };

        console.log(data);
  
        BackupDataService.create(data)
          .then(response => {
            this.backups.name = response.data.name;
            console.log(response.data);
            this.submitted = true;
            this.name = "";
            
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
        });

      },

      deleteBackup() {
        BackupDataService.delete(this.currentBackup.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "backups" });
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },

      addMetadata(){
        var data = this.currentMetadata;

        let auxCurrentBackup = this.currentBackup;
        let auxIndex = this.index;
          console.log(data);
    
        MetadataDataService.create(data)
          .then(response => {
            this.currentMetadata = response.data;
            console.log(response.data);
            this.submitted = true;

            this.retreiveMetadata();
            this.refreshList();
            this.setActiveTutorial(auxCurrentBackup, auxIndex);
          })
          .catch(e => {
            console.log(e);
        });
      },

      updateMetadata() {
        MetadataDataService.update(this.currentMetadata.id, this.currentMetadata)
          .then(response => {
            console.log(response.data);
            this.message = 'The metadata was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      }

    },
    mounted() {
      this.retrievebackups();
    }
  };
  
  </script>
  
  <style scoped>
  .legend-container {
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 14px;
    justify-content: center;
  }
  .badge {
    border-radius: 4.5px;
    padding: 0;
    width: 9px;
    height: 9px;
    display: inline-block;
    margin-right: 3px;
  }
  </style>
  