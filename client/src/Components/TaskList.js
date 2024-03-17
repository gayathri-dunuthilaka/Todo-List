import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  const handleEditClick = (id) => {
    onEdit(id);
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
  };

  const handleToggleCheck = (id, isChecked) => {
    onToggle(id, isChecked);
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.completed }
                onChange={(event) => {
                  const isChecked = event.target.checked;
                  handleToggleCheck(task._id, isChecked);
                }}
              />


              <strong className="task-title">{task.title}</strong>
              <p className="task-meta">Due Date: {task.dueDate}</p>
            </div>
            <div className="task-actions">
              <button className="task-button" onClick={() => handleEditClick(task._id)}>Edit</button>
              <button className="task-button delete-button" onClick={() => handleDeleteClick(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


