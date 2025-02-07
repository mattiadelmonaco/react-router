import Logo from "./Logo";
import SocialBtnRightFooter from "./SocialBtnRightFooter";

export default function Footer() {
  return (
    <footer>
      <div className="ms-container">
        <section>
          <div className="flex justify-between mt-2.5">
            <Logo />
            <SocialBtnRightFooter />
          </div>
        </section>
        <section>
          <hr />
          <h2 className=" mb-2.5 text-white text-center">
            Made with ❤ by Mattia
          </h2>
        </section>
      </div>
    </footer>
  );
}
