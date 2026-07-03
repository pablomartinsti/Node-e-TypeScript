import { Request, Response } from 'express';

const db = [{ name: 'Joana', email: 'joana@dio.com' }];

export class UserController {
  createUser = (req: Request, res: Response) => {
    const user = req.body;
    db.push(user);
    console.log(db);
    return res.status(201).json({ message: 'Usuário criado' });
  };
}
