<template>
  <div class="toolbar">
    <v-navigation-drawer temporary v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link v-for="(menuItem,index) in menuItems" :key="index" router :to="menuItem.link">
          <v-list-item-action>
            <v-icon>{{menuItem.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{menuItem.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up" />
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor:pointer">DevMeetUP</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(menuItem,index) in menuItems" :key="index" router :to="menuItem.link">
          <v-icon>{{menuItem.icon}}</v-icon>{{menuItem.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: '', title: 'ViewMeetup',link:'/meetups' },
        { icon: '', title: 'Organize MeetUp', link:'/meetups/new' },
        { icon: '', title: 'Profile' ,link:'/profile' },
        { icon: '', title: 'Sign UP' ,link:'/signup'},
        { icon: '', title: 'Sign In' ,link:'/signin' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
