const mongoose = require('mongoose')

let process

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://vonstroepp:${password}@cluster0.qlfii.mongodb.net/blog-app?retryWrites=true&w=majority`
//   `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
    title: 'HTML is Easy',
    author: 'H Materson',
    url: 'http://www.vonstroepp.com',
    likes: 0
})

blog.save().then(result => {
    console.log('blog saved!', result)
    mongoose.connection.close()
})