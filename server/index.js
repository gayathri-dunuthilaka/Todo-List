const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Tasks');
const TaskModel = require('./Models/Tasks');

const  app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/getAllTasks', (req, res) => {
    TaskModel.find()
    .then(result => res.json(result))
    .catch(error => res.json(error));
});

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

app.put('/toggleCompleted/:id/:completed', (req, res) => {
    const id = req.params.id;
    const completed = req.params.completed === 'true';
    TaskModel.findByIdAndUpdate({_id: id}, {completed: completed})
        .then(result => {
            location.reload();
            res.json(result)
        })
        .catch(error => res.json(error));
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, dueDate, completed } = req.body.task;
    const isCompleted = completed === 'true';

    TaskModel.findByIdAndUpdate({_id: id}, {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: isCompleted 
    })
    .then(result => {
        location.reload();
        res.json(result);
    })
    .catch(error => res.json(error));
});

    
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({_id: id})
        .then(result => {
            location.reload();
            res.json(result)
        })
        .catch(error => res.json(error));
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
