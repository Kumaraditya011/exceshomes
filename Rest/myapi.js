var express = require('express');
var router = express.Router();



var Customer = require('../Model/usermodel');


router.post('/userc', (req, res) => {
   
    var sd = new Customer(req.body);
    sd.save();
 

});


router.get('/viewuser', (req, res) => {
    Customer.find({}, (err, data) => {
        res.json({ data });
    });
});

router.delete('/deleteuser/:id', (req, res)=>{
    Customer.findByIdAndDelete({_id: req.params.id},
        (err, data) => {
            res.json({ data});
        });
});

router.put('/updateuser', (req, res) => {
Customer.findById(req.body._id, (err, data) => {
    data.name = req.body.name;
    data.mail = req.body.mail;
    data.subject = req.body.subject;
    data.phone = req.body.phone;
    data.msg = req.body.msg;


    data.save();
    res.status(201).send(data);

});
});

module.exports = router;
