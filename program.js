var book = require('./lib/grade').book;

var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send('Hello World!');
});

app.get('/grade',function(req,res){
	var grades = req.query.grade.split(',');
	for (var i = 0; i < grades.length; i++) {
		book.addNewGrade(parseInt(grades[i]));
	};
	var average = book.gradeAverage();
	var letter = book.calculateGrade();
	res.send('Average Grade is'+average+' and letter is '+letter);
});

app.listen('8080');

console.log('listening to port..');