/* Importar lib */
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

console.log(pages)
/* Iniciando lib */
const server = express()
server
/* Utilizar body do req */
.use(express.urlencoded({extended: true}))
/* Utilizando os arquivos estáticos */
.use(express.static('public'))

/* Configurar template engine */
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

/*rotas */
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
/* Ligar o servidor */
server.listen(5500)