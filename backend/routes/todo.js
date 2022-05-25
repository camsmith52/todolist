const router = require('express').Router();
let Todo = require('../model/todoitems.model');

router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const todoitem = req.body.todoitem;

  const newtodo = new Todo({todoitem});

  newtodo.save()
    .then(() => res.json('todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Todo deleted'))
    .catch(err=>res.status(400).json('Error:' + err))
})

router.route('/:id').get((req,res)=>{
    Todo.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req,res)=>{
    Todo.findById(req.params.id)
    .then(todo=>{
    todo.todoitem = req.body.todoitem;
    
    
    todo.save()                                         //only update/editing this on so no need to create a new object
    .then(()=>res.json('Todo updated!'))
    .catch(err=>res.status(400).json('Error:' + err))

    })
    .catch(err=>res.status(400).json('Error:' + err))
    
})

module.exports = router;