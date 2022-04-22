import axios from "axios";

export default {
  namespaced: true,
  state: {
    articles: [
      {id: "0517f083-0e15-4876-8d1f-6fa45900431c", name: "Leg", amountInStock: 12},
      {id: "addc65a8-c759-41d8-a18a-89fe446ad484", name: "Screw", amountInStock: 17}
    ],
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
  }
};
