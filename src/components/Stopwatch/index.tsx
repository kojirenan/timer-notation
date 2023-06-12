import Button from '../Button';
import Countdown from './Countdown';
import style from './Stopwatch.module.scss';

function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Countdown />
      </div>
      <Button>Começar</Button>
    </div>
  );
}

export default Stopwatch;