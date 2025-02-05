import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello world in Express');
});

router.get('/about', (req, res) => {
    res.send('About');
});

export default router;