<template>
  <div class="profile-page">
    <div class="container">
      <div class="row profile">
        <div class="col-md-3">
          <div class="profile-sidebar">
            <!-- SIDEBAR USERPIC -->
            <div class="profile-userpic">
              <img
                src="https://www.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg"
                class="img-responsive"
                alt
              />
            </div>
            <!-- END SIDEBAR USERPIC -->
            <!-- SIDEBAR USER TITLE -->
            <div class="profile-usertitle">
              <div class="profile-usertitle-name">{{username}}</div>
              <div class="profile-usertitle-job">{{id}}</div>
            </div>
            <!-- END SIDEBAR USER TITLE -->
            <!-- SIDEBAR BUTTONS -->
            <div class="profile-userbuttons">
              <button type="button" class="btn btn-success btn-sm">Follow</button>
              <button type="button" class="btn btn-danger btn-sm">Message</button>
            </div>
            <!-- END SIDEBAR BUTTONS -->
            <!-- SIDEBAR MENU -->
            <div class="profile-usermenu">
              <ul>
                <li class="active">
                  <a href="#">
                    <i class="glyphicon glyphicon-home"></i>
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="glyphicon glyphicon-user"></i>
                    Account Settings
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i class="glyphicon glyphicon-ok"></i>
                    Tasks
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="glyphicon glyphicon-flag"></i>
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <!-- END MENU -->
          </div>
        </div>
        <div class="col-md-9">
          <div class="profile-content">
<!--             <div class="card">
              <div class="card-body">
                <h2 class="card-title">Doughnut</h2>
              </div>

              <div class="card-img-bottom">
                <chartjs-doughnut
                  :bind="true"
                  :datasets="datasets"
                  :labels="labels"
                  :option="option"
                />
              </div>
            </div> -->

            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Overview</h2>

<!--                 <div class="btn-group btn-group-toggle">
                  <label
                    v-for="(item, index) in btn"
                    :key="index"
                    :class="{ active: item.value == radio }"
                    class="btn btn-primary"
                  >
                    <input v-model="radio" :name="dataLabel" :value="item.value" type="radio" />
                    {{ item.label }}
                  </label>
                </div> -->
              </div>

              <div class="card-img-bottom">
                <chartjs-bar
                :labels=labels
                :datalabel=dataLabel
                :data=scores
                :bind="true"
                >
                </chartjs-bar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as auth from "../services/AuthService";
import * as score from "../services/ScoreManager";

export default {
  name: "Profile",
  data() {
    return {
      scores: [],
      beginZero: true,
      labels: ["Généralités","Sécurité","Linux"],
      dataLabel: "Meilleur Scores"
    };
  },
  created() {
    score.getScore().then(res=>{Array.prototype.push.apply(this.scores, res)})
  },
  computed: {
    username() {
      return auth.getUsername();
    },
    id() {
      return auth.getId();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-page {
  background: #475d62 url();
  height: 1200px;
  padding: 100px;
}

/* Profile container */
.profile {
  margin: 20px 0;
}

/* Profile sidebar */
.profile-sidebar {
  padding: 20px 0 10px 0;
  background: #fff;
}

.profile-userpic img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-usertitle-job {
  text-transform: uppercase;
  color: #5b9bd1;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.profile-userbuttons {
  text-align: center;
  margin-top: 10px;
}

.profile-userbuttons .btn:last-child {
  margin-right: 0px;
}

.profile-usermenu {
  margin-top: 30px;
}

.profile-usermenu ul li {
  list-style-type: none;
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li:last-child {
  border-bottom: none;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 14px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}

/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
</style>
