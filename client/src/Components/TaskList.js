import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  const handleEditClick = (id) => {
    onEdit(id);
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
  };

  const handleToggleCheck = (id) => {
    onToggle(id);
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCheck(task.id)}
              />
              <strong className="task-title">{task.title}</strong>
              <p className="task-meta">Due Date: {task.dueDate}</p>
            </div>
            <div className="task-actions">
              <button className="task-button" onClick={() => handleEditClick(task.id)}>Edit</button>
              <button className="task-button delete-button" onClick={() => handleDeleteClick(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


