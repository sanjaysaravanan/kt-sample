// What is redux ?
// State management tool
// it is used to avoid prop drilling

import { useReducer, useState } from "react";

const initialState = {
  todos: ["Eat", "Sleep"],
  authStatus: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.newTodo],
      };
    case "DELETE":
      const newArray = [...state.todos];
      const index = newArray.indexOf(action.deleteTodo);
      if (index > -1) {
        newArray.splice(index, 1);
      }
      return {
        ...state,
        todos: newArray,
      };
    case "EDIT":
      const _newArray = [...state.todos];
      _newArray[action.editIndex] = action.newTodo;
      return {
        ...state,
        todos: _newArray,
      };
    default:
      return state;
  }
};

const TodoComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [text, setText] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  console.log("Reducer State", state);
  //   console.log("Text in input", text);

  return (
    <div style={{ height: "500px", width: "300px" }}>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          if (text !== "") {
            !isEditing && dispatch({ type: "ADD_TODO", newTodo: text });
            if (isEditing) {
              dispatch({ type: "EDIT", newTodo: text, editIndex: editIndex });
              setText("");
              setEditIndex(0);
              setEditing(false);
            }
          }
        }}
      >
        {isEditing ? "Edit" : "Add"}
      </button>
      {/* Iterative Rendering */}
      {state.todos.map((todo, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={i}
        >
          <h3>{todo}</h3>
          <button
            onClick={() => {
              dispatch({ type: "DELETE", deleteTodo: todo });
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setText(todo);
              setEditing(true);
              setEditIndex(i);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoComponent;
