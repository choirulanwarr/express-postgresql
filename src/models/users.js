const dbPool = require('../config/database');

const getAllUsers = async () => {
    const result = await dbPool.query("SELECT * FROM users ORDER BY id DESC");
    
    return result.rows;
}

const createNewUser = async (body) => {
    const result = await dbPool.query(`INSERT INTO users (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`);

    return result.rows[0];
}

const updateUser = async (body, idUser) => {
    const result = await dbPool.query(`UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id=${idUser}`);

    return result.rows[0];
}

const deleteUser = async (idUser) => {
    const result = await dbPool.query(`DELETE FROM users WHERE id=${idUser}`);

    return result.rows[0];
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}