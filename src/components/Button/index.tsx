import style from './Botton.module.scss';

function Button({
  children,
  type = 'button',
  onClick,
}: {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}) {
  return (
    <button className={style.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
