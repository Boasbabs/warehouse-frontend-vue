<template>
  <c-box minH="100vh" bg="gray.100">
    <c-box bg="white" pos="fixed" h="full" min-w="15rem">
      <c-flex h="20" align="center" mx="8" justify="space-between">
        <c-text  fontSize="2xl" fontWeight="light">
          Warehouse
        </c-text>
        <c-close-button display="none"></c-close-button>
      </c-flex>
      <c-link
        color="gray.900"
        as="router-link"
        v-for="menu in linkItems"
        :key="menu.name"
        :to="menu.route"
        :style="{ textDecoration: 'none' }"
        :_focus="{ boxShadow: 'none' }"
      >
        <c-flex
          align="center"
          p="3"
          mx="4"
          borderRadius="md"
          role="group"
          cursor="pointer"
          :_hover="{ bg: 'gray.200' }"
        >
          {{ menu.name }}
        </c-flex>
      </c-link>
    </c-box>

    <c-flex px="4" ml="60" bg="white" h="20" align="center" justify="center">
      <c-text display="none" fontSize="2xl" color="gray.900" fontWeight="light">
        Warehouse
      </c-text>
    </c-flex>
    <c-box ml="60" p="4" pb="50">
      <slot name="main"> </slot>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CCloseButton, CText, CFlex, CLink } from "@chakra-ui/vue";

export default {
  name: "AppLayout",
  components: {
    CBox,
    CCloseButton,
    CText,
    CFlex,
    CLink
  },
  data() {
    return {
      linkItems: [
        { name: "Articles", route: "articles" },
        { name: "Products", route: "products" },
        { name: "Sales", route: "sales" }
      ]
    };
  }
};
</script>

<style></style>
