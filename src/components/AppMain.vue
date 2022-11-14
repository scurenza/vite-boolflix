<script>
import { store } from "../store";
import FilmCard from './FilmCard.vue';

export default {
    name: "AppMain",
    components: {
        FilmCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="card" v-for="film in store.FilmList" :key="film.id">
            <FilmCard :film="film" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
}
</style>