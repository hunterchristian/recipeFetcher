var express = require('express');
var router = express.Router();

/* GET all recipes. Huge dataset, not recommended.*/
router.get('/all', function(req, res, next) {
    var db = req.db;
    db.get('appetizers').find({},{},function(e,appetizers){
        db.get('breakfasts').find({},{},function(e,breakfasts){
            res.status(200).json(appetizers.concat(breakfasts));

        });
    });
});

/* GET appetizers. */
router.get('/appetizers', function(req, res, next) {
    var db = req.db;
    var collection = db.get('appetizers');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET breakfast recipes. */
router.get('/breakfasts', function(req, res, next) {
    var db = req.db;
    var collection = db.get('breakfasts');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET chicken recipes. */
router.get('/chicken', function(req, res, next) {
    var db = req.db;
    var collection = db.get('chicken');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET dessert recipes. */
router.get('/desserts', function(req, res, next) {
    var db = req.db;
    var collection = db.get('desserts');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET healthy recipes. */
router.get('/healthy', function(req, res, next) {
    var db = req.db;
    var collection = db.get('healthy');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET maindish recipes. */
router.get('/maindish', function(req, res, next) {
    var db = req.db;
    var collection = db.get('maindish');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET pasta recipes. */
router.get('/pasta', function(req, res, next) {
    var db = req.db;
    var collection = db.get('pasta');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET slowcooker recipes. */
router.get('/slowcooker', function(req, res, next) {
    var db = req.db;
    var collection = db.get('slowcooker');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

/* GET vegetarian recipes. */
router.get('/vegetarian', function(req, res, next) {
    var db = req.db;
    var collection = db.get('vegetarian');
    collection.find({},{},function(e,recipes){
        res.status(200).json(recipes);
    });
});

module.exports = router;
