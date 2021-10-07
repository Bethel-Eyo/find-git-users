import React, { FC } from "react";
import "../styles/listView.css";

export interface ListViewProps {
  name: string;
  type: string;
  picture: string;
}

const ListView: FC<ListViewProps> = ({ name, type, picture }) => {
  return (
    <div className="container">
      <div data-testid="list-item">
        <img src={picture} alt="user img" className="picture" />
      </div>
      <div className="col">
        <div className="name">{name}</div>
        <div className="type">Type: {type}</div>
      </div>
    </div>
  );
};

export default ListView;
