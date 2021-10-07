import axios from "axios";
import { Dispatch } from "redux";
import { getUsersAction } from "../actions";
import { ActionType } from "../types";

export interface Users {
  items: Array<object> | [];
}

// https://api.github.com/search/users?q={query}{&page,per_page,sort,order}
export const getUsers =
  (username: string) => async (dispatch: Dispatch<getUsersAction>) => {
    try {
      const resp = await axios.get(
        `https://api.github.com/search/users?q=${username}&${1},${30},repositories,desc`
      );
      console.log(resp.data);
      //alert("data gotten sucessfully");
      setUsers(resp.data, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

const setUsers = (data: Users, dispatch: Dispatch<getUsersAction>) => {
  dispatch({
    type: ActionType.SET_USERS,
    payload: data?.items,
  });
};
