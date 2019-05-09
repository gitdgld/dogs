<template>
  <v-container fluid>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-btn color="orange darken-2" dark @click="goBack()">
          <v-icon dark left rounded>arrow_back</v-icon>Back
        </v-btn>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ ucFirst(breedName) }}
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-img
          :src="breedImage"
          :alt="ucFirst(breedName)"
          max-height="250"
          contain
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DogDetail',
  data() {
    return {
      breedImage: ''
    }
  },
  props: {
    breedName: {
      type: String
    }
  },
  // computed: {
  //   breed: function() {
  //     return this.$route.params.breed
  //   }
  // },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/dogs')
    },
    ucFirst: function(text) {
      return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }
  },
  mounted() {
    let path = `https://dog.ceo/api/breed/${this.breedName}/images/random`
    axios.get(path).then(response => (this.breedImage = response.data.message))
  }
}
// import axios from 'axios'
// export default {
//   name: 'Dogs',
//   data: () => ({
//     tree: [],
//     items: []
//   }),
//   mounted() {
//     axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
//       const breeds = response.data.message

//       for (const breed in breeds) {
//         const subbreeds = []
//         if (breeds[breed].length > 0) {
//           for (const subbreed in breeds[breed]) {
//             let subbreedName = this.ucFirst(breeds[breed][subbreed])
//             subbreeds.push({ name: subbreedName })
//           }
//         }
//         let breedName = this.ucFirst(breed)
//         this.items.push({ name: breedName, children: subbreeds })
//       }
//     })
//   },
//   methods: {
//     ucFirst: function(text) {
//       return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
//     }
//   }
// }
</script>

<style scoped></style>
