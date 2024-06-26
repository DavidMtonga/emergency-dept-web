import { Link } from "react-router-dom";
import { departments } from "../../constants/departments";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 py-24 justify-center items-center w-full px-4 md:px-10">
      <div className=" text-center grid gap-4">
        <h1 className="md:text-5xl text-2xl font-bold">Departments</h1>
        <p className=" text-sm md:max-w-xl max-w-sm">
          The health, police, and fire departments are dedicated to ensuring
          community safety. With a commitment to swift and compassionate care,
          law enforcement, and emergency response, these essential services
          prioritize your well-being, providing reassurance that capable hands
          are ready to respond in times of crisis.
        </p>
      </div>
      <div className=" w-full flex justify-evenly gap-8 md:flex-row flex-col items-center p-4 md:px-10">
        {departments.map((item, i) => (
          <div
            key={i}
            className=" flex bg-white flex-col text-center justify-center gap-4 items-center md:w-fit w-full rounded-3xl border p-4 shadow-md  "
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
            <Link
              to={item.link}
              className=" bg-slate-950 text-white hover:text-slate-950 hover:bg-[#00df9a] px-4 py-2 duration-300 shadow-md rounded-full"
            >
              Select Department
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
