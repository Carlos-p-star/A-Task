import { useState } from "react";
import FormTasks from "./Formtask";
import Tasks from "./Tasks";
import "../styles/Tasklist.css"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const reloadTask = [task, ...tasks];
      setTasks(reloadTask);
    }
  }

  const eliminateTask = id => {
    const reloadTask = tasks.filter(task => task.id !== id);
    setTasks(reloadTask);
  }

  const completeTask = id => {
    const reloadTask = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(reloadTask);
  }

  return (
    <>
      <FormTasks onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Tasks
              key={task.id}
              id={task.id}
              text={task.text}
              complete={task.complete}
              eliminateTask={eliminateTask}
              completeTask={completeTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;