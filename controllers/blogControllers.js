const Blog = require('../models/blog');

getAllBlogs = (req,res) => {
    Blog.find().sort({ createdAt : -1})
    .then((result) =>{
        res.render('index',{ title : 'Home' , blogs : result})
    }).catch((err) =>{
        console.log(err)
    })
}

createPage = (req,res) =>{
    res.render('create',{ title : 'Create' });
}

createBlog = (req,res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) =>{
        res.redirect('/blogs');
    }).catch((err) =>{
        console.log(err)
    })
}

deleteBlog = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect : '/blogs' })
    }).catch( (err) => {
        console.log(err);
    });
}

getBlogById = (req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>{
        res.render('details',{ title : 'Blog Details' , blog : result})
    }).catch((err) =>{
        res.status(404).render('404',{ title : 'Nope' })
    })
}

module.exports = {
    getAllBlogs,
    createPage,
    createBlog,
    deleteBlog,
    getBlogById
}