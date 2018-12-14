const express = require('express'),
    custRouter = express.Router(),
    Customer = require('../models/customer')
    app = express()

//app.use('/', custRouter);
    
custRouter.route('/').get((req, res) => {
    Customer.find((err, customers) => {
        if (err)
            console.log(err);
        else
            res.json(customers);
    });
});

custRouter.route('/:id').get((req, res) => {
    Customer.findById(req.params.id, (err, customers) => {
        if (err)
            console.log(err);
        else
            res.json(customers);
    });
});

custRouter.route('/add').post((req, res) => {
    let customer = new Customer(req.body);
    customer.save()
        .then(customer => {
            res.status(200).json({'customer' : 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new customer');
        });
});

custRouter.route('/update/:id').patch((req, res) => {

    const id = req.params.videoId;
    
    Customer.findById(req.params.id, (err, customer) => {
        if (!customer)
            return next(new Error('Could not load document'));
        else {
            customer.firstName = req.body.firstName;
            customer.lastName = req.body.lastName;
            customer.address = req.body.address;
            customer.city = req.body.city;
            customer.phoneNumber = req.body.phoneNumber;
            customer.status = req.body.status;
            customer.video = req.body.video;

            customer.save().then(customer => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

custRouter.route('/delete/:id').get((req, res) => {
    Customer.findByIdAndRemove({_id: req.params.id}, (err, customer) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})
module.exports = custRouter