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
          <button class="btn btn-primary btn-block" type="submit">Log In</button>
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
        <p>We will never share your email address</p>
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
      event.preventDefault()
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
.login-dark {
  height: 600px;
  background: #475d62;
  background-size: cover;
  position: relative;
}

.login-dark form {
  max-width: 320px;
  width: 90%;
  background-color: #1e2833;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.login-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #2980ef;
}

.login-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.login-dark form .btn-primary {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.login-dark form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.login-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-dark form .forgot:hover,
.login-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.login-dark form .btn-primary:active {
  transform: translateY(1px);
}
</style>
