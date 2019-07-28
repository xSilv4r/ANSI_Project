<template>
  <div id="app">
    <Navbar />
    <div id="app-container">
    <router-view />
    </div>
    <footer class="container">
      <p class="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; 2019-2020 ANSI, Shedy Chered. &middot;
        <a href="#">Privacy</a> &middot;
        <a href="#">Terms</a>
      </p>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{
    Navbar
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>
