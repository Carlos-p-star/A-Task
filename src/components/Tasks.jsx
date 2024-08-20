import '../styles/Tasks.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tasks({ id, text, complete, completeTask, eliminateTask }) {
  return (
    <div className={complete ? 'task-container complete' : 'task-container'}>
      <div
        className="task-text"
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="task-icon"
        onClick={() => eliminateTask(id)}>
        <AiOutlineCloseCircle className="icon" />
      </div>
    </div>
  );
};
export default Tasks;