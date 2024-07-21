import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json);
      })
      .catch(error => console.error("Error fetching todos:", error));
  }, []);

  const onMarkAsCompleted = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/completed", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, completed: true })
      });

      if (response.ok) {
        setTodos(prevTodos =>
          prevTodos.map(todo =>
            todo._id === id ? { ...todo, completed: true } : todo
          )
        );
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      <CreateToDo />
      <ToDo
        todos={todos}
        onMarkAsCompleted={onMarkAsCompleted}
      />
    </>
  );
}

export default App;
