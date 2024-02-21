const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-white text-black-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-black font-bold font-bol inline border-b-4 border-lime-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-black">
            <p>Hi. I'm Youssef, nice to meet you.please take a look around.</p>
          </div>
          <div className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et maiores
            impedit hic iste porro quia minima. Minus officia a nam dolorem
            quasi cumque qui optio nemo, autem dolorum id iste, ipsa, eos
            dignissimos vel officiis rem neque accusamus porro facilis voluptas
            sint tenetur! Nam tenetur asperiores reiciendis aliquid saepe
            veritatis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
