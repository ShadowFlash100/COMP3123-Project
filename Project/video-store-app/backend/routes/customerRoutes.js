const express = require('express'),
    custRouter = express.Router(),
    customer = require('../models/customer')

  //get data
  custRouter.route('/').get(function (req, res) {
    customer.find(function (err, customer){
     if(err){
       console.log(err);
     }
     else {
       res.json(customer);
     }
   });
 });


 module.exports = custRouter;