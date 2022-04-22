<template>
  <c-box maxW="full" mt="0" justify="center" align="center" overflow="hidden">
    <c-stack w="3xl" spacing="6" mb="6">
      <c-heading as="h3" size="lg" fontWeight="light"> Articles </c-heading>
      <c-text color="gray.600" fontSize="xl" mb="6">
        <c-button
          as="router-link"
          to="/article/add"
          variant-color="black"
          variant="outline"
          size="sm"
          width="full"
        >
          &#43; Add Articles
        </c-button>
      </c-text>
    </c-stack>
    <vue-virtual-table :config="tableConfig" :data="articles">
      <template slot-scope="scope" slot="actionCommon">
        <c-button-group :spacing="4">
          <c-button
            variant-color="gray"
            size="xs"
            as="router-link"
            :to="{
              name: 'SingleArticle',
              params: { articleId: scope.row.id },
              props: {
                details: {
                  firstName: 'John',
                  lastName: 'Snow'
                }
              }
            }"
          >
            Edit
          </c-button>
          <c-button
            variant="outline"
            size="xs"
            as="router-link"
            :to="{ name: 'SingleArticle', params: { articleId: scope.row.id } }"
          >
            Delete
          </c-button>
        </c-button-group>
      </template>
    </vue-virtual-table>
  </c-box>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  CStack,
  CBox,
  CButton,
  CButtonGroup,
  CText,
  CHeading
} from "@chakra-ui/vue";
import VueVirtualTable from "vue-virtual-table";

export default {
  name: "ListArticles",
  components: {
    CStack,
    CButton,
    CText,
    CBox,
    CHeading,
    CButtonGroup,
    VueVirtualTable
  },
  data() {
    return {
      tableConfig: [
        { prop: "_index", name: "#" },
        { prop: "name", name: "Article Name" },
        { prop: "amountInStock", name: "Amount in Stock" },
        { prop: "_action", name: "Action", actionName: "actionCommon" }
      ]
    };
  },
  computed: mapState({
    articles: (state) => state.articles.articles
  }),
  methods: {
    ...mapActions("articles", ["getArticles"]),
    handleSelectionChange(rows) {
      console.log(rows);
    }
  },
  mounted() {
    this.getArticles();
  }
};
</script>

<style></style>
