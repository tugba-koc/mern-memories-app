import express from 'express';
import { createPost, getPosts, updatePost, deletePost, likePost } from '../controller/postscontroller.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
