const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ajaxcall', function(req, res){
  let data =
    {
    firstName: 'Jordan',
    lastName: 'Michele',
    message: 'Hello World'
    };
  res.send(data)
});

app.listen(8000, function(){
  console.log("Server Started")
})
