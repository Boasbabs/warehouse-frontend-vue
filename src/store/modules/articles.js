import axios from "axios";

export default {
  namespaced: true,
  state: {
    articles: [],
    singleArticle: {},
    status: null
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async getArticles({ commit }) {
      try {
        const response = await axios.get("http://localhost:7000/articles/");
        commit("setArticles", response.data);
      } catch (error) {
        if (error.response?.status === 503) {
          alert("Server error. Try again later");
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
  }
};
