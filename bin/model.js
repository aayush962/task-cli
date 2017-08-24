const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/taskcli');

const TaskSchema = mongoose.Schema({
  text: String,
  created_at: Date
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = {Task, db};
