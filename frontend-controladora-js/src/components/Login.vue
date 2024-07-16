<template>
    <div class="row">
        <form class="mx-auto col-sm-3 ">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="login">Login</button>
        </form>
    </div>


  </template>
  
  <script>
//import { createApp } from "vue";
import SessionDataService from "../services/SessionDataService";
  export default {
    name: "login-screen",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login(){
        var data = {
          email: this.email,
          password: this.password
        }
        SessionDataService.login(data)
          .then(response => {
            if (response.status === 200 && 'username' in response.data) {
              this.$session.start()
              this.$session.set('jwt', response.body.token)
              this.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
              this.$router.push('/backups')
            }
          })
          .catch(e => {
            console.log(e);
        });
      },

    }
  };
  </script>