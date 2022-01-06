import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import {createServer} from 'http'
import { Server } from 'socket.io';

import allRoutes from './routes/all-routes.js';
import { globalMiddleware1 } from './middleware/global-middleware.js';

const __dirname = path.resolve();
const app = express();
dotenv.config();

// ! Socket IO related code
const server = createServer(app)
const io = new Server(server);

io.on('connection', (socket) => {
 
  console.log(socket.id)
  socket.on('message', (message) => {
    console.log(message)
    io.emit('received', message)
  })
});

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(globalMiddleware1)
app.use('/api', allRoutes)

// serving static files and corresponding routes
app.use(express.static(path.join(__dirname, 'public')));
app.get('/socket', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => server.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error));

