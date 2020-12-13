function Post({ title, slug, category, createdAt, body }) {
  return (
    <div className="container">
      <div className="text">
        <h2>{title}</h2>
        <p>{slug}, {category}, {createdAt}</p>
        <p>{body}</p>
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
      `}</style>
    </div>
  )
}

export default Post
