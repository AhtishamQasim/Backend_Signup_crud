const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../Controller/postController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createPost); // Create a post
router.get('/', protect, getPosts);           // Get all posts
router.get('/:id', protect, getPostById);     // Get post by ID
router.put('/:id', protect, updatePost);      // Update post by ID
router.delete('/:id', protect, deletePost);   // Delete post by ID

module.exports = router;
