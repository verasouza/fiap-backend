const userData = require('../data/userData');
const { v4: uuidv4 } = require('uuid');

const getUsers = (req, res) => {
    res.json(userData);
};

const addUser = (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }

    const newUser = {
        id: uuidv4(),
        nome: nome,
        email: email
    };

    userData.push(newUser);
    res.status(201).json(newUser);
};

const getUserById = (req, res) => {
    const id = req.params.userId;
    const user = userData.find(user => user.id === id);
    
    if (!user) {
        return res.status(404).send("Usuário não encontrado");
    }
    
    res.json(user);
};

module.exports = {
    getUsers,
    addUser,
    getUserById
};
