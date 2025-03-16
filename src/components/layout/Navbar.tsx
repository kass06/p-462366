import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="bg-[rgba(48,94,131,1)] w-full">
      <nav className="flex w-full flex-col items-center text-[32px] text-neutral-50 font-light justify-center px-[70px] py-[15px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[1636px] max-w-full items-stretch gap-5 flex-wrap justify-between">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9bdb45a4b0e14e9b9af9306aeed654a9/d4a643bbcd7275118ecec05c4fe92decbaa5954496eb3e91f1bf8b2e2f583b93?placeholderIfAbsent=true"
              className="aspect-[2.54] object-contain w-[322px] shrink-0 max-w-full"
              alt="Pixel Enchanters Logo"
            />
          </Link>
          <div className="flex items-center gap-[40px_72px] flex-wrap my-auto max-md:max-w-full">
            <Link
              to="/work"
              className={`self-stretch my-auto ${path === "/work" ? "underline" : ""}`}
            >
              Work
            </Link>
            <Link
              to="/services"
              className={`self-stretch basis-auto my-auto ${path === "/services" ? "underline" : ""}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`self-stretch my-auto ${path === "/about" ? "underline" : ""}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="bg-[rgba(205,203,192,1)] self-stretch text-[rgba(34,29,38,1)] px-6 py-2.5 rounded-[20px] max-md:px-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
