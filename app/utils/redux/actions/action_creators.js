import { ADD_FAVORIS, GET_ALL_ARTICLES, STATUS_USER } from './action_names';

export const changeStatusUser = () => ({
   type: STATUS_USER,
});

export const getAllArticles = () => ({
   type: GET_ALL_ARTICLES,
});

export const addFavoris = (article) => ({
   type: ADD_FAVORIS,
   payload: article,
});
