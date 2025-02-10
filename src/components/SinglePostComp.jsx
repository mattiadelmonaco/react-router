import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SinglePostComp({ singlePostData, postsLength }) {
  const navigate = useNavigate();

  return (
    <div className="bg-red-950 rounded-3xl flex flex-col items-center p-4 shadow-2xl max-w-3xl">
      <div className="w-[700px] object-cover my-3">
        <img
          className="size-full rounded-2xl"
          src={singlePostData.image}
          alt={singlePostData.title}
        />
      </div>
      <h2 className="text-3xl font-bold my-0.5">{singlePostData.title}</h2>
      <h3 className="mb-5">
        di: <strong>{singlePostData.author}</strong>
      </h3>
      <p>{singlePostData.content}</p>
      <h3 className="mt-6 mb-3 text-2xl font-bold">Ingredienti:</h3>
      <ol className="mb-6">
        {singlePostData.recipe?.ingredients?.map((ingredient, index) => {
          return (
            <li key={index} className="px-2 border-b-1 border-neutral-400">
              {ingredient}
            </li>
          );
        })}
      </ol>
      <h3 className="mt-6 mb-3 text-2xl font-bold">Procedimento:</h3>

      <ol>
        {singlePostData.recipe?.instructions?.map((instructions, index) => {
          return (
            <li key={index} className="px-2 border-b-1 border-neutral-400">
              {instructions}
            </li>
          );
        })}
      </ol>
      <div className="flex gap-40 my-4">
        <button
          onClick={() => navigate(`/posts-list/${singlePostData.id - 1}`)}
          className={`under-costruction__btn ${
            singlePostData.id === 1 ? "disable-btn" : ""
          }`}
          disabled={singlePostData.id === 1}
        >
          Post precedente
        </button>
        <button
          onClick={() => navigate(`/posts-list/${singlePostData.id + 1}`)}
          className={`under-costruction__btn ${
            singlePostData.id >= postsLength ? "disable-btn" : ""
          }`}
          disabled={singlePostData.id === postsLength}
        >
          Post successivo
        </button>
      </div>
      <Link to="/posts-list" className="under-costruction__btn">
        Torna all'elenco dei post
      </Link>
    </div>
  );
}
