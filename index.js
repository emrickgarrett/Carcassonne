var express = require('express');
var browserify = require('browserify');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var jsx = require('node-jsx');
var app = express();
var partialify = require('partialify');

jsx.install();


app.use('/', function(req, res){
	res.setHeader('Content-Type', 'text/html');
	
	res.end(ReactDomServer.renderToStaticMarkup(
		React.DOM.body(
			null,
			React.DOM.div({
				id: 'app'
			}),

			React.DOM.script({
				src: '/bundle.js'
			})

		)

	));
});

app.use('/bundle.js', function(req, res){
	res.setHeader('content-type', 'application/javascript');
	browserify('./app.js', {
		debug: true
	})
	.transform('partialify')
	.transform('reactify')
	.bundle()
	.pipe(res);

});

var server = app.listen(8080, function(){
	var addr = server.address();
	console.log("Listening @ http://%s:%d", addr.address, addr.port);
});

