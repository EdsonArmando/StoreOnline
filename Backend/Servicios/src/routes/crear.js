const base = require('../firebase/config');
const { Router } = require('express');
const getStream = require('get-stream')
const fetch = require('node-fetch');
const router = Router();

router.post('/createShoe',async(req, res) => {    
    let zapato = req.body;
    await base.firestore().collection('Zapato').add(zapato)
    .then(response => {
        idArchivo = response.id 
    });
    res.json({
        correcto: 1
    })
  
});

router.get('/shoes',async(req, res) => {    
    const snapshot = await base.firestore().collection('Zapato').get()
    let listado = []
    snapshot.forEach( doc => {
        let actual = doc.data();
        actual.id = doc.id;
        listado.push(actual);
    });

    res.send(listado);
  
});

//Devuleve toda la collecion de archivos
async function getArchivos() {
    const snapshot = await base.firestore().collection('Zapato').get()
    let listado = []
    snapshot.forEach( doc => {
        let actual = doc.data();
        actual.id = doc.id;
        listado.push(actual);
    });

    return listado
}

module.exports = router;