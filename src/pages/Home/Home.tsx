import React, { FC, useEffect } from "react";
import ListView from "../../components/ListView";
import { HomeLogic } from "./HomeLogic";
import "../../styles/home.css";

interface Props {
  navigation?: any;
}

export interface GitUser {
  login: string;
  type: string;
  avatar_url: string;
}

const Home: FC<Props> = ({ navigation }) => {
  const { searchUsername, users, setGitUser, gitUser } = HomeLogic();
  useEffect(() => {
    searchUsername(gitUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gitUser]);

  return (
    <div data-testid="root" className="casing">
      <div className="title">Github Users</div>
      <form
        className="field"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
        autoComplete="off"
      >
        <input
          data-testid="text-input"
          onChange={(e) => setGitUser(e.target.value)}
          id="username"
          type="text"
          placeholder="Search github users"
        />
      </form>
      {(users?.length === 0 || users === null) && (
        <div className="noData" data-testid="no-data">
          Currently displaying no data
        </div>
      )}
      {users?.map((user: GitUser, index: React.Key | null | undefined) => (
        <ListView
          key={index}
          name={user.login}
          type={user.type}
          picture={user.avatar_url}
        />
      ))}
    </div>
  );
};
export default Home;
