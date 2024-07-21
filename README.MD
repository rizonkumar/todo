# Todo App

A simple Todo application built with Express, MongoDB, and React.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Folder Structure](#folder-structure)
- [License](#license)

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance (local or MongoDB Atlas)

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/todo-app.git
   cd todo-app/backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:

   ```env
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.rxhihwl.mongodb.net/todos
   PORT=5000
   ```

4. Start the backend server:

   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```sh
   cd ../frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm start
   ```

## Usage

### Running the Application

1. Ensure the backend server is running on `http://localhost:5000`.
2. Ensure the frontend server is running on `http://localhost:5173`.

### Interacting with the Application

- You can create new todo items using the form on the main page.
- View the list of todos displayed on the page.
- Mark todos as completed by clicking the "Mark as Completed" button.

## Endpoints

### Backend API

#### Create a Todo

- **URL**: `/todo`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```
- **Response**:
  ```json
  {
    "msg": "Todo item created successfully",
    "todo": {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": false,
      "__v": 0
    }
  }
  ```

#### Get All Todos

- **URL**: `/todos`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": false,
      "__v": 0
    },
    ...
  ]
  ```

#### Mark a Todo as Completed

- **URL**: `/completed`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "id": "string",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "msg": "Todo marked as completed",
    "todo": {
      "_id": "string",
      "title": "string",
      "description": "string",
      "completed": true,
      "__v": 0
    }
  }
  ```

## Folder Structure

```
todo-app/
│
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   └── index.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateToDo.js
│   │   │   └── ToDo.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```