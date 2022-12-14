export async function getPosts(page: number = 1) {
  if (page) {
    const response = await fetch(
      `https://simpleresearch.co/wp-json/wp/v2/posts?page=${page}&_embed`
    );
    const posts = response.json();
    return posts;
  }

  const response = await fetch(
    "https://simpleresearch.co/wp-json/wp/v2/posts?_embed"
  );
  const posts = response.json();
  return posts;
}
