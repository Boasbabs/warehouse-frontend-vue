<template>
  <c-box maxW="full" mt="0" justify="center" align="center" overflow="hidden">
    <c-stack w="3xl" spacing="6" mb="6">
      <c-heading as="h3" size="lg" fontWeight="light">
        Single Article
      </c-heading>
      <c-text color="gray.600" fontSize="xl">
        <c-button
          as="router-link"
          to="/articles"
          variant-color="gray"
          variant="link"
          size="sm"
        >
          &#8592; Back to Articles
        </c-button>
      </c-text>
    </c-stack>
    <c-box
      w="400px"
      p="8"
      d="flex"
      bg="white"
      color="gray.800"
      justify="flex-start"
      borderRadius="md"
      text-align="left"
    >
      <c-stack w="full" spacing="5">
        <c-heading as="h3" size="lg" fontWeight="light">
          ARTICLE DETAILS
        </c-heading>

        <c-list styleType="disc">
          <c-list-item>Lorem ipsum dolor sit amet</c-list-item>
          <c-list-item>Consectetur adipiscing elit</c-list-item>
          <c-list-item>Integer molestie lorem at massa</c-list-item>
          <c-list-item>Facilisis in pretium nisl aliquet</c-list-item>
        </c-list>
      </c-stack>
    </c-box>
  </c-box>
</template>

<script>
import {
  CStack,
  CBox,
  CButton,
  CText,
  CHeading,
  CList,
  CListItem
} from "@chakra-ui/vue";

export default {
  name: "AddArticle",
  props: {
    details: {
      type: Object,
      require: true
    }
  },
  components: {
    CStack,
    CButton,
    CText,
    CBox,
    CHeading,
    CList,
    CListItem
  },
  created() {
    const articleId = this.$route.params.articleId;
    console.log("articleId", articleId);
  },
};
</script>

<style></style>
