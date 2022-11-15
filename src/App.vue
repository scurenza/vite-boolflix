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
      let filmApiUrl = this.store.movieApiUrl;
      // let tvApiUrl = "https://api.themoviedb.org/3/search/tv?api_key=428a534dc99184a26882bfe1e1bcad65&query=";
      if (this.store.searchKey !== "") {
        filmApiUrl += this.store.searchKey;
        // tvApiUrl += this.store.searchKey;
      }

      axios.get(filmApiUrl)
      .then((resp) => {
        console.log(resp.data.results);
        this.store.FilmList = resp.data.results;
      })

      // axios.get(tvApiUrl)
      // .then((resp) => {
      //   console.log(resp.data.results);
      //   this.store.FilmList += resp.data.results;
      // })
      let serieApiUrl = this.store.tvApiUrl;
      if (this.store.searchKey !== "") {
        serieApiUrl += this.store.searchKey;
      }

      axios.get(serieApiUrl)
      .then((resp) => {
        console.log(resp.data.results);
        this.store.seriesList = resp.data.results;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <AppHeader @doSearch="getFilms" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.container {
  height: 100vh;
  width: 100%;
}
</style>