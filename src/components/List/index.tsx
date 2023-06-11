import tasks from '../utils/tasks';

function List() {
  return (
    <aside>
      <h2>Atividades do dia</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
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
