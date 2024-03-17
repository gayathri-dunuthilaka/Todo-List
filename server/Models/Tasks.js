const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    completed: Boolean
});


const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel;