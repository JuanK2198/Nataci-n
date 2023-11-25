const { Client } = require('pg');

const conexion = new Client({
    host: 'localhost',
    database: 'Prueba',
    user: 'postgres',
    password: 'Juank831'
});

conexion.connect()
    .then(() => {
        console.log('CONEXION EXITOSA');
    })
    .catch(error => {
        console.error('Error de conexión:', error.message);
    });