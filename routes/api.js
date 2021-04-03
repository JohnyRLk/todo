const express = require('express');
const router = express.Router()

const todoActions = require('../actions/api/toDoActtions');

router.get('/todo', todoActions.getAllToDo);
router.get('/todo/:id', todoActions.getToDo);
router.post('/todo',  todoActions.createToDo);
router.put('/todo/:id', todoActions.updateToDo);
router.delete('/todo/:id', todoActions.deleteToDo);

module.exports=router;