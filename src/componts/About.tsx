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
            <p>Nice to meet you! Take a look around😊</p>
          </div>
          <div className="text-black italic">
            <p>
              Hey there! I'm a recent graduate from SVU, class of 2024, based in
              the lively city of Hamilton, Ontario.
              <p>
                I'm a software enthusiast who loves creating attractive websites
                that look great and work well.
              </p>
            </p>
            <p>
              When I'm not busy coding, you'll often find me enjoying my
              hobbies. I like to stay updated on the newest technologies and
              read whenever I can.
            </p>
            <p>
              Away from the computer, I try out new recipes, and explore
              different restaurants in the area.
            </p>
            <p>
              I have big dreams for the future. I believe in setting high goals
              and working hard to achieve them.
            </p>
            <p>
              Come along with me as I pursue excellence and chase after my
              dreams, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
