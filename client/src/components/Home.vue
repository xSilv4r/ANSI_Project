<template>
  <div>
    <div v-if="intro">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>ANSI</h1>
                <p>Bienvenue sur le dispositif d’assistance aux victimes d’actes de cybermalveillance.</p>
                <p>
                  <router-link
                    class="btn btn-lg btn-primary"
                    to="login"
                    role="button"
                  >S'inscrire Ajourd'hui</router-link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>QCM</h1>
                <p>Commencer un QCM</p>
                <p>
                  <a class="btn btn-lg btn-primary" @click="start" role="button">Commencer</a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>
            <h2>Ransomwares</h2>
            <p>Guide de bonnes pratiques pour éviter les Ransomwares.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">Voir plus &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>
            <h2>Sécurité du PC</h2>
            <p>Principaux risques & Mesures de protection pour votre poste de travaille</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>
            <h2>Placeholder</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              SAHER MAGAZINE.
              <span class="text-muted">En sa 5éme édition.</span>
            </h2>
            <p class="lead">Forensics. Analyse à chaud d'une machine Windows</p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Oh yeah, it’s that good.
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p
              class="lead"
            >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              And lastly, this one.
              <span class="text-muted">Checkmate.</span>
            </h2>
            <p
              class="lead"
            >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->
    </div>

    <div class="home">
      <div v-if="choice">
        <div class="container">
          <div class="row">

            <div class="col-md-3">
              <div class="card" style="width: 14rem;">
                <img src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">QCM 1</h5>
                  <p
                    class="card-text">Facile</p>
                  <button @click="otherQuestions" class="btn btn-primary">Commencer</button>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card" style="width: 14rem;">
                <img src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">QCM 2</h5>
                  <p
                    class="card-text">Moyen</p>
                  <a href="#" class="btn btn-primary">Commencer</a>
                </div>
              </div>
            </div>
            
            <div class="col-md-3">
              <div class="card" style="width: 14rem;">
                <img src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">QCM 3</h5>
                  <p
                    class="card-text">Difficile</p>
                  <a href="#" class="btn btn-primary">Commencer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <h1>Vous êtes:</h1>
        <button @click="victimQuestions" class="btn btn-danger">Victime</button>
        <button @click="otherQuestions" class="btn btn-dark">Autre</button>-->
      </div>

      <div v-if="oQuestions">
        <h1>QCM</h1>
        <h3>{{questions[currentQuestion].text}} :</h3>
        <div class="form-check">
          <div v-for="answer in questions[currentQuestion].answers">
            <input
              class="form-check-input"
              id="radio1"
              type="radio"
              v-model="selected"
              name
              :value="answer"
            />
            {{answer}}
          </div>
        </div>
        <button @click="handleAnswer" class="btn btn-success">Suivant</button>
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
        <button @click="otherQuestions" class="btn btn-danger">Refaire</button>
        <button @click="saveScore" class="btn btn-success">Enregistrer</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      this.currentQuestion = 0;
      this.choice = false;
      this.results = false;
      this.oQuestions = true;
    },
    handleAnswer() {
      this.answers[this.currentQuestion] = this.selected;
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.oQuestions = false;
        this.results = true;
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
    saveScore() {
      this.$store.dispatch("fetchProfile");
      let id = this.$store.state.profile.id;
      let score = this.correct;
      axios({
        url: "http://localhost:3000/score",
        data: { id, score },
        method: "POST"
      })
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(err => {
          console.log(err);
        });
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

.jumbotron {
  color: black;
}

/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 100vh;
  background-image: url("https://i.ytimg.com/vi/vV6JpyUlLXc/maxresdefault.jpg");
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
