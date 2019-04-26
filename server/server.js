const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const server = express()
const PORT = 3000

server.use(fileUpload())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use( '/static', express.static(path.join(__dirname, 'static')) )
server.listen(PORT, ()=>{
    console.log('Xend Server Started')
})

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: [
        __dirname + '/views/partials'
    ]
}))

// ----------------------------------------------------------
// ========================= SERVER =========================
// ----------------------------------------------------------

server.get('/', (req,res)=>{
    res.sendStatus(200)
})