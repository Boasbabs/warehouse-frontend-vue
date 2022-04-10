<template>



  <div class="home">
    <c-box>
      <c-button> Chakra Consumed! ⚡️ </c-button>
    </c-box>
  </div>

</template>

<script>
import { CBox, CButton } from "@chakra-ui/vue";
export default {
  name: "Home",
  components: {
    CBox,
    CButton,
  }
};
</script>
