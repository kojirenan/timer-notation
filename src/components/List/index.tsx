import tasks from '../utils/tasks';
import style from './List.module.scss';

function List() {
  return (
    <aside className={style.tasksList}>
      <h2>Atividades do dia</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={style.task}>
            <h3>
              {task.name} <span>{task.time}</span>
            </h3>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
