import style from './Botton.module.scss';

function Button({
  children,
  type = 'button',
}: {
  children: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button className={style.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
