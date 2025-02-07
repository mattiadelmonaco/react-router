import { Link } from "react-router-dom";

export default function SectionUnderCostruction() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">
        Sezione di sito in costruzione, intanto guarda i nostri post!
      </h2>

      <Link to="/posts-list" className="under-costruction__btn">
        Elenco Post
      </Link>

      <div className="under-costruction__img">
        <img
          className="w-full"
          src="../4120164.jpg"
          alt="sezione sito in costruzione"
        />
      </div>
    </div>
  );
}
