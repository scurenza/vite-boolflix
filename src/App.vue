<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilms () {
      this.store.loading = true;
      let apiUrl = this.store.apiURL;

      if (this.store.searchKey !== "") {
        apiUrl += this.store.searchKey;
      }

      axios.get(apiUrl)
      .then((resp) => {
        console.log(resp.data.results);
        this.store.FilmList = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <AppHeader @doSearch="getFilms"/>
    <AppMain />
  </div>
</template>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  height: 100vh;
  width: 100%;
}
</style>