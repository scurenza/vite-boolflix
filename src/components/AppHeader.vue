<script>
import { store } from "../store"

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="header-container">
            <h2 class="title">Boolflix</h2>
            <div class="searchbar">
                <label for="form">Cerca per nome</label>
                <input type="text" id="form" @keyup.enter="$emit('doSearch')" v-model.trim="store.searchKey">
                <button @click="$emit('doSearch')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 10vh;
    background-color: black;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    .header-container{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 3rem;
            color: red;
        }

        label {
            color: white;
            margin-right: 1rem;
        }
    }

}
</style>