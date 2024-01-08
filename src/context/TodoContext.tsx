// src/context/TodoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: TodoProps[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text, completed: false },
      ]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
