<template>
  <div class="home">
    <div v-if="intro" class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p
        class="lead"
      >Bienvenue sur le dispositif d’assistance aux victimes d’actes de cybermalveillance.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-dark btn-lg" @click="start">Commencer</a>
    </div>

    <div v-if="choice" class="box">
      <h1>Vous êtes:</h1>
      <button @click="victimQuestions" class="btn btn-danger">Victime</button>
      <button @click="otherQuestions" class="btn btn-dark">Autre</button>
    </div>

    <div v-if="oQuestions" class="box">
      <h1>QCM</h1>
      <h3>{{questions[currentQuestion].text}} :</h3>
      <div v-for="answer in questions[currentQuestion].answers">
        <input
          type="radio"
          v-model="selected"
          name
          :value="answer"
          aria-label="Radio button for following text input"
        />
        {{answer}}
      </div>
      <button @click="handleAnswer" class="btn btn-success">Answer</button>
    </div>

    <div v-if="vQuestions" class="box">
      <h1>Victim questions ....</h1>
    </div>

    <div v-if="results" class="box">
      <h1>
        You got
        <small class="text-muted">{{correct}}</small> right out of
        <small class="text-muted">{{questions.length}}</small> questions. Your percentage is
        <small class="text-muted">{{perc}}%.</small>
      </h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Home",
  data() {
    return {
      intro: true,
      choice: false,
      vQuestions: false,
      oQuestions: false,
      results: false,
      currentQuestion: 0,
      selected: "",
      answers: [],
      correct: 0,
      perc: null,
      questions: null
    };
  },
  created() {
    fetch("../static/quizz.json")
      .then(res => res.json())
      .then(res => {
        this.questions = res;
        console.log(this.questions.length);
      });
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    start() {
      if (this.isLoggedIn) {
        this.intro = false;
        this.choice = true;
      } else {
        this.$router.push("/login");
      }
    },
    victimQuestions() {
      this.choice = false;
      this.vQuestions = true;
    },
    otherQuestions() {
      this.choice = false;
      this.oQuestions = true;
    },
    handleAnswer() {
      this.answers[this.currentQuestion] = this.selected;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.oQuestions = false;
        this.results = true;
        this.$store.dispatch("fetchProfile")
        let id = this.$store.state.profile.id
        let score = this.correct
        console.log(id)
        this.saveScore(id,score)
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      this.questions.forEach((a, index) => {
        if (this.answers[index] === a.answer) this.correct++;
      });
      this.perc = ((this.correct / this.questions.length) * 100).toFixed(2);
      console.log(this.correct + " " + this.perc);
    },
    saveScore(id,score){
      axios({url:'http://localhost:3000/score',data:{id,score}, method: 'POST'})
      .then(response=>{
        console.log(response)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: #475d62 url();
  height: 800px;
  padding: 100px 200px 100px 200px;
  text-align: center;
  color: white;
}

.btn-dark {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.jumbotron{
  color:black;
}
</style>
