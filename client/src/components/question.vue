<template>
  <div>
    <strong>{{ questions.text }} </strong>

    <div v-for="(answer,index) in questions.answers" :key="index">
        <b-button variant="outline-primary">{{answer}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
