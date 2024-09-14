import { Router, Request, Response } from 'express';

const router: Router = Router();

interface Option {
  id: number;
  option: string;
}

// Array to simulate option data
let options: Option[] = [
  { id: 1, option: 'Option 1' },
  { id: 2, option: 'Option 2' }
];

// GET all options
router.get('/', (req: Request, res: Response) => {
  res.json(options);
});

// POST a new option
router.post('/', (req: Request, res: Response) => {
  const newOption: Option = req.body;

  // Assign a new id based on array length
  newOption.id = options.length + 1;

  options.push(newOption);
  res.status(201).json(newOption);
});

export default router;
