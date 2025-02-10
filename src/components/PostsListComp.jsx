import { Link } from "react-router-dom";

export default function PostsListComp({ postData }) {
  return (
    <ul className="grid grid-cols-3 gap-10 w-6xl mx-auto text-white">
      {postData.map((post) => {
        return (
          <Link to={`/posts-list/${post.id}`} key={post.id}>
            <li className="bg-red-950 h-full rounded-3xl flex flex-col items-center p-4 shadow-2xl ms-card">
              <div className="w-[300px] aspect-video object-cover my-3">
                <img
                  className="size-full rounded-2xl"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <h2 className="text-lg font-bold my-0.5">{post.title}</h2>
              <h3 className="mb-5">
                di: <strong>{post.author}</strong>
              </h3>
              <p>{post.content}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
