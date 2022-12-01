import { produce } from 'immer';
import { playPauseVideo, beforeDownload } from '../actions/action_creators';

const initialState = {
   articles: []
};

export const articleReducer = (state = initialState, action) => {
   switch (action.type) {
      case getAllArticles().type:
         return produce(state, (draft) => {
            draft.articles = draft.articles,
         })
      default:
         return state;
   }
};