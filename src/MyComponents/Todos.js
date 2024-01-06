import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  let todosstyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container " style={todosstyle}>
      <h3 className=" my-3">ToDos List</h3>
      {props.todos.length == 0
        ? "Congrats! You completed all you task"
        : props.todos.map((tod) => {
            return <Todo tod={tod} key={tod.sno} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
