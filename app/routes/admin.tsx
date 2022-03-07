import { Outlet, Link, useLoaderData } from "remix";
import type { Post } from "~/post";
import { getPosts } from "~/post";
import adminStyle from "~/styles/admin.css";

export const loader = async () => {
  return getPosts();
};

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyle }];
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post: Post) => {
            return (
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
