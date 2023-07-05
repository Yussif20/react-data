import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="flex flex-col text-center mx-auto mt-[96px] w-full h-screen max-w-[800px]">
        <p className="uppercase text-[#00df9a] font-bold p-2 text-xl md:text-2xl ">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast,flexible financing for
          </p>
          <Typed
            className="sm:text-3xl md:text-4xl text-2xl font-bold text-[#00df9a] md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 text-l lg:text-xl  font-bold">
          Monitor your data analytics to increase revenue for BTB,BTC and SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto text-black py-3 my-6 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
