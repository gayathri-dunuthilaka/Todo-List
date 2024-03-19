import React from 'react';

const TaskDetail = ({ task, onEdit, onDelete, onToggle }) => {
  const handleEditClick = () => {
    onEdit(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleToggleCheck = () => {
    onToggle(task.id);
  };

  return (
    <div className="container">
      <h2>Task Detail</h2>
      <div className="task-detail">
        <div className="task-detail-item">
          <span className="task-detail-label">Title:</span> {task.title}
        </div>
        <div className="task-detail-item">
          <span className="task-detail-label">Description:</span> {task.description}
        </div>
        <div className="task-detail-item">
          <span className="task-detail-label">Due Date:</span> {task.dueDate}
        </div>
        <div className="task-detail-item">
          <span className="task-detail-label">Status:</span> {task.completed ? 'Completed' : 'Pending'}
        </div>
      </div>
      <div className="task-detail-buttons">
        <button className="task-detail-button" onClick={handleEditClick}>Edit</button>
        <button className="task-detail-button delete-button" onClick={handleDeleteClick}>Delete</button>
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="mb-3"
            checked={task.completed}
            onChange={handleToggleCheck}
          />
          Mark as Completed
        </label>
      </div>
    </div>
  );
};

export default TaskDetail;


