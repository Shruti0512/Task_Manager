import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTask, createTask, updateTask } from '../api';

const TaskForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  useEffect(() => {
    if (id) fetchTask();
  }, [id]);

  const fetchTask = async () => {
    const data = await getTask(id);
    setTask(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    history.push('/');
  };

  return (
    <div className="container mt-5">
      <h1>{id ? 'Edit Task' : 'Add New Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
