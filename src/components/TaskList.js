import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div className='p-4'>
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <p>No hay tareas. ¡Crea una nueva!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white shadow-md rounded-lg p-4">
              <Link to={`/task/${task.id}`} className="block hover:bg-gray-50">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
                <span className={`inline-block px-2 py-1 rounded ${task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {task.completed ? 'Completada' : 'Pendiente'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;