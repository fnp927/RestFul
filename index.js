var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/authorize', function(req, res) {
  var bpp = require("./verify.js");
  bpp.verify(req.body.username,req.body.password, function(result){
  	if(result)
  		res.json({ message: "true"});
  	else
  		res.json({message: "false"});
  });
  
});

app.post('/verify', function(req, res) {
  console.log("222");
  var bpp = require("./verification.js");
  bpp.verify(req.body.username,req.body.verifyCode, req.body.password, function(result){
  	if(result)
  		res.json({ message: "true"});
  	else
  		res.json({message: "false"});
  });
});

app.post('/appointment', function(req, res) {
  var bpp = require("./appointment.js");
  bpp.Appointment(req.body.clinId,req.body.timeSlot,req.body.date,req.body.patient,function(result){
    if(result)
      res.json({ message: "true"});
    else
      res.json({message: "false"});
  });
  
});

app.post('/notification',function(req,res){
  var bpp = require("./notification.js");
  console.log(req.body.patient)
  bpp.notification(req.body.patient,function(result)
  {
    res.json({message:result})
  })
});
 
app.listen(3000);