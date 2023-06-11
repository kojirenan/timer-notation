import Button from '../Button';
import style from './Form.module.scss';

function Form() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione uma atividade</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Digite sua atividade"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step={1}
          name="time"
          id="time"
          min="00:00:00"
          max="05:00:00"
          required
        />
      </div>
      <Button />
    </form>
  );
}

export default Form;
