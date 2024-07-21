import React, { useState } from "react";

const CreateToDo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ margin: 5 }}>
      <input
        type="text"
        placeholder="title"
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />

      <button
        onClick={() => {
          fetch("http://localhost:5000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
                "Content-Type": "application/json"
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateToDo;
