import { FormEventHandler, useState } from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  addTodo: (title: string) => any;
};

function AddTodo({ addTodo }: Props) {
  const [title, setTitle] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> | undefined = (evt) => {
    evt.preventDefault();

    // Validate todo text
    if (!title) {
      alert("Please add a task description.");
      return;
    }

    addTodo(title);
    setTitle("");
  };

  return (
    <div className="mx-4 mt-6">
      <form
        onSubmit={onSubmit}
        className="flex items-center transition duration-500 ease-in-out py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600"
      >
        <input
          name="task-title"
          type="text"
          placeholder="Add task..."
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          className="flex-1 px-2.5 bg-gray-200 placeholder-gray-500 focus:outline-none"
          data-testid="task-input-field"
        />
        {title && (
          <button
            type="submit"
            className="transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer"
            data-testid="task-submit-btn"
          >
            <FaCheck />
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
