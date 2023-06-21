import { useState } from 'react';
import Form from '../Form';
import List from '../List';
import Stopwatch from '../Stopwatch';
import style from './App.module.scss';
import { ITasks } from '../types/ITasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
