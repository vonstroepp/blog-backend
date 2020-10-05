const express = require('express')
const app = express()

const blogList = [
    {
        id: 1,
        title: 'Title 01',
        author: 'Author 01',
        url: '',
        likes: 0
    },
    {
        id: 2,
        title: 'Title 02',
        author: 'Author 02',
        url: '',
        likes: 0
    },
    {
        id: 3,
        title: 'Title 03',
        author: 'Author 03',
        url: '',
        likes: 0
    }
]

app.get('/', (request, response) => {
    response.send('<h1>BlogList</h1>')
})

app.get('/api/bloglist', (request, response) => {
    response.json(blogList)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on Port ${PORT}`)