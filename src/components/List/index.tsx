import { useState } from 'react';
import tasksDefault from '../utils/tasks';
import style from './List.module.scss';
import Task from './Task';

function List() {
  const [tasks, setTasks] = useState(tasksDefault);

  return (
    <aside className={style.tasksList}>
      <h2
        onClick={() => {
          console.log('teste');
          setTasks([
            ...tasks,
            { id: '45454', name: 'Estudando', time: '01:00:00' },
          ]);
        }}
      >
        Atividades do dia
      </h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
