import Link from 'next/link'

function Post({ title, slug, category, createdAt }) {
  return (
    <div>
      <p>{createdAt}</p>
      <div>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <h2>{title}</h2>
        </Link>
        <p>{'{'} category: {`"${category}"`} {'}'}</p>
      </div>
    </div>
  )
}

export default Post
