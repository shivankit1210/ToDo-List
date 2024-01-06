import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or description cannot be blank");
       }
       else{

         addTodo(title, desc);
       }
  };
 
  return (
    <div className="container my-3">
      <h3>Add Your ToDo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Input Title
          </label>
          <input
            value={title}
            onChange={(e) => 
              setTitle(e.target.value)
            }
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Add Your task description
          </label>
          <input
            value={desc}
            onChange={(e) => 
              setDesc(e.target.value)
            }
            type="text"
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Task
        </button>
      </form>
    </div>
  );
};
