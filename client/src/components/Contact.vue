<template>
  <div class="contact">
    <b-container>
      <b-row>
        <b-col>
          <b-form>
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
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

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.subject"
                  required
                  placeholder="Enter subject"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label="Your Message:" label-for="input-4">
                <b-form-textarea
                  id="input-4"
                  v-model="form.message"
                  required
                  placeholder="Enter message"
                  rows="5"
                  max-rows="5"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="primary">Send</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-col>
      </b-row>
    </b-container> 
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      form:{
        email: '',
        name: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
    margin: 50px;
}
</style>
