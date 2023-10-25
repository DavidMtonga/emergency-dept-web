import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="top-0 fixed w-full bg-slate-950 text-white">
      <nav className="flex w-full justify-between px-4 md:px-10 py-5">
        <div>logo</div>
        <div className="flex gap-4">
          <Link>link1</Link>
          <Link>link1</Link>
          <Link>link1</Link>
          <Link>link1</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
