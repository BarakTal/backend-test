var express = require('express');
const App = express();
App.use(express.static('public'));
const port = process.env.PORT || 3000;
App.listen(port,()=>{
    console.log('listening on port:',port)
})