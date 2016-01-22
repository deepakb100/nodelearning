var express = require("express");

var routes = function(MenueItem) {

    var menueItemsRouter = express.Router();

    menueItemsRouter.route('/')
        .post(function(req, res) {

            var menueItem = new MenueItem(req.body);

            menueItem.save();

            res.status(201).json(menueItem);

        })
        .get(function(req, res) {

             console.log(req.query);
              MenueItem.find(req.query, function(err, menueItems) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(menueItems);
                }
            });

        });

    menueItemsRouter.use('/:id', function(req, res, next) {
        MenueItem.findById(req.params.id, function(err, menueItem) {
            if (err)
                res.status(500).send(err);
            else if (menueItem) {
                req.menueItem = menueItem;
                next();
            }
            else {
                res.status(404).send('No menue item found');
            }
        });
    });

    menueItemsRouter.route('/:id')
    
        .get(function(req, res) {
            res.json(req.menueItem);
        })
        
        .put(function(req, res) {
            req.menueItem.name = req.body.name;
            req.menueItem.description = req.body.description;
            req.menueItem.venueId = req.body.venueId;
            req.menueItem.save();
            res.json(req.menueItem);
        });

    return menueItemsRouter;

};

module.exports = routes;