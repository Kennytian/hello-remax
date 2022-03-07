import { Link, useLoaderData } from "remix";
import type { Post } from "~/post";
import { getPosts } from "~/post";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData();
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post: Post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </main>
  );
}
