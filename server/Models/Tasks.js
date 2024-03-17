const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    completed: {
        type: Boolean,
        default: false
    }
});


const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel;