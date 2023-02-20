import express from 'express';
import morgan from 'morgan';
import path from 'path';

import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../index.html'));
});

app.use('/api/auth', authRoutes);


export default app;

