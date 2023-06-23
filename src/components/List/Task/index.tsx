import { ITasks } from '../../../common/types/ITasks';
import style from './Task.module.scss';

interface PropsTask extends ITasks {
  selectTask: (taskSelected: ITasks) => void;
}

function Task({ name, time, select, complete, id, selectTask }: PropsTask) {
  return (
    <li
      className={`${style.task} ${select ? style.seletedItem : ''} ${
        complete ? style.completedItem : ''
      }`}
      onClick={() =>
        !complete &&
        selectTask({
          name,
          time,
          select,
          complete,
          id,
        })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {complete && (
        <span className={style.completed} aria-label="task completed"></span>
      )}
    </li>
  );
}

export default Task;
