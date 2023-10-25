import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="top-0 fixed z-50 w-full bg-slate-950 text-white border-b border-slate-800">
      <nav className="flex w-full justify-between px-4 md:px-10 py-5">
        <Link to={'/home'} className=" font-extrabold text-xl">Logo</Link>
        <div className="flex gap-4">
          <Link to={""} className="hover:text-[#00df9a] duration-300">link1</Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">link1</Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">link1</Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">link1</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
