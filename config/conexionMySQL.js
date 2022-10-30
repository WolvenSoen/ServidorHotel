//(1)CONEXIÓN A LA BASE DE DATOS MYSQL
const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306', //Default
    database: 'wolvenhotel' //Nombre de la base de datos MySQL
});

connection.connect((error) => {
    if(error)
    {
        console.log('Error connecting to wolvenhotel')
    }
    else
    {
        console.log('Connected to wolvenhotel')
    }
});

//Esta variable se exporta para que se pueda acceder desde otras clases :D
module.exports = connection;