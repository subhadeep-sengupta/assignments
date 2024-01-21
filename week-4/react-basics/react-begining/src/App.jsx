import { useState } from "react";
import "./App.css";

function App() {
  const todoArray = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Purchase essential items for the week.",
      done: false,
    },
    {
      id: 2,
      title: "Complete homework",
      description: "Finish assignments and submit them online.",
      done: false,
    },
    {
      id: 3,
      title: "Exercise",
      description: "Go for a 30-minute jog or workout at the gym.",
      done: false,
    },
    {
      id: 4,
      title: "Read a book",
      description: "Spend time reading a novel or informative material.",
      done: false,
    },
    {
      id: 5,
      title: "Write blog post",
      description: "Compose a blog post on a topic of interest.",
      done: false,
    },
    {
      id: 6,
      title: "Plan weekend activities",
      description: "Make a list of fun things to do over the weekend.",
      done: false,
    },
    {
      id: 7,
      title: "Learn a new recipe",
      description: "Experiment with cooking and try out a new recipe.",
      done: false,
    },
    {
      id: 8,
      title: "Organize closet",
      description:
        "Declutter and arrange clothes and accessories in the closet.",
      done: false,
    },
    {
      id: 9,
      title: "Call a friend",
      description: "Catch up with a friend over the phone and make plans.",
      done: false,
    },
    {
      id: 10,
      title: "Watch a documentary",
      description: "Explore a documentary on a topic of interest.",
      done: false,
    },
  ];

  const [todos, setTodos] = useState(todoArray);

  const handleToggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const todoElements = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <button onClick={() => handleToggleDone(todo.id)}>
          {todo.done ? "Done!" : "Mark as done"}
        </button>
      </div>
    );
  });

  return (
    <div>
      <input type="text" placeholder="title" />
      <br></br>
      <input type="text" placeholder="description" />
      <br></br>
      <button onClick={() => addTodo()}>Add todo</button>
      <br></br>
      {todoElements}
    </div>
  );
}

export default App;
