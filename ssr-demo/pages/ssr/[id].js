
export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const post = await res.json();

  if (!post.id) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

export default function SSRPage({ post }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dynamic Server-Side Rendering</h1>
      <h2>Post ID: {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
