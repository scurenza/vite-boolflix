<script>
export default {
    name: "FilmCard",
    props: {
        film: Object
    }, data() {
        return {
            flags: ["en"]
        }
    }
}
</script>

<template>
    <div class="card">
        <h3 class="title">Titolo: {{ film.title }}</h3>
        <h4 class="original.title">Titolo originale: {{ film.original_title }} </h4>
        <div class="flag">
            <p>Lang:</p>
                <img :v-if="this.flags.includes(film.original_language)" class="flag" :src=' "../../public/" + film.original_language + ".png"' :alt='"flag" + " " + film.original_language'>
                <p :v-else="!this.flags.includes(film.original_language)">{{ film.original_language }}</p>
        </div>
        <p class="score">Voto: {{ film.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card{
    border: 2px solid black;
    width: 350px;
    min-height: 400px;

    * {
        margin: 1rem .2rem;
    }
    .flag {
        width: 50px;
        display: flex;
        align-items: center;
    }
}
</style>