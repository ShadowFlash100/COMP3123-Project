const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express(),
    port = process.env.PORT || 3000,
    videoRoutes = require('./routes/videoRoutes'),
    customerRoutes = require('./routes/customerRoutes')

    app.use(cors());
    app.use(bodyParser.json());

    mongoose.connect('mongodb://admin:RH20admin@ds031617.mlab.com:31617/video-store-db',{ useNewUrlParser: true })
        .then(() => {
            console.log('Connected to Mongo database!');
        })
        .catch(err  => {
            console.error('Failed to connect to database');
        });


    app.use('/videos', videoRoutes);
    app.use('/customers', customerRoutes)

    app.listen(port, () => console.log('Express server running on port ' + port));