const userRepository = require('../repositories/userRepository');

module.exports = {
    async createUser(name) {
        return await userRepository.createUser(name);
    },

    async getAllUsers() {
        return await userRepository.getAllUsers();
    },

    async deleteUser(id) {
        return await userRepository.deleteUser(id);
    },
};