<template>
  <v-container>
    <v-row>
      <v-col sm='8' offset-sm="2" v-for="(meetup,index) in meetUps" :key="index">
        <v-card dark>
          <div class="d-flex flex-no-wrap">
            <v-col sm="6">
              <v-img :src="meetup.imgUrl" height="130px"></v-img>
            </v-col>
            <div>
              <v-card-title class="headline">{{meetup.title}}</v-card-title>
              <v-card-subtitle>{{meetup.date}}</v-card-subtitle>
              <v-card-actions>
                <v-btn small router :to="'/meetups/' + meetup.id">view meetup</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed:{
    meetUps(){
      return this.$store.getters.loadedMeetups
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
