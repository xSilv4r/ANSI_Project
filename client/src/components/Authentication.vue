<template>
  <div class="authentication">
    <b-container>
      <b-row>
        <b-col>
          <div v-if="loginForm">
            <b-form>
              <b-form-group
                id="f1"
                label="Email address:"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="f2" label="Password:">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="********"
                ></b-form-input>
              </b-form-group>

              <b-button v-on:click="loginSubmit" variant="primary">Login</b-button>
              <b-button v-on:click="register" variant="success">Register</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-if="registerForm">
            <b-form>
              <b-form-group
                id="f1"
                label="Email address:"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="f1" label="Name:">
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Enter your name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="f2" label="Password:">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="********"
                ></b-form-input>
              </b-form-group>

              <b-button v-on:click="register" variant="primary">Register</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "authentication",
  data() {
    return {
      loginForm: true,
      registerForm: false,
      form: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    loginSubmit: function() {
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
    register() {
      this.loginForm = false;
      this.registerForm = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.authentication {
  margin: 50px;
}
</style>
