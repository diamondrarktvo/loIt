import { combineReducers } from 'redux';

import { articleReducer } from './article_reducer';
import { userReducer } from './user_reducer';

export const reducer = combineReducers({
   article: articleReducer,
   user: userReducer,
});
