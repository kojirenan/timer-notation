import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: uuidv4(),
    name: 'Codar',
    time: '00:50:00',
  },
  {
    id: uuidv4(),
    name: 'Estudar',
    time: '00:25:00',
  },
  {
    id: uuidv4(),
    name: 'Academia',
    time: '01:30:00',
  },
];

export default tasks;
