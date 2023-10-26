import { Link } from "react-router-dom";
import { departments } from "../../constants/departments";

const Body = () => {
  return (
    <div className="mb-4 w-full flex justify-evenly p-4 md:px-10">
      {departments.map((item,i)=>(
        <div key={i} className=" flex bg-white flex-col rounded-lg border p-2 shadow-md  ">
        <div className=" items-center justify-center w-full flex">
          <img
            className="rounded-full h-20"
            src={item.image}
            alt="police department"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-gray-500">{item.name} Department</h1>
          <Link to={item.link}>
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 bg-gray-800 hover:bg-slate-900">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Body;
