var express = require('express');
var videoRoutes = express.Router();
var Video = require('../models/video');

videoRoutes.route('/add').post(function (req, res) {
    var video = new Video(req.body);
    video.save()
      .then(item => {
      res.status(200).json({'Video': 'Video added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  videoRoutes.route('/').get(function (req, res) {
    Video.find(function (err, videos){
     if(err){
       console.log(err);
     }
     else {
       res.json(videos);
     }
   });
 });
 videoRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Video.findById(id, function (err, video){
        res.json(video);
    });
  });

  videoRoutes.route('/update/:id').post(function (req, res) {
    Video.findById(req.params.id, function(err, video) {
     if (!video)
       return next(new Error('Could not load Document'));
     else {
        video.title = req.body.title;
        video.runTime = req.body.runTime;
        video.genre = req.body.genre;
        video.rating = req.body.rating;
        video.director = req.body.director;
        video.status = req.body.status;
        video.reserve= req.body.reserve
 
        video.save().then(video => {
           res.json('Update complete');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });

 videoRoutes.route('/reserve/:id').get(function (req, res) {
  var id = req.params.id;
  Video.findById(id, function (err, video){
      res.json(video);
  });
});
videoRoutes.route('/reservevideo/:id').post(function (req, res) {
    Video.findById(req.params.id, function(err, video) {
   if (!video)
     return new Error('Could not load Document');
   else {
    video.title = req.body.title;
    video.runTime = req.body.runTime;
    video.genre = req.body.genre;
    video.rating = req.body.rating;
    video.director = req.body.director;
    video.status = req.body.status;
    video.reserve= req.body.reserve

    video.save().then(video => {
         res.json('Update complete');
     })
     .catch(err => {
           res.status(400).send("unable to update the database");
     });
   }
 });
});
 videoRoutes.route('/delete/:id').get(function (req, res) {
    Video.findByIdAndRemove({_id: req.params.id}, function(err, video){
         if(err) res.json(err);
         else res.json('Successfully removed');
     });
 });

 module.exports = videoRoutes;