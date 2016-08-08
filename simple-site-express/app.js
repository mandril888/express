var express = require('express')
  , stylus = require('stylus')	//like Sass
  , nib = require('nib')	//utilities for stylus

var app = express();

function compile( str, path ) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')	//to use jade
app.set('view engine', 'jade')
app.use(express.logger('dev'))	//to use middleware
app.use(stylus.middleware(	//comile .styl to .css
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))	//to serve static files

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.listen(3000)