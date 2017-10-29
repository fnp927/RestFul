app.post('/appointment', function(req, res) {

  var bpp = require("./appointment.js");
  bpp.Appointment(req.body.clinId,req.body.timeSlot,req.body.date,req.body.patient,function(result){
    if(result)
      res.json({ message: "true"});
    else
      res.json({message: "false"});
  });
  
});