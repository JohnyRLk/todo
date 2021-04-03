const Todo = require('../../db/models/todo')

class todoActions{
   async createToDo(req,res){
        const title = req.body.title;
        const description = req.body.description;
        let todo;
        try{
            todo = new Todo({title,description});
            await todo.save();
        }catch(err){
            return res.status(422);
        }
        res.status(201).json({todo});
    }
    async getToDo(req,res){
        const id = req.params.id;
        let todo;
        try{
            todo = await Todo.findOne({_id:id});
        }catch(err){
            return res.status(500).json({ message:err.message});
        }
        res.status(200).json({todo})
    }
    async getAllToDo(req,res){
        let todo;
        try{
            todo = await Todo.find({});
        }catch(err){
            return res.status(500).json({message:err.message});
        }
        res.status(200).json(todo);
    }
    
    async deleteToDo(req, res) {
        const id = req.params.id;
        try{
           await Todo.deleteOne({_id:id});
        }catch (err){
            return res.status(500).json({message:err.message});
        }
        res.sendStatus(204);
      }
      async updateToDo(req,res){
          const id = req.params.id;
          const title = req.body.title;
          const description = req.body.description;
          let todo;
       

          try{
            todo = await Todo.findOne({_id:id});
            todo.description=description;
            todo.title=title;
            await todo.save();
          }catch(err){
              return res.status(500).json({message:err.message});
          }
          res.sendStatus(201);
      }        
    

}
module.exports = new todoActions();