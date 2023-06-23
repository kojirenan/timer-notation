import Button from '../Button';
import Countdown from './Countdown';
import style from './Stopwatch.module.scss';
import { TimeToSeconds } from '../../common/utils/time';
import { ITasks } from '../../common/types/ITasks';
import { useEffect, useState } from 'react';

interface PropsStopwatch {
  select: ITasks | undefined;
  finishTask: () => void;
}

function Stopwatch({ select, finishTask }: PropsStopwatch) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (select?.time) {
      setTime(TimeToSeconds(select.time));
    }
  }, [select]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Countdown time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar</Button>
    </div>
  );
}

export default Stopwatch;
