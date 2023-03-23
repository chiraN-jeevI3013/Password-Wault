<template>
  <div class="headerButtons">
        <v-btn 
        class="ma-2 mx-2 activeClass"
        :class = "homeColor"
        @click="gotoHome()"
        small
        >
        Home
        </v-btn>

        <v-btn
        class="ma-2 mx-2"
        :class = "aboutColor"
        @click="gotoAbout()"
        small
        >
        About
        </v-btn>

        <v-btn
        class="ma-2 mx-2"
        :class = "listColor"
        @click="gotoList()"
        small
        >
        List
        </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        homeColor: "defaultClass",
        aboutColor: "defaultClass",
        listColor: "defaultClass",
      }
    },
    mounted() {
      console.log("Mounted: this.$route: ", this.$route);

      if(this.$route.name == 'home')
        this.homeColor = "activeClass";
      else
        this.homeColor = "defaultClass";

      if (this.$route.name == 'about')
        this.aboutColor = "activeClass";
      else
        this.aboutColor = "defaultClass";

      if (this.$route.name == 'list')
        this.listColor = "activeClass";
      else this.listColor = "defaultClass"

    },
    methods: {
        gotoHome() {
          let currentUrl = this.$route;
          console.log("currentUrl: ", currentUrl);
          
          if (this.$route.name != 'home') {
            this.$router.push({
              name: 'home'
            }) 
          } else {
            console.log('Already in Home Bro');
          }
          

        },
        gotoAbout() {
          let currentUrl2 = this.$route;
          console.log("currentUrl2: ", currentUrl2);
          
          if (this.$route.name != 'about') {
            this.$router.push({
              name: 'about'
            }) 
          } else {
            console.log('Already in About Bro');
          }

            
        },
        gotoList() {
          let currentUrl3 = this.$route;
          console.log("currentUrl3: ", currentUrl3);

          if (this.$route.name != 'list') {
            this.$router.push({
              name: 'list'
            }) 
          } else {
            console.log('Already in List Bro');
          }
            
        },
    },
  }
</script>


<style>
.headerButtons{
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    background-color: black;
}
.activeClass{
  background-color: burlywood !important;
}

.defaultClass{
  background-color: whitesmoke !important;
}
</style>