import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async getArticles(context) {
      try {
        const response = await axios.get("http://localhost:7000/articles/");
        context.commit("setArticles", response.data);
      } catch (error) {
        if (error.response?.status === 503) {
          console.log("Server error. Try again later");
          return [];
        } else {
          console.log(
            error.response?.data?.message ||
              error.message ||
              "Something went wrong!"
          );
        }
      }
    }
  },
  modules: {}
});
