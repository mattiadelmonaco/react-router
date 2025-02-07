import { NavLink } from "react-router-dom";

export default function HeaderRightNav() {
  return (
    <ul className="flex gap-6 items-center text-white font-semibold">
      <li>
        <NavLink className={"pb-0.5 px-1.5 rounded-lg"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"pb-0.5 px-1.5 rounded-lg"} to="/posts-list">
          Elenco Post
        </NavLink>
      </li>
      <li>
        <NavLink className={"pb-0.5 px-1.5 rounded-lg"} to="/about-us">
          Chi siamo
        </NavLink>
      </li>
      <li>
        <NavLink className={"pb-0.5 px-1.5 rounded-lg"} to="/contacts">
          Contatti
        </NavLink>
      </li>
    </ul>
  );
}
