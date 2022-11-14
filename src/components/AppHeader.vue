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
    <div class="header-container">
        <h2 class="title">Boolflix</h2>
        <div class="searchbar">
            <label for="form">Cerca per nome</label>
            <input type="text" id="form" @keyup.enter="$emit('doSearch')" v-model.trim="store.searchKey">
            <button @click="$emit('doSearch')">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>