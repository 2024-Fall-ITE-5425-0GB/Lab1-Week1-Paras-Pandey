import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const tasklist = [
  {
    title: 'Humber',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    id: 1,
  },
  {
    title: 'MERN',
    tasks: ['Lab', 'Project', 'Quiz'],
    id: 2,
  },
  {
    title: 'Java',
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
    id: 3,
  },
];

function App() {
  return (
    <div>
      <Header title='Task List' total={tasklist.length} />
      {tasklist.map((task) => (
        <TaskList title={task.title} tasks={task.tasks} key={task.id} />
      ))}
    </div>
  );
}

export default App;
