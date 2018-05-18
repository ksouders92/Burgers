var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get("*", function (req, res) {
    burger.all(function (burger_data) {
        //console.log(burger_data);
        res.render('index', { burger_data });
    })
})


router.post("/burgers/create", function (req, res) {
    debugger;
    burger.create([
        "burger name"
    ],
    [req.body.burger_id], function () {
        //console.log(result);
        res.redirect('/');
    });

    router.post("/burgers/update", function (req, res) {
        burger.update(req.body.burger_id, function (result) {
            //console.log(result);
            res.redirect('/');
        });
    });
});



//export routes
module.exports = router;