import Vue from 'vue';
import Vuex from 'vuex';
// Data Mock
import { API_ARTICLE } from "../services/axios.js";
import { articles } from "../database/db.json";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: articles
  },
  getters: {
    article: state => (id) => {
      return state.articles.find(article => article.id === id)
    },
    articles: state => state.articles
  },
  mutations: {
    change(state, articles) {
      state.articles = articles
    },
    getApiArticles(state, articles){
      API_ARTICLE.get()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          // Error
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  }
})