<template>
  <v-treeview v-model="tree" :items="items" open-on-click></v-treeview>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dogs',
  data: () => ({
    tree: [],
    items: []
  }),
  mounted() {
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      let breeds = response.data.message

      for (const breed in breeds) {
        const subbreeds = []
        if (breeds[breed].length > 0) {
          for (const subbreed in breeds[breed]) {
            subbreeds.push({ name: breeds[breed][subbreed] })
          }
        }
        this.items.push({ name: breed, children: subbreeds })
      }
    })
  }
}
</script>

<style scoped></style>
