const db = require("../config/database");

module.exports = {
    async createUser(name) {
        const result = await db.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
        return result.rows[0];
    },

    async getAllUsers() {
        const result = await db.query('SELECT * FROM users ORDER BY id');
        return result.rows
    },

    async deleteUser(id) {
        const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    },
};

