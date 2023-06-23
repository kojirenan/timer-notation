import { ITasks } from '../../common/types/ITasks';
import style from './List.module.scss';
import Task from './Task';

interface PropsList {
  tasks: ITasks[];
  selectTask: (taskSelected: ITasks) => void;
}

function List({ tasks, selectTask }: PropsList) {
  return (
    <aside className={style.tasksList}>
      <h2>Atividades do dia</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} {...task} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
