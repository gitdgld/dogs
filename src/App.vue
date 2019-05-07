<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">DOG BREEDS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Menu</v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="changePage(item.href)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn flat href="https://dog.ceo/dog-api/" target="_blank">
        <span class="mr-2">Dog API</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Dogs from "./views/Dogs";

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  //   Dogs
  // },
  data() {
    return {
      items: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'List all breeds',
          href: '/dogs'
        },
        {
          title: 'About',
          href: '/about'
        }
      ]
    }
  },
  methods: {
    changePage: function(href) {
      if (href != this.$route.href) {
        this.$router.push({ path: href })
      }
    }
  }
}
</script>
