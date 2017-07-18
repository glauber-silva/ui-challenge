//imports
const compression = require('compression');
const config = require('./webpack.config');
const express = require('express');
const open = require('open');
const path = require('path');
const webpack = require('webpack');

//Variables
const app = express();
const compiler = webpack(config);
const PROD = process.env.NODE_ENV === 'production';
const port = PROD ? 8080 : 3000;
const dir = PROD ? 'build' : 'dist';


//Middleware
if(PROD){
    app.use(compression());
} else {
    app.use(require('webpack-dev-middleware')(compiler,{
        noInfo: true, publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(dir));

//api routes
app.get('api/sample-route', (req, res) => {
    res.send({
        website: 'GeoLocation',
        position: true
    });
});

//client routes
app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname, './', dir, '/index.html'));
});

app.listen(port, () => {
    open(`http://localhost:${port}`);
});