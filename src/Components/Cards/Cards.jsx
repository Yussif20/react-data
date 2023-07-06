import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

function Cards() {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl rounded-lg p-4 flex flex-col my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem] "
            src={Single}
            alt="single user"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Single User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 Gb</p>
          </div>
          <button className=" bg-[#00df9a] w-[200px] rounded-md mx-auto text-black py-3 px-6 my-6 font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl rounded-lg p-4 flex flex-col my-8 md:my-0 hover:scale-105 duration-300 bg-gray-50">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem] bg-transparent "
            src={Double}
            alt="double user"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Double User</h2>
          <p className="font-bold text-4xl text-center">$250</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8 ">1Tb Storage</p>
            <p className="py-2 border-b mx-8 ">2 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 10 Gb</p>
          </div>
          <button className=" text-[#00df9a] w-[200px] rounded-md mx-auto bg-[#000300] py-3 px-6 my-6 font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl rounded-lg p-4 flex flex-col my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem] "
            src={Triple}
            alt="triple user"
          />
          <h2 className="text-2xl font-bold py-8 text-center">Triple User</h2>
          <p className="font-bold text-4xl text-center">$300</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8 ">2 TB Storage</p>
            <p className="py-2 border-b mx-8 ">3 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 20 Gb</p>
          </div>
          <button className=" bg-[#00df9a] w-[200px] rounded-md mx-auto text-black py-3 px-6 my-6 font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
