const {v4: uuidv4} = require('uuid');

const userData = [
    {id: uuidv4(), nome: 'Jose', email: 'jose@email.com'},
    {id: uuidv4(), nome: 'Maria', email: 'maria@email.com'}
];

module.exports = userData;