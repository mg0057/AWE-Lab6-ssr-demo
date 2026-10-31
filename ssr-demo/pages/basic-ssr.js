
export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch joke");
    }

    const joke = await res.json();

    return {
      props: { joke },
    };
  } catch (error) {
    return {
      props: { joke: null },
    };
  }
}

export default function BasicSSRPage({ joke }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Basic SSR Example</h1>
      {joke ? (
        <>
          <p>{joke.setup}</p>
          <p><strong>{joke.punchline}</strong></p>
        </>
      ) : (
        <p>Unable to load a joke.</p>
      )}
    </div>
  );
}
