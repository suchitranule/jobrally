var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var jobs = [{
        Title: "AngularJs",
        Description: "Need an Angular Developer",
        Experience: "2",
        Location: "Hyderabad",
        Salary: "2L"
    },
    {
        Title: ".Net Developer",
        Description: "Dot net Developer",
        Experience: "6",
        Location: "Banglore",
        Salary: "10L"
    }]
    res.json(jobs)
});

router.post('/register', function (req, res) {
    console.log(req.body)

    res.send({ "result": 'Registered Successfully' });
});


module.exports = router;
