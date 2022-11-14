import { reactive } from "vue";

export const store = reactive({
    FilmList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=428a534dc99184a26882bfe1e1bcad65&query=",
    searchKey: "",
    searchCategory: "",
    loading: false
})