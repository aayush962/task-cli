const mongoose = require('mongoose');
const chalk = require('chalk');
const assert = require('assert');
const {Task, db} = require('./model')

const addTask = (task) => {
  const new_task = new Task(task);
  new_task.save()
    .then((task) => {
      console.log(chalk.green('Task added!'));
      db.disconnect();
    })
    .catch((err) => {
      console.log(chalk.red('Some error occured. Make sure mongo sercive is running. Run mongod to start mongo service'))
      db.disconnect();
    });
};

module.exports = {addTask};
