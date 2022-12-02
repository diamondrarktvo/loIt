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
            draft.articles = action.payload;
         });
      case addFavoris().type:
         return produce(state, (draft) => {
            if (
               state.favoris.filter((favori) => favori.id === action.payload.id)
                  .length > 0
            ) {
               draft.favoris = draft.favoris.filter(
                  (favori) => favori.id !== action.payload.id
               );
            } else {
               draft.favoris.push(action.payload);
            }
         });
      default:
         return state;
   }
};
