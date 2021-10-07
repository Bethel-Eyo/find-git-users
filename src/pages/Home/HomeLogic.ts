import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/action-creators";
import { RootState } from "../../store/reducers";
import { useState } from "react";
import { ActionType } from "../../store/types";

export const HomeLogic = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.user);
  const [gitUser, setGitUser] = useState("");

  const searchUsername = (username: string) => {
    if (username === "") {
      dispatch({
        type: ActionType.SET_USERS,
        payload: [],
      });
    } else {
      dispatch(getUsers(username));
    }
  };

  return { searchUsername, users, gitUser, setGitUser };
};
