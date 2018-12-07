var express = require('express');
var app = express();
//iamge directory
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.set('views','./views');//views 템플리트가 있는 디렉토리 설정
app.set('view engine', 'jade');//view engine, 사용할 템플리트 엔진 설정
app.locals.pretty = true;

app.get('/', function(req,res){
	res.render('main');
})

//About
app.get('/about', function(req,res){
  res.render('about');
})

app.get('/experience', function(req, res){
  res.render('experience')
})

app.get('/projects', function(req, res){
  res.render('projects')
})

app.get('/contact', function(req, res){
  res.render('contact')
})

app.listen(3000,function(){
  console.log('Connected 3000 port!');
})
