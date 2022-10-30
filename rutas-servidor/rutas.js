//(2)RUTAS 
const rutas  = require('express').Router();
const conexion = require('../config/conexionMySQL')

//(3)CRUD

//SELECT
rutas.get('/', (req, res) => {
    let sql = 'SELECT * FROM reservaciones'
    conexion.query(sql,(error,filas,campos) => {
        if(error) throw error;
        else
        {
            res.json(filas)
        }
    });
});

//SINGLE SELECT
rutas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM reservaciones WHERE id_res = ?'
    conexion.query(sql,[id],(error,filas,campos)=>{
        if(error) throw error;
        else{
            res.json(filas)
        }
    })
})

//INSERT
rutas.post('/',(req,res)=>{
    const{idRes, idUser, fecIn, fecOut, numA, numN, numC} = req.body
    const fecRes = new Date(Date.now()).toISOString(); //Esta línea castea la fecha para que pueda ser depositada en la base de datos 
    let sql = `INSERT INTO reservaciones(id_res, iduser_res, fecRes_res, fecIn_res, fecOut_res, numA_res, numN_res, numC_res) VALUES('${idRes}','${idUser}','${fecRes}','${fecIn}','${fecOut}','${numA}','${numN}','${numC}')`
    conexion.query(sql, (error,filas,campos)=>{
        if(error) throw error
        else{
            res.json({status: 'reservacion agregada!'})
            console.log("Reservación Agregada")
        }
    })
})

//DELETE
rutas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `DELETE FROM reservaciones WHERE id_res = '${id}'`
    conexion.query(sql, (error,filas,campos)=>{
        if(error) throw error
        else{
            res.json({status: 'reservacion eliminada!'})
        }
    })
})

//UPDATE
rutas.put('/:id', (req,res)=>{
    const {id} = req.params
    const{fecIn, fecOut, numA, numN, numC} = req.body
    let sql = `UPDATE reservaciones SET
                fecIn_res = '${fecIn}',
                fecOut_res = '${fecOut}',
                numA_res = '${numA}',
                numN_res = '${numN}',
                numC_res = '${numC}'
                WHERE id_res = '${id}'`
    conexion.query(sql, (error,filas,campos)=>{
        if(error) throw error
        else{
            res.json({status: 'reservacion actualizada!'})
        }
    })
})

module.exports = rutas;