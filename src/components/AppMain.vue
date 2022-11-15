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
    <section class="Films">
        <h1>Film</h1>
        <div class="row">
            <div class="card" v-for="film in store.FilmList" :key="film.id">
                <FilmCard :film="film" />
            </div>
        </div>
    </section>

    <section class="Tv">
        <h1>Tv Series</h1>
        <div class="row">
            <div class="card" v-for="film in store.seriesList" :key="film.id">
                <FilmCard :film="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

section h1{
    width: 80%;
    margin: 3rem auto 1.5rem;

    font-size: 3rem;
    color: grey;
    text-decoration: underline;
}
.Films {
    margin-top: 7rem;
}
.row {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>