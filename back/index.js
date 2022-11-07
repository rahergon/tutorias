const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// WJaiPa5UyUvr)QI[
const db = mysql.createPool({
	host:'localhost',
	user:'tutorias_user',
	password:'WJaiPa5UyUvr)QI[',
	database:'tutorias',
});

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res) =>{
	res.send('Hola mundo');
});
app.post('/alumno/agregar', (req, res)=>{
	const { matricula, aPaterno, aMaterno, nombre, sexo, dCalle, dNumero, dColonia, dCodigoPostal, aTelefono, aCorreo, aFacebook, aInstagram } = req.body;
	const sql = "INSERT INTO alumnos VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	db.query(sql, [matricula, aPaterno, aMaterno, nombre, sexo, dCalle, dNumero, dColonia, dCodigoPostal, aTelefono, aCorreo, aFacebook, aInstagram,'default.jpg'], (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
			})
		}
	});
});
app.get('/alumnos', (req, res)=>{
	const sql = "SELECT * FROM alumnos";
	db.query(sql, (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
				result,
			})
		}
	});
});

app.post('/alumno/matricula', (req, res)=>{
	
	const { matricula, aPaterno, aMaterno, nombre, sexo, dCalle, dNumero, dColonia, dCodigoPostal, aTelefono, aCorreo, aFacebook, aInstagram } = req.body;

	const sql = "UPDATE alumnos SET aPaterno=?, aMaterno=?, nombre=?, sexo=?, dCalle=?, dNumero=?, dColonia=?, dCodigoPostal=?, aTelefono=?, aCorreo=?, aFacebook=?, aInstagram=? WHERE matricula=?";
	db.query(sql, (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
				result,
			})
		}
	});

});




app.listen(port, ()=>{
	console.log(`escuchando en el puerto ${port}`);
})
