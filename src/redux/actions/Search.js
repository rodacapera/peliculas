import { SEARCH_MOVIE_START } from "../../utils/constants";

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});