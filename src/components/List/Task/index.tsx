import style from '../List.module.scss';

function Task({ name, time }: { name: string; time: string }) {
  return (
    <li className={style.task}>
      <h3>
        {name} <span>{time}</span>
      </h3>
    </li>
  );
}

export default Task;
