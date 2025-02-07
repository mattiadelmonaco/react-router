import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="ms-logo__container bg-white p-1">
      <Link to="/">
        <img className="size-full" src="../blog-react.svg" alt="Logo" />
      </Link>
    </div>
  );
}
