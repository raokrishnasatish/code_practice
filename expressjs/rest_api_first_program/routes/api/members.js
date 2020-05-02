const express = require('express');
let members = require('../../DataStore');
const uuid = require('uuid');

const router = express.Router();

//method to get all members of object
router.get('/', (req, res) => {
    res.json(members);
});

//method to get one member
router.get('/:id', (req, res) => {

    const found = members.some((member) => {
        return member.id === parseInt(req.params.id)
    });

    if (found) {

        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json([{
            "msg": `Member with specified id:${req.params.id} not found`
        }]);
    }

});

//create member
router.post('/', (req, res) => {

    if (req.body.name && req.body.email) {
        const newMember = {
            id: uuid.v4(),
            name: req.body.name,
            email: req.body.email,
            status: "active"
        };

        res.json(newMember);
    } else {
        res.json({
            msg: "Please ensure to include both name and email"
        });
    }
});

//update member
router.put('/:id', (req, res) => {

        let updatedMember = {};
        let foundFlag = false;

        members.forEach((member) => {
            if(member.id == req.params.id && member.name === req.body.name) {
                updatedMember = req.body;
                for (let property in updatedMember) {
                    if(property != "id" && property != "name") {
                        member[property] = updatedMember[property];
                    }
                }
                foundFlag = true;
                let {id, name} = member;
                return res.json({id, name});
            }
        });

        if(!foundFlag) {
            res.send(`Member with id: ${req.params.id} and name: \"${req.body.name}\" cannot be found. Please check the data.`);
        }
});

// Delete member.
router.delete('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id) && member.name === req.body.name);
    if(found) {
        members= members.filter(member => member.id !== parseInt(req.params.id));
        res.status(200).json({msg: `Member with details deleted`, member: `{ id: ${req.params.id}, name: ${req.body.name}}`});
    } else {
        res.status(400).json({msg: `member with id: ${req.params.id} and name: \" ${req.body.name}\" could not be found. Hence not deleted.`});
    }



});

module.exports = router;