
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const post = await res.json();

  return {
    props: { post },
  };
}

export default function SSGPage({ post }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Static Site Generation</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
