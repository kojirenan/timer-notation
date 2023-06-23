import { ITasks } from '../../../common/types/ITasks';
import style from './Task.module.scss';

interface PropsTask extends ITasks {
  selectTask: (taskSelected: ITasks) => void;
}

function Task({ name, time, select, complete, id, selectTask }: PropsTask) {
  return (
    <li
      className={`${style.task} ${select ? style.seletedItem : ''}`}
      onClick={() =>
        selectTask({
          name,
          time,
          select,
          complete,
          id,
        })
      }
    >
      <h3>
        {name} <span>{time}</span>
      </h3>
    </li>
  );
}

export default Task;
