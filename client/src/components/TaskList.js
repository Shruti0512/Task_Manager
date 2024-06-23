import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container mt-5">
      <h1>Task List</h1>
      <Link to="/tasks/new" className="btn btn-primary mb-3">Add New Task</Link>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <Link to={`/tasks/${task._id}`} className="btn btn-info mr-2">View</Link>
            <Link to={`/tasks/${task._id}/edit`} className="btn btn-warning mr-2">Edit</Link>
            <button onClick={() => handleDelete(task._id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
