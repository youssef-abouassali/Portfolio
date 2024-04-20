import blacklue from "../assets/blacklue.png";
import food from "../assets/food-project.jpg";

const data = [
  { image: blacklue, name: "Blacklue", demoLink: "/", codeLink: "/" },
  { image: food, name: "Coming soon...", demoLink: "/", codeLink: "/" },
];

const Work = () => {
  return (
    <div id="work" className="w-full md:h-screen text-gray 300 bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-blue-600 border-lime-500 ">
            Projects
          </p>
          <p className="py-6 text-black ">
            Check out some of my recent projects
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {data.map((item) => (
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider flex justify-center items-center">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.demoLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={item.codeLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
