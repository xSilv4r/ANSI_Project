<template>
  <div class="contact">
    <div style="width: 100%">
      <iframe
        width="100%"
        height="400"
        src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=ansi%2C%20tunis+(ANSI)&amp;ie=UTF8&amp;t=&amp;z=19&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      >
        <a href="https://www.maps.ie/map-my-route/">Create route map</a>
      </iframe>
    </div>
    <br />
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Subject</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        subject: "",
        message: ""
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  padding: 100px 200px 100px 200px;
  height: 1000px;
  background: #475d62;
  background-size: cover;
  position: relative;
  color: white;
}
</style>
