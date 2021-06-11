import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className="status">{isOnline ? "green" : "red"}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </>
);

export default FriendListItem;
