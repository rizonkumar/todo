const express = require("express");
const { createToDo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.listen(3000);
