const express = require('express');
const router = express.Router();

const User = require('../database/models/user');
//get all user list
router.get('/', (req, res) => {
    User.find()
        .then(userlist => res.json(userlist))
        .catch(error => res.json({ error: 'users not found' }));
})
//get specific user data
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(userData => res.json(userData))
        .catch(error => res.json({ error: 'user not found' }));
})
//get user by phone number
router.get('/getUserByPhon/:number', (req, res) => {
    User.find({ mobile: req.params.number })
        .then((result) => res.json(result))
        .catch(error => res.json({ error: 'User Not Found' }))
})
//add new user
router.post('/', (req, res) => {
    let userData = req.body.user;
    User.find(({ mobile: userData.mobile }), (err, result) => {
        if (result && result.length != 0) {
            res.status(200).send({ error: 'User already registered' })
        } else {
            const newUser = new User({
                fName: userData.fName,
                lName: userData.lName,
                mobile: userData.mobile,
                email: userData.email,
                password: userData.password
            });
            // res.json({ success: 'User added succesfully' })
            newUser.save()
                .then(() => {
                    User.find({ mobile: userData.mobile })
                        .then((result) => res.json(result));
                })
                .catch(() => res.json({ error: "cant save user data, try after some time" }))
        }
    })
})
//update specific user
router.put('/:id', (req, res) => {
    User.findById(req.params.id, (error, result) => {
        if (result) {
            result.fName = req.body.fName;
            result.lName = req.body.lName;
            result.email = req.body.email;
            result.mobile = req.body.mobile;
            result.password = req.body.password;
            result.save()
                .then(() => res.json({ success: 'User updated succesfully' }))
                .catch(() => res.json({ error: "cant update user, try after some time" }))

        } else {
            res.json({ error: "cant update user, try after some time" })
        }
    })
})
//delete user by id
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(userData => userData.remove()
            .then(() => res.json({ success: "User deleted succesfully" }))
            .catch(() => res.json({ error: "somthing went wrong" })))
        .catch(() => res.json({ error: 'Cannot find user' }))
})

module.exports = router;