<template>
  <div class="register">
  <b-container>
  <b-row>
    <b-col>
    <b-form >
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

      <b-form-group
        id="f1"
        label="Name:"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="f2"
        label="Password:"
      >
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
    </b-col>
  </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
      return {
          form: {
          email: '',
          name: '',
          password: ''
          },
        }
  },
    methods:{
      register: function(){
        let name=this.form.name
        let email=this.form.email
        let password = this.form.password
        this.$store
          .dispatch("register",{ name, email, password} )
          .then(() => this.$router.push("/login"))
          .catch(err => console.log(err))
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
    margin: 50px;
}
</style>
