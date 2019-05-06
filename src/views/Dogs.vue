<template>
  <v-app>
    <v-content>
      <div class="dogs">
        <ul id="example-1">
          <li v-for="(subbreed, breed) in items">{{ breed }} {{ subbreed }}</li>
        </ul>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "Dogs",
  data() {
    return {
      items: null
    };
  },
  mounted() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
      console.log(response.data);
      this.items = response.data.message;
    });
  }
};
</script>

<style scoped></style>
