const fetch = require('node-fetch');

async function usuarios(req, res, next){   
    if (req.query.api == "shoes") {        
        let insercion = {
            entrada: {},
            salida: {},      
            error: "",
            metodo: ""
        }

        if (req.query.id == "createShoe"){
            let ruta = req.body.ruta;
            delete req.body.ruta
            let respuesta 

            await fetch(ruta, { 
                method: 'POST', 
                body: JSON.stringify(req.body),
                headers: { 'Content-Type': 'application/json' } 
            })
            .then(response => response.json())
            .then(json => respuesta = json)

            res.send(respuesta)
            next();
        }else if(req.query.id == "listado"){
            let ruta = req.body.ruta;
            delete req.body.ruta;
            let respuesta

            await fetch(ruta, { 
                method: 'GET',                 
                headers: { 'Content-Type': 'application/json' } 
            })
            .then(response => response.json())
            .then(json => respuesta = json)      
            res.send(respuesta)
            next();

        }
    } else if(req.query.api == "File"){
        if (req.query.id == "subirArchivo"){
            let ruta = req.body.ruta;
            delete req.body.ruta
            let respuesta 
            try{
                await fetch(ruta, { 
                method: 'POST', 
                body: JSON.stringify(req.body),
                headers: { 'Content-Type': 'application/json' } 
            })
            .then(response => response.json())
            .then(json => respuesta = json)

            res.send(respuesta)
            next();
            }catch (e) {
               // sentencias para manejar cualquier excepción
               console.log(e); // pasa el objeto de la excepción al manejador de errores
            }            
        }
    }
} 
module.exports = usuarios
