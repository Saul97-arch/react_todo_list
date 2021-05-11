import React from "react";
//rafce
const Todo = ({ text, todos, todo, setTodos }) => {
  // Events
  const deleteHandler = () => {
    // Que no JS é igual a vazio false == "", pode se inferir então que o react compara usando ==
    setTodos(todos.filter((el) => el.id !== todo.id));

    // Aqui é o todo que eu clico
    // console.log(todo);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // Duvida quanto ao spread nesse caso, posso passar um obj, e depois sobreescrever uma prop do mesmo?
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      {/* Foda se o Felipe isso é feio pr caralho */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
