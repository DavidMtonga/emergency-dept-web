import Typed from "react-typed";
const Hero = () => {
  return (
    <main className="bg-slate-950 text-white p-4 md:px-10 flex flex-col justify-center items-center py-24">
      <div className=" min-h-screen items-center justify-center grid gap-8 lg:grid-cols-2 grid-cols-1 w-full">
        <div className=" text-center md:text-left">
          <h1 className=" md:text-5xl text-[#00df9a] sm:text-4xl text-xl font-bold">
            EMERGENCY <span className="text-white">HELP DEPARTMENTS</span>
          </h1>
          <Typed
            className=" md:text-5xl text-[#00df9a] sm:text-4xl text-xl font-bold"
            strings={["POLICE", "FIRE", "HEALTH"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className=" text-sm mt-4">
            The proposed mobile app for the fire department serves as a crucial
            lifeline for our community, offering rapid and efficient access to
            emergency services with the simple touch of a button. By seamlessly
            connecting users to the emergency department, it empowers citizens
            to swiftly summon assistance during critical situations, such as
            fires, accidents, or medical emergencies, ensuring timely responses
            that can be the difference between life and death.
          </p>
        </div>
        <div className="relative rounded-xl">
          <img
            src="/src/assets/hero.jpg"
            alt="hero"
            loading="lazy"
            className="w-full object-cover h-[80vh] rounded-xl"
          />
          <p className=" absolute bottom-0 rounded-b-xl bg-[#00df9a] text-slate-950 lg:text-left text-center p-4 text-sm">
            Moreover, the app&#39;s integration of location services ensures
            that responders can pinpoint the caller&#39;s exact position,
            further expediting their arrival and potentially reducing response
            times. In this way, this app not only promotes community safety but
            also instills a sense of security, knowing that help is readily
            available when needed most.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Hero
