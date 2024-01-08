// src/components/TodoList.tsx
import React, { useState } from 'react';
import { useTodoContext } from './context/TodoContext';

const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodoHandler = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p>Não há tarefas a serem exibidas.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Adicionar Tarefa</button>
    </div>
  );
};

export default TodoList;
