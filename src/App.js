// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import CreateTask from './components/CreateTask';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now() }]);
  };

  return (
    <Router>
      <div className="">
        <nav className="bg-blue-500 p-4 mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:underline">Inicio</Link>
            </li>
            <li>
              <Link to="/create" className="text-white hover:underline">Crear Tarea</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} />} />
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} />} />
          <Route path="/create" element={<CreateTask addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;