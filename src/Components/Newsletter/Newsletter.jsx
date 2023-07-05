function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3 p-2">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-4">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up for our Newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="rounded-md p-3 flex text-black w-full"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto text-black py-3 my-6 font-medium ml-4">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
