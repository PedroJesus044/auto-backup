<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Auto-backup</router-link>
      <div class="navbar-nav mr-auto">
        <ul class="nav d-flex justify-content-between">
          <li class="nav-item" v-if="token">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item " v-if="isAdmin">
            <router-link to="/backups" class="nav-link">Backups</router-link>
          </li>
        </ul>
       

      </div>
      <div class="float-right" v-if="token">
        <div class="dropdown">
          <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ username }}
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="logout()">Logout</a>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>

  <div id="bottom"></div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      token: false,
      isAdmin: false,
      username: ""
    };
  },
  methods: {
    validateSession(){
      this.token = sessionStorage.getItem("token") ? true : false;
      this.isAdmin = sessionStorage.getItem("role")==="admin" ? true : false;
      this.username = sessionStorage.getItem("username");
    },
    logout(){
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("username");
      this.validateSession();
      this.$router.push("/")
    }
  },
  mounted() {
        this.validateSession();
        this.timer = setInterval(() => {
          this.validateSession();
        }, 300)
  }

};
</script>
