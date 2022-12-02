import { produce } from 'immer';
import { changeStatusUser } from '../actions/action_creators';

const initialState = {
   profil: {
      isConnected: false,
   },
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case changeStatusUser().type:
         return produce(state, (draft) => {
            draft.profil.isConnected = !draft.profil.isConnected;
         });
      default:
         return state;
   }
};
