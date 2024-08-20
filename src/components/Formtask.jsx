import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import '../styles/Formtask.css'

function FormTasks(props) {

  const [input, setInput] = useState('');


  const handleChange = e => {
    setInput(e.target.value)
  };

  const handleShipping = e => {

    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(newTask);
  };

  return (
    <form
      className="form-task"
      onSubmit={handleShipping}>
      <input
        className="input-task"
        type="text"
        onChange={handleChange}
        placeholder="Write a Task"
        name="text"
      />
      <button className="button-task">
        Add a task
      </button>
    </form>
  );
};
export default FormTasks;