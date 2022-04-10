<template>
  <c-box maxW="full" mt="0" justify="center" align="center" overflow="hidden">
    <c-heading as="h3" size="lg" fontWeight="light"> Add Articles </c-heading>
    <c-text color="gray.600" fontSize="xl" mb="6">
      <c-button
        as="router-link"
        to="/articles"
        colorScheme="blackAlpha"
        variant="link"
        size="sm"
      >
        &#8592; Back to Articles
      </c-button>
    </c-text>
    <c-box
      w="400px"
      text-align="left"
      d="flex"
      bg="white"
      borderRadius="md"
      p="8"
      color="gray.800"
    >
      <c-stack w="full" spacing="5">
        <c-form-control>
          <c-form-label for="name">Name:</c-form-label>
          <c-input
            type="text"
            size="md"
            id="name"
            aria-describedby="name-helper-text"
          />
          <c-form-helper-text
            v-if="false"
            color="red.500"
            id="name-helper-text"
          >
            Some error here
          </c-form-helper-text>
        </c-form-control>

        <c-form-control>
          <c-form-label for="amountInStock">Amount In Stock:</c-form-label>
          <c-input
            type="text"
            size="md"
            id="amountInStock"
            aria-describedby="amountInStock-helper-text"
          />
          <c-form-helper-text
            v-if="false"
            color="red.500"
            id="amountInStock-helper-text"
          >
            Some error here
          </c-form-helper-text>
        </c-form-control>

        <c-form-control :float="'right'">
          <c-button size="sm" variant-color="gray" variant="solid">
            Create Article
          </c-button>
        </c-form-control>
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
  CFormControl,
  CFormLabel,
  CFormHelperText,
  CInput
} from "@chakra-ui/vue";

export default {
  name: "AddArticle",
  components: {
    CFormControl,
    CFormHelperText,
    CInput,
    CStack,
    CButton,
    CText,
    CFormLabel,
    CBox,
    CHeading,
  }
};
</script>

<style></style>
