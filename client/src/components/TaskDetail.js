import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTask, deleteTask } from '../api';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    const data = await getTask(id);
    setTask(data);
  };

  const handleDelete = async () => {
    await deleteTask(id);
    window.location.href = '/';
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/tasks/${task._id}/edit`} className="btn btn-warning mr-2">Edit</Link>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
};

export default TaskDetail;
