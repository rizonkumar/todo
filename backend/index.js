const express = require("express");
const { createToDo } = require("./types");
const { todo, todo } = require("./db");

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.status(201).json({
      msg: "Todo item created successfully",
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating todo item",
      error: error.message,
    });
  }
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      msg: "Error retrieving todo items",
      error: error.message,
    });
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
      errors: parsedPayload.error.errors,
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed"
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
