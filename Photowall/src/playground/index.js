import React from 'react'
import Main from './Main';
import { createRoot } from 'react-dom/client';

const tasks = [
  'Take out trash',
  'Shovel driveway',
  'Walk dog'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main tasks={tasks} />)