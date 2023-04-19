import React, { useState } from "react";

export function Lista() {
  const [alls, setalls] = useState([]);

  function addall(all) {
    setalls([...alls, { text: all, completed: false }]);
  }

  function completeall(index) {
    const newalls = [...alls];
    newalls[index].completed = !newalls[index].completed;
    setalls(newalls);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addall(e.target.all.value);
          e.target.all.value = "";
        }}
      >
        <input type="text" name="all" placeholder="Add work" required/>
        <button type="submit">Agregue la siguiente tarea: </button>
      </form>
      <ul>
        {alls.map((all, index) => (
          <li
            key={index}
            style={{
              textDecoration: all.completed ? "line-through" : "",
            }}
          >
            <input
              type="checkbox"
              checked={all.completed}
              onChange={() => completeall(index)}
            />
            {all.text}
          </li>
        ))}
      </ul>
    </div>
  );
}