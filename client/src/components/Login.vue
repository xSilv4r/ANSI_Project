<template>
  <div class="login-dark">
    <div class="login" v-if="loginForm">
      <form v-on:submit="onSubmit">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-lock"></i>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            v-model="form.email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            v-model="form.password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-info btn-block" type="submit">Log In</button>
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-block" @click="register">Register</button>
        </div>
        <a href="#" class="forgot">Forgot your email or password?</a>
      </form>
    </div>

    <div class="register" v-if="registerForm">
      <form method="post">
        <h2 class="sr-only">Register Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-person-add"></i>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            v-model="form.email"
            name="email"
            placeholder="Email"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="form.name"
            name="name"
            placeholder="name"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            v-model="form.password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button class="btn btn-primary btn-block" @click="registerSubmit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      registerForm: false,
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      let email = this.form.email;
      let password = this.form.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    registerSubmit: function() {
      let name = this.form.name;
      let email = this.form.email;
      let password = this.form.password;
      this.$store
        .dispatch("register", { name, email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    register: function() {
      this.loginForm = false;
      this.registerForm = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
