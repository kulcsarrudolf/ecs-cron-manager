import { Router, Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';

const userRouter = Router();
const userRepository = new UserRepository();

// Get all users
userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default userRouter;
