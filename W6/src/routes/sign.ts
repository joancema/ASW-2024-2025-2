import express from 'express';
import jwt from 'jsonwebtoken';
import bc from 'bcrypt'

const router = express.Router();

const secretKey = 'joancema';

// Route to create a token
router.post('/token', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username|password is required' });
    }

    // Payload for the token
    const payload = {
        username: username,
        password: bc.hashSync(password, 10),
    };

    // Generate the token
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    res.json({ token });
});

export default router;