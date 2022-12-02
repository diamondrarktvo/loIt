import { ADD_FAVORIS, GET_ALL_ARTICLES, GET_STARTED } from './action_names';

export const getStarted = () => ({
   type: GET_STARTED,
});

export const getAllArticles = () => ({
   type: GET_ALL_ARTICLES,
});

export const addFavoris = (article) => ({
   type: ADD_FAVORIS,
   payload: article,
});
