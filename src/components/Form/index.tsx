import Button from '../Button';
import style from './Form.module.scss';
import { ITasks } from '../types/ITasks';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type setTasksProps = {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
};

function Form({ setTasks }: setTasksProps) {
  const [task, setTask] = useState({
    name: '',
    time: '00:00:00',
  });

  function addTasks(e: React.FormEvent) {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, select: false, complete: false, id: uuidv4() },
    ]);
    setTask({ name: '', time: '00:00:00' });
  }
  return (
    <form className={style.newTask} onSubmit={addTasks}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione uma atividade</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Digite sua atividade"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step={1}
          name="time"
          id="time"
          value={task.time}
          onChange={(e) => setTask({ ...task, time: e.target.value })}
          min="00:00:00"
          max="05:00:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
