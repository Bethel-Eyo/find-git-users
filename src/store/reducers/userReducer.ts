import { ActionType } from "../types";

export type State = {
  users: Array<object> | [];
};

export const initialState: State = {
  users: [],
};

const userReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionType.SET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
