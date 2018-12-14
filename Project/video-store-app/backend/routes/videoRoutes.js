const express = require('express'),
    videoRouter = express.Router(),
    Video = require('../models/video')
    app = express()

//app.use('/', videoRouter);
    
videoRouter.route('/').get((req, res) => {
    Video.find((err, videos) => {
        if (err)
            console.log(err);
        else
            res.json(videos);
    });
});

videoRouter.route('/:id').get((req, res) => {
    Video.findById(req.params.id, (err, video) => {
        if (err)
            console.log(err);
        else
            res.json(video);
    });
});
//add video
videoRouter.route('/add').post((req, res) => {
    let video = new Video(req.body);
    video.save()
        .then(video => {
            res.status(200).json({'video': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new video');
        });
});

//edit video
videoRouter.route('/update/:id').post((req, res) => {
    Video.findById(req.params.id, (err, video) => {
        if (!video)
            return next(new Error('Could not load document'));
        else {
            video.title = req.body.title;
            video.runTime = req.body.runTime;
            video.genre = req.body.genre;
            video.rating = req.body.rating;
            video.director = req.body.director;
            video.status = req.body.status;
            video.customer = req.body.customer;

            video.save().then(video => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});


videoRouter.route('/delete/:id').get((req, res) => {
    Video.findByIdAndRemove({_id: req.params.id}, (err, video) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})
module.exports = videoRouter