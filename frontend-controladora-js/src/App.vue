<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezKoder</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/backups" class="nav-link">Backups</router-link>
        </li>
      </div>
    </nav>

    <div class="m-3">
      <router-view />
    </div>
  </div>

  <div id="bottom"></div>
</template>

<script>
export default {
  name: "app"
};
</script>
