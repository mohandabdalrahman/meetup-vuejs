<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card dark>
          <div>
            <div>
              <v-card-title class="headline">{{meetUp.title}}</v-card-title>
              <v-card-subtitle>{{meetUp.date}}</v-card-subtitle>
            </div>
            <v-col>
              <v-img :src="meetUp.imgUrl" height="400px"></v-img>
            </v-col>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima qui officia mollitia recusandae sapiente molestias placeat quas in! Obcaecati veniam minima neque voluptate mollitia ut cupiditate maxime distinctio laudantium?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>register</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:['id'],
  computed: {
    meetUp() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
