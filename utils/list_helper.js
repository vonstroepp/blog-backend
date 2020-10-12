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

module.exports = {
    dummy,
    totalLikes
}