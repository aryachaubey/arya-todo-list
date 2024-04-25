import React, { useState } from "react";

function AddItem({ add }) {
  const [todo, setTodo] = useState("");

  let onsubmitHandler = (e) => {
    e.preventDefault();
  };

  let onChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="h-full w-full">
      <form className="flex row-auto" onSubmit={onsubmitHandler}>
        <input
          type="text"
          placeholder="Enter the todo task"
          name="todo"
          className="sm:p-2 pl-4  sm:pr-16  rounded"
          value={todo}
          onChange={onChangeHandler}
        />

        <div className="ml-4 bg-blue-500 p-2 text-white rounded">
          <button
            onClick={() => {
              add(todo);
              setTodo("");
            }}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
