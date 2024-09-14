import { Router, Request, Response } from 'express';

const router: Router = Router();

interface User {
  id: number;
  name: string;
}

// Array to simulate user data
let users: User[] = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' }
];

// GET all users
router.get('/', (req: Request, res: Response) => {
  res.json(users);
});
// Get a user by id
router.get('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const user: User | undefined = users.find(user => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST a new user
router.post('/', (req: Request, res: Response) => {
  const newUser: User = req.body;

  // Assign a new id based on array length
  newUser.id = users.length + 1;

  users.push(newUser);
  res.status(201).json(newUser);
});
// Update a user by id
router.put('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const updatedUser: User = req.body;

  users = users.map(user => {
    if (user.id === id) {
      return updatedUser;
    }

    return user;
  });

  res.json(updatedUser);
});
// Delete a user by id
router.delete('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);

  res.status(204).send();
});

export default router;
