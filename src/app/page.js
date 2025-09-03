"use client";
import React, { useState } from "react";

function Page() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        ToDo App
      </h1>

      {/* Input Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task here"
          className="border-2 border-blue-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 ml-2"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="h-40 w-40 flex md:flex-col md:gap-2 justify-between items-center border-2 border-blue-500 p-4 shadow-md bg-red-100 hover:shadow-lg"
          >
            <span className="text-gray-800">{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-400 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
