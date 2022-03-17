const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dbURI = 'mongodb+srv://<yourUsername>:<yourPassword>@nodetutorial.2hlwv.mongodb.net/<yourDbName>?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(() =>{
    console.log('Connected to DB');
    app.listen(3000);
}).catch((err) =>{
    console.log(err)
})
//register view engine
app.set('view engine','ejs')


//static middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}));
app.use(morgan('dev'))

app.use('/blogs',blogRoutes);



app.get('/',(req,res)=>{
    res.redirect('/blogs')
});

app.get('/about',(req,res) =>{
    res.render('about' ,{ title : 'About'});
})


app.use((req,res) =>{
    res.status(404).render('404',{ title : 'Nope'});
})