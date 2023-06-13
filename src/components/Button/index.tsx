import style from './Botton.module.scss';

function Button({ children }: { children: string }) {
  return <button className={style.button}>{children}</button>;
}

export default Button;
