var express = require('express');
var app = express();
var jade = require('jade');
var bodyparser = require('body-parser');

var _tasks = [];
var _dones = [];

var counter = 0;

app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use(bodyparser.urlencoded({extended: false}));


app.get('/index', function (req, res) {
	console.log('tasks  '+_tasks)
	res.render('index', {
		tasks : _tasks,
	})
})
app.get('/dones', function (req, res) {
	console.log('dones  '+_dones)
	res.render('dones', {
		dones : _dones,
	})
})
app.post('/index', function(req,res) {
	if ( !req.body || !req.body.name ) res.send ("error!");
	var nameTask = req.body.name;
	var newTask = {
		id : ++counter,
		name: nameTask,
		completed: false
	}
	_tasks.push(newTask);
	res.redirect('/index')
})
app.delete('/index', function(req,res) {
	var taskToDelete = req.query.id;

	_tasks = _tasks.filter( function(item, i) {
		return item.id !== parseInt(taskToDelete, 10);
	})

	res.end();
})
app.put('/index/:taskId', function (req, res) {
    var taskDoneIt = parseInt(req.params.taskId, 10);

    _tasks = _tasks.filter( function(item, i) {
		if (item.id === taskDoneIt){
			item.completed = true;
			console.log(item);
			_dones.push(item);
			console.log(_dones);
			_tasks.shift(item);
			console.log(_tasks);

			return item.id;
		}
	})

    res.end();
});


app.listen(3000, function() {
	console.log("Listening on port 3000")
});

