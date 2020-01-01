<template>
  <v-container>
    <v-row>
      <v-col sm="8" offset-sm="2">
        <h3>Create a new meetup</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <form >
          <v-row>
            <v-col sm="8" offset-sm="2">
              <v-text-field label="Title" required v-model="title"></v-text-field>
            </v-col>
            <v-col sm="8" offset-sm="2">
              <v-text-field label="Location" required v-model="location"></v-text-field>
            </v-col>
            <v-col sm="8" offset-sm="2">
              <v-text-field label="ImgURL" required v-model="ImgURL"></v-text-field>
            </v-col>
            <v-col sm="8" offset-sm="2">
              <img :src="ImgURL" :alt="title" height="200" />
            </v-col>
            <v-col sm="8" offset-sm="2">
              <v-text-field label="Description" required v-model="descrip"></v-text-field>
            </v-col>
            <v-col sm="8" offset-sm="2">
              <v-btn :disabled="!formIsValid" @click.prevent="onCreateMeetup">create meetup</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      ImgURL: "",
      descrip: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.ImgURL !== "" &&
        this.descrip !== ""
      );
    }
  },
  methods: {
    onCreateMeetup() {
      const meetUpData = {
        title: this.title,
        location: this.location,
        ImgURL: this.ImgURL,
        descrip: this.descrip,
        date: new Date()
      }
      this.$store.dispatch("createMeetup", meetUpData);
      // this.title == "";c
      // this.location == "";
      // this.ImgURL == "";
      // this.descrip == "";
      this.$router.push('/meetups')
      console.log(meetUpData)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
