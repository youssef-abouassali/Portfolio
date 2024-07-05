import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lime-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Youssef Abou Assali
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a front-end developer
        </h2>
        <p className="text-[#8892b0] font-bold  py-4 max-w-[700px]">
          <p>
            Welcome to my portfolio! I'm a passionate software developer with a
            focus on front-end technologies.
          </p>
          <p>
            My commitment to designing intuitive and user-friendly interfaces
            motivates me to consistently refine my skills, ensuring the delivery
            of refined projects.
          </p>
          As I embark on my journey in the world of software development, I am
          eager to collaborate, learn, and contribute to innovative projects.
        </p>
        <div>
          <button className="text-white group border-2 px-3 py-3 my-2 flex items-center hover: bg-lime-500 hover:border-blue-300">
            <Link to="work" smooth={true} duration={500}>
              Viwe Work  
            </Link>
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
