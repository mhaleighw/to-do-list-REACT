export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
      </li>
    );
  }
  