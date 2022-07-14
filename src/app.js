// Requisições padrões
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const methodOverride = require('method-override');

// Setando as rotas
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// Middlewares setup
app.use(express.urlencoded ({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

// Exibir imagens e etc
app.use(express.static(path.resolve(__dirname, '../public')));

// Usando as rotas
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

// Colocando servidor pra rodar
app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
