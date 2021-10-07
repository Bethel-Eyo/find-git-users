import { ActionType } from "../types";

export interface getUsersAction {
  type: ActionType.SET_USERS;
  payload: Array<object>;
}
