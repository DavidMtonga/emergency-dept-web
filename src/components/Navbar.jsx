import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsColumnsGap } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:8000/");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="top-0 fixed z-50 w-full bg-opacity-80 backdrop-blur bg-slate-950 text-white border-b border-slate-800">
      <nav className="flex w-full justify-between items-center relative px-4 md:px-10 py-5">
        {/* Logo */}
        <Link to={"/SignUp"} className=" font-extrabold text-xl">
          <p className=" flex font-extrabold text-blue-400 gap-2 text-xl p-3">
            <div className=" flex">
              <BsColumnsGap />
              S.O.S
            </div>
            <span className=" text-red-600 mr-3">Handler</span>
          </p>
        </Link>

        {/* Desk */}
        <div className="lg:flex gap-8 hidden font-semibold">
          <Link to={"/Home"} className="hover:text-[#00df9a] duration-300">
            Departments
          </Link>
          <span>
            <Link
              to={""}
              onClick={getdata}
              className="hover:text-[#00df9a] duration-300"
            >
              Help
            </Link>
          </span>
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            About
          </Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex">
          {/* Menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-2"
          >
            <div
              className={`h-1 w-8 duration-300 delay-200 rounded-full bg-white ${
                open ? "rotate-45 translate-y-[0.37em]" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-8 duration-300 delay-200 rounded-full bg-white ${
                open ? "-rotate-45 -translate-y-[0.37em]" : ""
              }`}
            ></div>
          </button>

          {/* Mobile Menu */}
          <motion.div
            animate={open ? { translateX: 0 } : { translateX: "100%" }}
            transition={{ type: "tween" }}
            className=" h-screen flex-col font-semibold flex p-4 pt-6 gap-4 bg-slate-950 w-2/3 absolute top-[100%] right-0"
          >
            <Link to={"/Home"} className="hover:text-[#00df9a] duration-300">
              Departments
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              Help
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              About
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              Contact
            </Link>
            <Link
              to={"/SignUp"}
              className="bg-[#00df9a] active:scale-95 duration-300 text-slate-950 w-fit px-4 py-2 rounded-full"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
