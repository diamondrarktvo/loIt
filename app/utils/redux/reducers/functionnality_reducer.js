import { produce } from 'immer';
import { getStarted } from '../actions/action_creators';

const initialState = {
   started: false,
};

export const functionnalityReducer = (state = initialState, action) => {
   switch (action.type) {
      case getStarted().type:
         return produce(state, (draft) => {
            draft.started = !draft.started;
         });
      default:
         return state;
   }
};
