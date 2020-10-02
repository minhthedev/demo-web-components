import './post-article.js'

async function fetchPost() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2').then(res => res.json())

    console.log("post responses: ", posts)

    const elMain = document.querySelector('main')

    posts.map((item) => {
        console.log("post: ", item.title)

        const el = document.createElement('post-article')
        el.article = item
        elMain.appendChild(el)
    })

}

fetchPost()