#!/usr/bin/env node
const cli = require('commander');
const { prompt } = require('inquirer');
const {addTask, showTasks} = require('./functions');

const questions = [
  {
    type : 'input',
    name : 'text',
    message : 'Enter task ...'
  }
];

cli
  .version('1.0.0')
  .description('cli tool for creating a task/todo list');

cli
  .command('add')
  .alias('a')
  .description('Add a task')
  .action((text) => {
    prompt(questions).then((answers) => {
      addTask({text: answers.text, created_at: new Date});
    });
  });

cli
  .command('show')
  .alias('s')
  .description('Show all tasks')
  .action(() => {
    showTasks();
  })

cli.parse(process.argv);
