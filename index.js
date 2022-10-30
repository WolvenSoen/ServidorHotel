require('./config/conexionMySQL');

//Esto es para recuperar el puerto en el cual está publicado el servidor 
const express = require('express');
//Si no se encuentra un puerto a configurar, se ajusta al 3000
const port = (process.env.port || 3000);
//Instancia de express
const app = express();

//ADMISIÓN DE TIPOS DE DATOS
app.use(express.json());

//CONFIGURACIÓN
app.set('port', port);

//RUTAS
//Se publica en api, puesto que no está ciclico. Esto nos ayudará con las peticiones del Callback en Angular
app.use('/api', require('./rutas-servidor/rutas'))

//Iniciar Express como servidor 
app.listen(app.get('port'),(error) => {
    if(error)
    {
        console.log('Error al iniciar el servidor'+error)
    }
    else
    {
        console.log('Servidor iniciado en el puerto: '+port)
    }
})

