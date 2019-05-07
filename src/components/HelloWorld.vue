<template>
  <v-container>
    <!-- <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
            >{{ next.text }}</a
          >
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
            >{{ link.text }}</a
          >
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
            >{{ eco.text }}</a
          >
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout text-xs-center wrap>
      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">{{ msg }}</h2>
        <v-layout justify-center>
          <p>
            For a guide and recipes on how to configure / customize this
            project,
            <br />check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
              >vue-cli documentation</a
            >.
          </p>
        </v-layout>
        <v-layout justify-center>
          <h3>Installed CLI Plugins</h3>
          <ul>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                target="_blank"
                rel="noopener"
                >babel</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                target="_blank"
                rel="noopener"
                >eslint</a
              >
            </li>
          </ul>
        </v-layout>
        <v-layout justify-center>
          <h3>Essential Links</h3>
          <ul>
            <li>
              <a href="https://vuejs.org" target="_blank" rel="noopener"
                >Core Docs</a
              >
            </li>
            <li>
              <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
                >Forum</a
              >
            </li>
            <li>
              <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
                >Community Chat</a
              >
            </li>
            <li>
              <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
                >Twitter</a
              >
            </li>
            <li>
              <a href="https://news.vuejs.org" target="_blank" rel="noopener"
                >News</a
              >
            </li>
          </ul>
        </v-layout>
        <v-layout justify-center>
          <h3>Ecosystem</h3>
          <ul>
            <li>
              <a href="https://router.vuejs.org" target="_blank" rel="noopener"
                >vue-router</a
              >
            </li>
            <li>
              <a href="https://vuex.vuejs.org" target="_blank" rel="noopener"
                >vuex</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-devtools#vue-devtools"
                target="_blank"
                rel="noopener"
                >vue-devtools</a
              >
            </li>
            <li>
              <a
                href="https://vue-loader.vuejs.org"
                target="_blank"
                rel="noopener"
                >vue-loader</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/awesome-vue"
                target="_blank"
                rel="noopener"
                >awesome-vue</a
              >
            </li>
          </ul>
        </v-layout>
      </v-flex>
    </v-layout>-->

    <v-layout text-xs-center wrap>
      <v-flex xs12 mb-5>
        <h1 class="display-2 font-weight-bold mb-3">{{ msg }}</h1>
      </v-flex>

      <v-flex mb-5 xs12>
        <v-layout justify-center>
          <router-link v-for="(next, i) in Links" :key="i" :to="next.href">
            <a class="subheading mx-3">{{ next.text }}</a>
          </router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    msg: 'Welcome to the list of dog breeds',
    Links: [
      {
        text: 'List all breeds',
        href: '/dogs'
      },
      {
        text: 'About',
        href: '/about'
      }
    ]

    // msg: 'Vue CLI',
    // ecosystem: [
    //   {
    //     text: 'vuetify-loader',
    //     href: 'https://github.com/vuetifyjs/vuetify-loader'
    //   },
    //   {
    //     text: 'github',
    //     href: 'https://github.com/vuetifyjs/vuetify'
    //   },
    //   {
    //     text: 'awesome-vuetify',
    //     href: 'https://github.com/vuetifyjs/awesome-vuetify'
    //   }
    // ],
    // importantLinks: [
    //   {
    //     text: 'Documentation',
    //     href: 'https://vuetifyjs.com'
    //   },
    //   {
    //     text: 'Chat',
    //     href: 'https://community.vuetifyjs.com'
    //   },
    //   {
    //     text: 'Made with Vuetify',
    //     href: 'https://madewithvuetifyjs.com'
    //   },
    //   {
    //     text: 'Twitter',
    //     href: 'https://twitter.com/vuetifyjs'
    //   },
    //   {
    //     text: 'Articles',
    //     href: 'https://medium.com/vuetify'
    //   }
    // ],
    // whatsNext: [
    //   {
    //     text: 'Explore components',
    //     href: 'https://vuetifyjs.com/components/api-explorer'
    //   },
    //   {
    //     text: 'Select a layout',
    //     href: 'https://vuetifyjs.com/layout/pre-defined'
    //   },
    //   {
    //     text: 'Frequently Asked Questions',
    //     href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
    //   }
    // ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
