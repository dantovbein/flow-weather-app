import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use('/api/v1', apiRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(process.env.SERVER_PORT,() => {
  console.log(`Server running at ${process.env.SERVER_PORT}`);
});