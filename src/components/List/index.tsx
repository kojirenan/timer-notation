import { ITasks } from '../types/ITasks';
import style from './List.module.scss';
import Task from './Task';

function List({ tasks }: { tasks: ITasks[] }) {
  return (
    <aside className={style.tasksList}>
      <h2>Atividades do dia</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
