import TodoList from './TodoList';
import { useTodoContext } from './context/TodoContext';

function App() {


  const { todos } = useTodoContext();


  return (
    <div className="App">
    <h1>Todo App</h1>
    <TodoList />
    {todos.length > 0 && <p>Total de tarefas: {todos.length}</p>}
  </div>
  );
}

export default App;
