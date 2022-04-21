/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/cars';
const router = express.Router();

router.get('/api/cars/getByDateAsc', controller.sortAllCarsByDateAsc);

export = router;