<script>
import axios from 'axios';



export default {
    name: "FilmCard",
    props: {
        film: Object
    }, data() {
        return {
            flags: ["en", "it", "ja", "fr", "es"],
            upHere: false,
            cast: []
        }
    },
    created() {
            let id = this.film.id;
            let castApiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=428a534dc99184a26882bfe1e1bcad65`;
            axios.get(castApiUrl)
            .then((resp) => {
                
                this.cast = resp.data.cast.slice(0, 5);
                console.log(resp.data.cast);
            })  
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
    <!-- <div class="card" @mouseover="upHere = true" @mouseleave="upHere = false">
        <div class="front" v-show="!upHere">
            <img class="poster" :src='"https://image.tmdb.org/t/p/w342" + film.poster_path' :alt=film.original_title>
        </div>
        <div class="back" v-show="upHere">
            <h3 class="title">Titolo: {{ getTitle }}</h3>
            <h4 class="original.title">Titolo originale: {{ getOriginalTitle }} </h4>
            <div class="flag">
                <p>Lang:</p>
                    <img v-if="this.flags.includes(film.original_language)" class="flag" :src=' "/" + film.original_language + ".png"' :alt='"flag" + " " + film.original_language'>
                    <p v-else>{{ film.original_language }}</p>
            </div>
            <p class="score">Voto: {{ Math.round(film.vote_average / 2) }}</p>
            <span v-for="number in Math.round(film.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
            <span v-for="num in (5 - Math.round(film.vote_average / 2))"><i class="fa-regular fa-star"></i></span>
            <p class="genre">Cast:</p>
            <span v-for="(person, index) in cast" :key="index">{{ person.original_name }},</span>      
        </div>
    </div> -->

    <div class="card">
        <div class="card-inner">
            <div class="front">
                <img class="poster" :src='"https://image.tmdb.org/t/p/w342" + film.poster_path' :alt=film.original_title>
            </div>
            <div class="back">
                <h3 class="title">Titolo: {{ getTitle }}</h3>
                <h4 class="original.title">Titolo originale: {{ getOriginalTitle }} </h4>
                <div class="flag">
                    <p>Lang:</p>
                        <img v-if="this.flags.includes(film.original_language)" class="flag" :src=' "/" + film.original_language + ".png"' :alt='"flag" + " " + film.original_language'>
                        <p v-else>{{ film.original_language }}</p>
                </div>
                <p class="score">Voto: {{ Math.round(film.vote_average / 2) }}</p>
                <span v-for="number in Math.round(film.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                <span v-for="num in (5 - Math.round(film.vote_average / 2))"><i class="fa-regular fa-star"></i></span>
                <p class="genre">Cast:</p>
                <span v-for="(person, index) in cast" :key="index">{{ person.original_name }},</span>      
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    border: 2px solid black;
    border-radius: 20px;
    width: 350px;
    min-height: 600px;
    box-shadow: 9px 9px 8px grey;

    perspective: 1000px;

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

    &-inner{
        position: relative;
        transform-style: preserve-3d;
        transition: transform .8s;
    }

    &:hover &-inner {
        transform: rotateY(180deg);
    }

    .front,
    .back{
        backface-visibility: hidden;

        width: 100%;
        height: 100%;
    }

    .back {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateY(180deg);
    }

}
</style>