import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import TodosFooter from "../components/TodosFooter";
import { TodoType } from "../types";

function TodosList() {
  const [todos, setTodos] = useLocalStorage<TodoType[]>("todos", []);

  // Add a new todo item
  const addTodo = (title: string) => {
    let newTodo = {
      id: uuidv4(),
      title,
      completed: false,
      day: "",
    };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo item
  const delTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completed state of todo item
  const toggleCompleteStatusOnTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div id="app" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <div className="flex flex-col bg-gray-200 rounded shadow-lg">
        {/* add todo form */}
        <AddTodo addTodo={addTodo} />

        {/* todo items */}
        <div className="mx-4 my-6 h-96 overflow-auto">
          {todos.length > 0 ? (
            <ul className="mt-4" data-testid="todos-list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleCompleteStatusOnTodo={toggleCompleteStatusOnTodo}
                  delTodo={delTodo}
                />
              ))}
            </ul>
          ) : (
            <p
              className="my-16 text-lg text-center text-gray-500"
              data-testid="empty-todos-message"
            >
              empty
            </p>
          )}
        </div>

        {/* todo footer */}
        <TodosFooter
          totalTasks={todos.length}
          doneTasks={todos.filter((todo) => todo.completed).length}
        />
      </div>
    </div>
  );
}

export default TodosList;
