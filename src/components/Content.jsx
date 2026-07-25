import React from "react";

export const Content = () => {
  var year = 2026;
  var name = "india";
  var isActive = true;
  var user = {
    id: 1,
    name: "raj",
  };

  return (
    <div>
      <h1>CONTENT</h1>
      <h1>Hello</h1>
      <h1>hi</h1>
      {year}
      <h1>Year = {year}</h1>
      <h1>Name : {name}</h1>
      <h2>Active : {isActive == true ? "Active" : "Not Active"}</h2>
      {/* <h2>{user}</h2> */}
      <h1>Name = {user.name}</h1>
      <h2>Id = {user.id}</h2>
    </div>
  );
};
