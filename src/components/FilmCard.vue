<script>
export default {
    name: "FilmCard",
    props: {
        film: Object
    }
}
</script>

<template>
    <div class="card">
        <h3 class="title">Titolo: {{ film.title }}</h3>
        <h4 class="original.title">Titolo originale: {{ film.original_title }} </h4>
        <div class="flag">
            <img class="flag" :src=' "../../public/" + film.original_language + ".png"' :alt='"flag " + film.original_language'>
        </div>
        <p class="score">Voto: {{ film.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card{
    border: 2px solid black;
    width: 100%;
    min-height: 400px;
}
</style>