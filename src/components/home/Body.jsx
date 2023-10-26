import { Link } from "react-router-dom";
import { departments } from "../../constants/departments";

const Body = () => {
  return (
    <div className="mb-4 w-full flex justify-evenly p-4 md:px-10">
      {departments.map((item, i) => (
        <div
          key={i}
          className=" flex bg-white flex-col text-center justify-center items-center rounded-lg border p-2 shadow-md  "
        >
          <div className=" items-center justify-center w-full flex">
            <img
              className="rounded-full h-20"
              src={item.image}
              alt="police department"
              loading="lazy"
            />
          </div>
          <h1 className="text-xl text-gray-500">{item.name}</h1>
          <Link to={item.link}>Select Department</Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
