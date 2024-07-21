const express = require("express");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

// Route to create a new todo
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

// Route to get all todos
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

// Route to mark a todo as completed
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateToDo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
      errors: parsedPayload.error.errors,
    });
    return;
  }

  try {
    const updatedTodo = await todo.findByIdAndUpdate(
      req.body.id,
      { completed: true },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({
      msg: "Todo marked as completed",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error updating todo item",
      error: error.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
