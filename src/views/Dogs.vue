<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-treeview v-model="tree" :items="items" open-on-click>
          <template slot="label" slot-scope="props">
            <router-link :to="props.item.to" v-if="props.item.to">{{
              props.item.name
            }}</router-link>
            <span v-else>{{ props.item.name }}</span>
          </template>
        </v-treeview>
      </v-flex>
    </v-layout>
  </v-container>
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
        let breedsTo = ''
        const subbreeds = []
        if (breeds[breed].length > 0) {
          for (const subbreed in breeds[breed]) {
            let subbreedsTo = `/dogs/${breed}-${breeds[breed][subbreed]}`
            let subbreedName = this.ucFirst(breeds[breed][subbreed])
            subbreeds.push({ name: subbreedName, to: subbreedsTo })
          }
        } else {
          breedsTo = `/dogs/${breed}`
        }
        let breedName = this.ucFirst(breed)
        this.items.push({ name: breedName, children: subbreeds, to: breedsTo })
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
