import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../controller/postscontroller.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
