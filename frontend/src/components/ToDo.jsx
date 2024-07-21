const ToDo = ({ todos, onMarkAsCompleted }) => {
  console.log(todos);
  return (
    <div>
      {todos?.map(function (todo) {
        return (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => onMarkAsCompleted(todo._id)}>
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
