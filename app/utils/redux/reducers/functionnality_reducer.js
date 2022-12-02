import { produce } from 'immer';
import { changeStatusUser } from '../actions/action_creators';

const initialState = {
   started: false,
};

export const functionnalityReducer = (state = initialState, action) => {
   switch (action.type) {
      case changeStatusUser().type:
         return produce(state, (draft) => {
            draft.started = !draft.started;
         });
      default:
         return state;
   }
};
