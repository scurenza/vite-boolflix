<script>


export default {
    name: "FilmCard",
    props: {
        film: Object
    }, data() {
        return {
            flags: ["en", "it", "ja", "fr", "es"]
        }
    },
    computed: {
        getTitle () {
            return this.film.title ? this.film.title : this.film.name;
        },
        getOriginalTitle () {
            return this.film.original_title ? this.film.original_title : this.film.original_name;
        }
    }
}
</script>

<template>
    <div class="card">
        <img class="poster" :src='"https://image.tmdb.org/t/p/w342" + film.poster_path' :alt=film.original_title>
        <hr>
        <h3 class="title">Titolo: {{ getTitle }}</h3>
        <h4 class="original.title">Titolo originale: {{ getOriginalTitle }} </h4>
        <div class="flag">
            <p>Lang:</p>
                <img v-if="this.flags.includes(film.original_language)" class="flag" :src=' "../../public/" + film.original_language + ".png"' :alt='"flag" + " " + film.original_language'>
                <p v-else>{{ film.original_language }}</p>
        </div>
        <p class="score">Voto: {{ Math.round(film.vote_average / 2) }}</p>
        <span v-for="number in Math.round(film.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
        <span v-for="num in (5 - Math.round(film.vote_average / 2))"><i class="fa-regular fa-star"></i></span>
    </div>
</template>

<style lang="scss" scoped>
.card{
    border: 2px solid black;
    border-radius: 20px;
    width: 350px;
    min-height: 850px;

    * {
        margin: 1rem .2rem;
    }
    
    i {
        color: gold;
    }
    .poster {
        padding: 1rem;
        height: 500px;
    }
    .flag {
        width: 50px;
        display: flex;
        align-items: center;
    }
}
</style>