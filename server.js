var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/',function (req,res){
   res.sendFile(path.join(__dirname,'ui','index.html' 
   ));
});

var articleOne = {
    
   title: 'article one | rangaraju ',
   heading:'article one ',
   content: `
   
   <h1>hii this is article one</h1>
        <p>
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        </p>
   `        
} ;

var htmltemplate ={
  
   <html>
<head>
<title>$[title]</title>

<link rel="stylesheet" href="/style.css" />

</head>

<body>
<div id="container">    
        <h1>hii this is article one</h1>
        <p>
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        hii this is article one hii this is article one hii this is article one hii this is article one
        
        </p>
</div>
</body>
</html>
 
    
    
};

app.get('/style.css',function(req,res){
 res.sendFile(path.join(__dirname,'style.css'))
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname,'article-one.html'));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname,'article-two.html')); 
});
app.get('/article-three',function(req,res){

    res.sendFile(path.join(__dirname,'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
