<template>
  <div class="home">
    <HeaderLine></HeaderLine>
    <HomePage title="BASSWORD WALTU"/>
  </div>
</template>

<script>
  import HeaderLine from '@/components/HeaderLine.vue';
  import HomePage from '@/components/HomePage.vue';
  //import axios from 'axios';


  export default {
    name: 'HomeView',

    components: {
      HeaderLine,
      HomePage,
    },
}
</script>