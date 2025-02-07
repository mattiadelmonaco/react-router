import Logo from "./Logo";
import HeaderRightNav from "./HeaderRightNav";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center ms-container">
        <Logo />
        <HeaderRightNav />
      </nav>
    </header>
  );
}
