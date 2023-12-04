import style from './Countdown.module.scss';

interface PropsCountdown {
  time: number | undefined;
}

function Countdown({ time = 0 }: PropsCountdown) {
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const sec = time % 60;

  const [hourTen, hourOnes] = String(hour).padStart(2, '0');
  const [minTen, minOnes] = String(min).padStart(2, '0');
  const [secTen, secOnes] = String(sec).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{hourTen}</span>
      <span className={style.clockNumber}>{hourOnes}</span>
      <span className={style.clockDiv}>:</span>
      <span className={style.clockNumber}>{minTen}</span>
      <span className={style.clockNumber}>{minOnes}</span>
      <span className={style.clockDiv}>:</span>
      <span className={style.clockNumber}>{secTen}</span>
      <span className={style.clockNumber}>{secOnes}</span>
    </>
  );
}

export default Countdown;
