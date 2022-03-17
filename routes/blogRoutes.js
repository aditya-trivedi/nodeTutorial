const express = require('express');
const blogControllers = require('../controllers/blogControllers');

const router = express.Router();

router.get('/', blogControllers.getAllBlogs);

router.get('/create',blogControllers.createPage);

router.post('/' , blogControllers.createBlog);

router.delete('/:id', blogControllers.deleteBlog);

router.get('/:id' , blogControllers.getBlogById);

module.exports = router;