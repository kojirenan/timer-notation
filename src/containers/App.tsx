import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import style from './App.module.scss';
import { ITasks } from '../common/types/ITasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [select, setSelect] = useState<ITasks>();

  function selectTask(taskSelected: ITasks) {
    setSelect(taskSelected);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        select: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch select={select} />
    </div>
  );
}

export default App;
