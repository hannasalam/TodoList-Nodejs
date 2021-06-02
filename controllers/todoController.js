
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hanna:testing123@cluster0.nwsku.mongodb.net/todo?retryWrites=true&w=majority',{ useNewUrlParser: true },{useUnifiedTopology: true });

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo',todoSchema);


//var data = [{item:'get milk'}, {item:"walk dog"},{item: 'kick some coding ass'}]

module.exports = function(app){

    app.get('/todo',function(req,res){
        Todo.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todo:data});
        }); //finds all items
        

    });

    app.post('/todo',(req,res)=>{
        var newTodo = Todo(req.body).save((err,data)=>{
            if(err) throw err;
            res.json({todo:data});
        })
        
    });

    app.delete('/todo/:item',(req,res)=>{
        Todo.find({item :req.params.item.replace(/ /g,'-')}).remove((err,data)=>
        {
            if(err) throw err;
            res.json({todo:data});
        });
        });


};