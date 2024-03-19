import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList';
import TaskDetail from './Components/TaskDetail';
import TaskForm from './Components/TaskForm';
import './styles.css';
import axios from 'axios';
i


function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // // Sample tasks data
  // const sampleTasks = [
  //   { id: 1, title: 'Complete React project', description: 'Work on the project for at least 2 hours daily.', dueDate: '2024-03-20', completed: false },
  //   { id: 2, title: 'Prepare for meeting', description: 'Gather all required documents and notes.', dueDate: '2024-03-18', completed: false },
  //   { id: 3, title: 'Buy groceries', description: 'Milk, eggs, bread, and fruits.', dueDate: '2024-03-15', completed: true },
  // ];

  const getAllTasks = () => {
    axios.get('http://localhost:3001/getAllTasks')
      .then(result => {
        setTasks(result.data)
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowForm(false);
    axios.post('http://localhost:3001/add/', { task: newTask })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const handleUpdateTask = (updatedTask) => {
    
    axios.put(`http://localhost:3001/update/${updatedTask._id}`, { task: updatedTask })
      .then(result => console.log(result))
      .catch(error => console.log(error)); 
      const updatedTasks = tasks.map(task =>
      task._id === updatedTask._id ? updatedTask : taskz
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
    setShowForm(false);
  };

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    setTasks(tasks.filter(task => task._id !== id));
  };

  const handleEditTask = (id) => {
    const task = tasks.find(task => task._id === id);
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleCreateTask = () => {
    setSelectedTask(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedTask(null);
    setShowForm(false);
  };

  const handleToggleCheck = (id, isChecked) => {
    axios.put(`http://localhost:3001/toggleCompleted/${id}/${isChecked}`)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    setTasks(tasks.map(task => (task._id === id ? { ...task, completed: isChecked } : task)));
  }
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="header title">Todo List</h1>
      {showForm ? (
        <div className="form-container">
          <TaskForm
            onSubmit={selectedTask ? handleUpdateTask : handleAddTask}
            onCancel={handleCancel}
            initialTask={selectedTask || { title: '', description: '', dueDate: '', completed: false }}
          />
        </div>
      ) : (
        <div className='task-list'>
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onToggle={handleToggleCheck}
            className="task-list"
          />
          <button onClick={handleCreateTask} className="button">Add Task</button>
        </div>
      )}
      {selectedTask && (
        <div className="task-details">
          <h2 className="header">Task Detail</h2>
          <TaskDetail
            task={selectedTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onToggle={handleToggleCheck}
            className="task-item"
          />
        </div>
      )}
    </div>
  );
}

export default App;

