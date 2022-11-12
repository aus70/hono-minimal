import { Hono } from 'hono'
import { Top } from './pages/top'
import { Page } from './pages/page'
import { serveStatic } from 'hono/serve-static.module'

// Model
export type Post = {
  id: string
  title: string
  body: string
}

const posts: Post[] = [
  { id: '1', title: 'Good Morning', body: 'Let us eat breakfast' },
  { id: '2', title: 'Good Afternoon', body: 'Let us eat Lunch' },
  { id: '3', title: 'Good Evening', body: 'Let us eat Dinner' },
  { id: '4', title: 'Good Night', body: 'Let us drink Beer' },
  { id: '5', title: 'こんにちは', body: '昼からビールを飲みます' },
]

// Logic
const getPosts = () => posts

const getPost = (id: string) => {
  return posts.find((post) => post.id == id)
}


const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
//app.use('/favicon.ico', serveStatic({path: './favicon.ico' }))
app.get('/', (c) => c.text('This is Home! You can access: /static/hello.txt'))
//app.get('*', serveStatic({ path: './static/fallback.txt' }))

app.get('/hello', (c) => {
  return c.text('Hello Hono!')
})

app.get('/posts', (c) => {
  const posts = getPosts()
  return c.html(<Top posts={posts} />)
})

app.get('/post/:id{[0-9]+}', (c) => {
  const id = c.req.param('id')
  const post = getPost(id)
  if (!post) return c.notFound()
  return c.html(<Page post={post} />)
})

export default app
