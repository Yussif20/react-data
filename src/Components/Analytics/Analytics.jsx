import Laptop from "../../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a] uppercase">
            Data Analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            vero qui magni consequuntur doloribus odio accusamus reprehenderit
            corporis id aliquid quidem ad autem aperiam ut aut officia rerum
            nemo commodi.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md mx-auto bg-black py-3 my-6 font-medium md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
