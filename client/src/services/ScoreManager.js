import * as auth from './AuthService.js'
import axios from 'axios'

export function getScore() {
  const _id = auth.getId()
  return axios
    .get("http://localhost:3000/score", {
      params: {
        id: _id
      }
    })
    .then(response => {
        return response.data
    })
.catch(err => {
  console.log(err);
});
}

export function setScore(score) {
  const id = auth.getId()
  axios({
      url: "http://localhost:3000/score",
      data: {
        id,
        score
      },
      method: "POST"
    })
    .then(() => {
      this.$router.push("/profile");
    })
    .catch(err => {
      console.log(err);
    });
}
