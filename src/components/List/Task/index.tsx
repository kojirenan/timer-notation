import { ITasks } from '../../types/ITasks';
import style from '../List.module.scss';

function Task({ name, time, select, complete, id }: ITasks) {
  console.log({ name, time, select, complete, id });

  return (
    <li className={style.task}>
      <h3>
        {name} <span>{time}</span>
      </h3>
    </li>
  );
}

export default Task;
