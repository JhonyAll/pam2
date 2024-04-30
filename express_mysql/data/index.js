import mysql from 'mysql2/promise';

const cx = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'empresas_mineradoras',
    password: ''
});

export {cx}