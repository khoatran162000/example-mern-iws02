const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {							//localhost:5000/users   GET
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {					//localhost:5000/users/add		POST
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;