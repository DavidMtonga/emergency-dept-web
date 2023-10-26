import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className="top-0 fixed z-50 w-full bg-opacity-80 backdrop-blur bg-slate-950 text-white border-b border-slate-800">
      <nav className="flex w-full justify-between relative px-4 md:px-10 py-5">
        <Link to={"/home"} className=" font-extrabold text-xl">
          Logo
        </Link>
        <div className="lg:flex gap-4 hidden">
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            Departments
          </Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            Help
          </Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            link1
          </Link>
          <Link to={""} className="hover:text-[#00df9a] duration-300">
            link1
          </Link>
        </div>
        <div className="lg:hidden flex">
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-2">
            <div className="h-1 w-8 rounded-full bg-white"></div>
            <div className="h-1 w-8 rounded-full bg-white"></div>
          </button>
          <motion.div animate={open?{translateX:0}:{translateX:"100%"}} transition={{type:"tween"}} className=" h-screen flex-col flex p-4 pt-6 gap-4 bg-slate-950 w-2/3 absolute top-[100%] right-0">
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              Departments
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              Help
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              link1
            </Link>
            <Link to={""} className="hover:text-[#00df9a] duration-300">
              link1
            </Link>
            <Link to={""} className="bg-[#00df9a] text-slate-950 w-fit px-4 py-2 rounded-full">Login</Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
