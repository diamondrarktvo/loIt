import { produce } from 'immer';
import { addFavoris, getAllArticles } from '../actions/action_creators';

const initialState = {
   articles: [],
   favoris: [],
};

export const articleReducer = (state = initialState, action) => {
   switch (action.type) {
      case getAllArticles().type:
         return produce(state, (draft) => {
            draft.articles = draft.articles;
         });
      case addFavoris().type:
         return produce(state, (draft) => {
            draft.favoris.push(action.payload);
         });
      default:
         return state;
   }
};
