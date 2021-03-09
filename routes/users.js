var express = require('express');
var router = express.Router();

var db = require('../modules/user-db')
var userDatabase = db.users
var lastId = 2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(userDatabase);
});

router.get('/get/:id', (req,res) => {
  const id = parseInt(req.params.id,10);
  const desired_user = userDatabase.filter(val => {
      return val.id === id;
  });

  return res.status(200).json(desired_user);
});

router.post('/add', (req,res) => {
  const newUser = {
      id: ++lastId,
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      gender: req.body.gender,
      fine: 0,
      books: []
  };

  userDatabase.push(newUser);
  return res.status(201).json(newUser);
});

router.delete('/del/:id', (req,res) => {
  const id = parseInt(req.params.id,10);
  for(let i = 0;i<userDatabase.length;i++){
      if(userDatabase[i].id === id){
          userDatabase.splice(i,1);
          return res.status(200).json({
              success: 'true',
              message: 'deleted'
          })
      }
  }
});

router.put('/update-user/:id',(req,res) => {
  const id = parseInt(req.params.id,10);
  const userFound = userDatabase.filter(val => {
      return val.id === id;
  });

  if(!userFound){
      return res.status(404).json({
          message: "user not found"
      });
  }

  const dataUser = userFound[0];
  var books_user = dataUser.books;

  if(req.body.books!=null){
    books_user = dataUser.books.concat(req.body.books);
  }

  const updatedUser = {
      id: dataUser.id,
      name: req.body.name || dataUser.name,
      address: req.body.address || dataUser.address,
      dob: req.body.dob || dataUser.dob,
      gender: req.body.gender || dataUser.gender,
      fine: req.body.fine || dataUser.fine,
      books: books_user
  };

  for(let i = 0;i<userDatabase.length;i++){
      if(userDatabase[i].id === id){
          userDatabase[i] = updatedUser;
          return res.status(200).json(updatedUser);
      }
  }
  return res.status(404);

})

module.exports = router;
