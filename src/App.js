import './App.css';
import TaskList from './components/Tasklist';

function App() {
  return (
    <div className="tasks">
      <div className="list-tasks-main">
        <h1 className="h1">My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
