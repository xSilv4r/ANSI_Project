<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.png" alt="Logo" style="width:40px;"> SAP
            </router-link>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Acceuil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="!isLoggedIn" to="authentication">Connection</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="magazines">Magazines</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="contact">Contact</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{username}}
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" to="profile">Profile</router-link>
              <a class="dropdown-item" href="#">Settings</a>
              <a class="dropdown-item" @click="logout">Logout</a>
            </div>
          </li>
        </ul>
        <!--<form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>-->
      </div>
    </nav>
  </div>
</template>

<script>
import * as auth from "../services/AuthService";
export default {
  data() {
    return {};
  },
  computed: {
    username() {
      return auth.getUsername();
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/authentication");
      });
    }
  }
};
</script>