const dummy = (blogs) => {
    console.log(blogs)
    return 1
}

const totalLikes = (blogs) => {

    const likes = blogs.map((el) => {
        return el.likes
    })

    const reducer = (sum, likes) => {
        return sum + likes
    }

    return blogs.length === 1
        ? blogs[0].likes
        : likes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
   
    const arr = []

    // eslint-disable-next-line no-unused-vars
    const pushLikes = blogs.map((el) => {
        arr.push(el.likes)
    })
    const highest = Math.max(...arr)
        
    const getHighest = blogs.find(el => el.likes === highest)
    return getHighest
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}