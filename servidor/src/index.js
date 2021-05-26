const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
var cors = require('cors')


const app = express();
app.use(cors())

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
        extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});



//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/link', require('./routes/links'));
app.use('/product', require('./routes/api/productoss'));
app.use('/noticias', require('./routes/api/noticias'));
app.use('/Eventos', require('./routes/api/eventos'));
app.use('/Categorias', require('./routes/api/Categorias'));
app.use('/Direcciones', require('./routes/api/Direcciones'));
app.use('/Login', require('./routes/api/login'));
app.use('/Pedidos', require('./routes/api/Pedidos'));
app.use('/Reservas', require('./routes/api/Reservaciones'));
app.use('/Tipo_ventos', require('./routes/api/Tipo_evento'));
app.use('/Contactanos', require('./routes/api/Contactanos'));










//app.use('/Autos', require('./routes/carross'));



//public
app.use(express.static(path.join(__dirname, 'public')));


//inicia el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});