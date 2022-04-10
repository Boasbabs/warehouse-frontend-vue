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
    <c-list styleType="disc">
      <c-list-item v-for="(item, index) in ToDoItems" :key="index">
        {{ item.label }}
        </c-list-item>
    </c-list>
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
  CListItem,
} from "@chakra-ui/vue";

export default {
  name: "ListArticles",
  components: {
    CStack,
    CButton,
    CText,
    CBox,
    CHeading,
    CList,
    CListItem,
  },
  data() {
    return {
      ToDoItems: [
        { label: "Learn Vue", done: false },
        { label: "Create a Vue project with the CLI", done: true },
        { label: "Have fun", done: true },
        { label: "Create a to-do list", done: false }
      ]
    };
  }
};
</script>

<style></style>
