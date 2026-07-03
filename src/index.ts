import express, { Request, Response } from 'express';
import { UserController } from './controllers/userController';

const server = express();
server.use(express.json());

const userController = new UserController();

server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'DioBank API' });
});

server.post('/user', userController.createUser);

server.listen(5000, () => console.log('Server on'));
