const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Tasks');
const TaskModel = require('./Models/Tasks');

const  app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/add', (req, res) => {
    const task = req.body.task;
    TaskModel.create({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        completed: task.completed
    }).then(result => res.json(result))
    .catch(error => res.json(error));
}); 

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
