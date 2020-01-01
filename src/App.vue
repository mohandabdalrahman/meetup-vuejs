<template>
  <v-app>
    <Toobar />
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Toobar from './components/Toobar'

export default {
  name: 'App',

  components: {
    Toobar
  },

  data: () => ({
    //
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style >
main{
  margin-top: 64px;
}
</style>
