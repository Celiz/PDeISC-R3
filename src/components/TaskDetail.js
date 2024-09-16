import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) {
    return <div>Tarea no encontrada</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <p className="mb-2">
        <span className="font-semibold">Estado:</span>{' '}
        <span className={`inline-block px-2 py-1 rounded ${task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </span>
      </p>
      <p className="mb-4">
        <span className="font-semibold">Fecha de creación:</span>{' '}
        {new Date(task.id).toLocaleDateString()}
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Volver a la lista
      </button>
    </div>
  );
};

export default TaskDetail;