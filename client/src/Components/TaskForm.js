import React, { useState } from 'react';

const TaskForm = ({ onSubmit, onCancel, initialTask }) => {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{initialTask.id ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label htmlFor="description" className="form-label">
          Description:
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className="form-textarea"
          />
        </label>
        <label htmlFor="dueDate" className="form-label">
          Due Date:
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </label>
        <label htmlFor="completed" className="form-label">
          Status:
          <select
            id="completed"
            name="completed"
            value={task.completed}
            onChange={handleChange}
            className="form-select"
          >
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
          </select>
        </label>
        <div className="form-buttons">
          <button type="submit" className="form-button">
            {initialTask._id ? 'Update Task' : 'Add Task'}
          </button>
          {initialTask._id && (
            <button type="button" className="form-button cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
