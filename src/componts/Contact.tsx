const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/Pe9qWBeL"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-lime-500 text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Dubmit the form below or shoot me an email -
            youssefassali61@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccf6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccf6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className="bg-[#ccf6f6] p-2 text-black"
          rows={5}
          placeholder="Message"
        />
        <button className="text-white border-4 hover:bg-lime-500 hover:border-lime-500 px-4 my-2 py-2 mx-auto  flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
