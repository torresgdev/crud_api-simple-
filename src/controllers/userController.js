const userService = require('../services/userService');

module.exports = {
    async createUser(req, res) {
        try {
            const {name} = req.body;
            const newUser = await userService.createUser(name);
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({error: "Error, user not created"})
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: "Error in found users"})
        }
    },

    async deleteUser(req, res) {
        try {
            const {id} = req.params;
            const deleteUser = await userService.deleteUser(id);
            if (!deleteUser) {
                return res.status(404).json({message: "USER NOT FOUND"})
            }
            res.status(200).json(deleteUser);
        } catch (error) {
            res.status(500).json({error:"ERROR IN DELETE USER"})
        }
    },


};