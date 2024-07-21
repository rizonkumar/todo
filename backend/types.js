const zod = require("zod");

const createToDo = zod.object({
  title: zod.string().min(1, "Title is required"),
  description: zod.string().min(1, "Description is required"),
});

const updateToDo = zod.object({
  id: zod.string().nonempty("ID is required"),
  title: zod.string().optional(),
  description: zod.string().optional(),
  completed: zod.boolean().optional(),
});

module.exports = {
  createToDo,
  updateToDo,
};
