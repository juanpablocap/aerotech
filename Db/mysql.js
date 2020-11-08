import { createConnection } from 'mysql'

const conection = createConnection({
    host:'localhost:3306',
    user:'juanpabloroot',
    password:'123456',
    database:'prueba_cuatro'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona bien!')
})
//hacemos una consulta que nos devuelve dos resultados err o rows

conection.query('SELECT * from prueba_cuatro.clientes', (err, rows) => {
    if(err) throw err
    console.log('los datos de la tabla son estos:')
    console.log('rows')
})
conection.end() //cerramos coneccion a la base de datos
