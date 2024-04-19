import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';
import residencyRoute from './routes/residencyRoutes.js';





const app = express();

const port = process.env.PORT ||  7000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

app.listen(port, () => console.log(`Server started on port: ${port}.`));




// Socket.IO setup
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});



const port1 =  5500;
httpServer.listen(port1, () => {
    console.log(`Server-2 started on port: ${port1}`);
});

app.get('/', (req, res) => {
    res.send('Server is running');
});
