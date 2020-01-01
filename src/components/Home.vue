<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <v-btn color="primary" class="mx-2" router to="/meetups">explore meetup</v-btn>
        <v-btn color="primary" router to="/meetups/new">organize meetup</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-carousel cycle="true" style="cursor:pointer">
          <v-carousel-item
            v-for="(meetup, i) in meetUps"
            :key="i"
            :src="meetup.imgUrl"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <p>Join our awesome meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetUps() {
      return this.$store.getters.featuredMeetups;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push(`/meetups/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 8px;
}
</style>
