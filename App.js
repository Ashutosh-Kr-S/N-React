import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a React project 🚀 !"),
    React.createElement("h2", {}, "I am h2 tag !"),
    React.createElement("h3", {}, "I am h3 tag !"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
