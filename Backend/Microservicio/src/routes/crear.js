const base = require('../firebase/config');
const { Router } = require('express');
const getStream = require('get-stream')
const fetch = require('node-fetch');
const router = Router();
/*
{
    "BASE64" : "",
    "CONTENIDO" : "image/jpeg",
    "NOMBRE": "test (1).jpg"
}

*/

router.post('/subirArchivo',async(req, res) => {    
    //PATH completa del archivo, tipo de contenido de archivo, nombre del archivo
    //Ejemplo
    //Subir Archivo  
    let  fechaString;
    let fecha = new Date();
    fechaString = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
    fechaString += " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    
    let base64Archivo = req.body.BASE64;
    let readData;
    try {
        readData = Buffer.from(base64Archivo, 'base64');
    } catch (error) {
    console.error(error);
    res.json({
        error: "No se pudo convertir el archivo"
    })
    }
    var downloaduRL;
    const newName =  req.body.NOMBRE + fechaString;
    var metadata = {
        contentType: req.body.CONTENIDO
      };

    // Crear referencia
    var storageRef = base.storage().ref('upload/'+newName);
    
    storageRef.put(readData,metadata).then(function(snapshot) {
    console.log('Uploaded an File!'); 
    storageRef.getDownloadURL()
        .then(function(result) {
            res.json({
                ruta: newName,
                downloadURL : result
            })
        });
    });
});
module.exports = router;