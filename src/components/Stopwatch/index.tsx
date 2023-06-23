import Button from '../Button';
import Countdown from './Countdown';
import style from './Stopwatch.module.scss';
import { TimeToSeconds } from '../../common/utils/time';
import { ITasks } from '../../common/types/ITasks';
import { useState } from 'react';

interface PropsStopwatch {
  select: ITasks | undefined;
}

function Stopwatch({ select }: PropsStopwatch) {
  const [time, setTime] = useState<number>();

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <p>Tempo: {time}</p>
      <div className={style.watchWrapper}>
        <Countdown />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default Stopwatch;
