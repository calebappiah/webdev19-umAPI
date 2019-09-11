const _ = require("lodash");
const express = require('express');
const router = express.Router();
const objectID = require('mongoose').Types.ObjectId

const {User} = require('../models/users');

router.get('/', async (req, res) => {
        let genderQuery = req.query['gender'];
        let ageQuery = req.query['age'];
        let nameQuery = req.query['name'];
    
        if (genderQuery !== undefined && ageQuery !== undefined) {
            usersFromDB = await User.find({ gender: genderQuery, age: ageQuery });
                return user.gender === genderQuery && user.age <= 18 && ageQuery <= 18;
            return res.json(usersFromDB);

        } else if (genderQuery !== undefined) {
            usersFromDB = await User.find({ gender: genderQuery });
            return res.json(usersFromDB);
        } else if (ageQuery !== undefined) {
            usersFromDB = await User.find({ age: ageQuery });
                return res.json(usersFromDB);
        } else if (nameQuery !== undefined) {
            usersFromDB = await User.find({ name: nameQuery });
            return res.json(usersFromDB);
        }
    
        const users = await User.find();
        res.json(users);
    });
    
    router.get('/users/:id',  async (req, res) => {
        userID = req.params['id'];
      if (!objectID.isValid(userID)) {
            return res.status(404).send();
        }
        
        userFromDB = await User.findById(userID);
        if (userFromDB === null) {
         return res.status(404).send();
        }
        res.json(userFromDB);
       
    });


    
    router.post('/users', (req, res) => {
        reqBody = req.body;
    
        newUser = _.pick(reqBody, ['name', 'gender', 'age']);
        newUser.id = users.length + 1;
    
        users.push(newUser);
    
        res.status(201).send();
    });
    
    router.put('/users/:id', (req, res) => {
        newUserID = parseInt(req.params['id']);
        reqBody = req.body;
    
        newUser = _.pick(reqBody, ['name', 'gender', 'age']);
    
        
        userFromDB = users.find(user => {
            newUser.id = user.id;
            return user.id === newUserID;
        });
    
        if (userFromDB === undefined) {
            return res.status(404).send();
        }
    
        u = users.filter(user => user.id !== newUserID);
        u.push(newUser);
    
        users = u;
    
        res.status(204).send();
    });
    
    router.delete('/users/:id', (req, res) => {
        userID = parseInt(req.params['id']);
    
        if (userID === NaN) {
            return res.status(404).send();
        }
    
        userFromDB = _.find(users, { id: userID });
    
        if (userFromDB === undefined) {
            return res.status(404).send();
        }
    
        u = users.filter(user => user.id !== userID);
    
        users = u;
    
        res.status(204).send();
    });
    


module.exports = router;