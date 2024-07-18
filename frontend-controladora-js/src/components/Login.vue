<template>
    <div class="row">
        <div class="mx-auto col-sm-3 ">
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter username">
                <small id="emailHelp" class="form-text text-muted">We'll never share your data with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" v-on:keyup.enter="login">
            </div>
            <button type="button" class="btn btn-primary" @click="login">Login</button>
        </div>
    </div>

  </template>
  
  <script>
//import { createApp } from "vue";
import SessionDataService from '@/services/SessionDataService';
  export default {
    name: "login-screen",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login(){
        var data = {
          email: this.email,
          password: this.password
        }
        await SessionDataService.login(data)
            .then(response => {
              if (response.status === 200 && 'username' in response.data) {
                console.log(response.data);
                sessionStorage.setItem("token", "fewuoibfeiwbslwl");
                sessionStorage.setItem("role", response.data.role);
                sessionStorage.setItem("username", response.data.username);
                this.$router.push('/backups');
              }
            })
            .catch(e => {
              console.log(e);
          });
      },

      validateSession(){
        this.token = sessionStorage.getItem("token") ? true : false;
        this.isAdmin = sessionStorage.getItem("role")==="dashboard" ? true : false;
        this.username = sessionStorage.getItem("username");
      }
    },
    mounted() {
          this.validateSession();
          this.timer = setInterval(() => {
            this.validateSession();
          }, 300)
          if(this.token) this.$router.push("/dashboard")
    }
  };
  </script>