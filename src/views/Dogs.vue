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
      const breeds = response.data.message

      for (const breed in breeds) {
        const subbreeds = []
        if (breeds[breed].length > 0) {
          for (const subbreed in breeds[breed]) {
            let subbreedName = this.ucFirst(breeds[breed][subbreed])
            subbreeds.push({ name: subbreedName })
          }
        }
        let breedName = this.ucFirst(breed)
        this.items.push({ name: breedName, children: subbreeds })
      }
    })
  },
  methods: {
    ucFirst: function(text) {
      return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }
  }
}
</script>

<style scoped></style>
