import mongoose from 'mongoose';
import PostSchema from '../model/postSchema.js';

// Get post list
export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostSchema.find({}).sort({ createdAt: -1 });
    res.status(200).send(allPosts);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Create a new post
export const createPost = async (req, res) => {
  const dbPost = req.body;
  try {
    const newPost = await PostSchema.create(dbPost);
    res.status(201).send(newPost);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update the post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send(`${id} is not valid id`);
    }
    const todoId = { _id: id };
    const post = req.body;
    const updateToDo = await PostSchema.findByIdAndUpdate(todoId, post, {new: true});
    res.status(200).send(updateToDo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete post
export const deletePost = async (req, res) => {
};
