import { combineReducers } from 'redux';

import { articleReducer } from './article_reducer';

export const reducer = combineReducers({
   article: articleReducer
});