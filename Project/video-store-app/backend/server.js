const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    videoRoutes = require('./routes/videoRoutes'),
    customerRoutes = require('./routes/customerRoutes')
    mongoose.Promise = global.Promise;
   

    mongoose.connect('mongodb://admin:RH20admin@ds031617.mlab.com:31617/video-store-db')
        .then(() => {
            console.log('Connected to Mongo database!');
        })
        .catch(err  => {
            console.error('Failed to connect to database');
        });
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
 
    
    app.use('/videos', videoRoutes);
    app.use('/customers', customerRoutes)

    app.listen(port, function(){
        console.log('Express server running on port' + port);
    });