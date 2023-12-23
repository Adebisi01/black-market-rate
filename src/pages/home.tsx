import ExchnageRateBox from "../components/ExchangeRateBox";
import NavBar from "../components/NavBar";
import PartnersBox from "../components/PartnersBox";

const home = () => {
  return (
    <>
      <div className=" bg-gray-950 min-w-full min-h-screen">
      

        <section className=" text-white py-32 px-6 lg:px-24">
          <h6 className=" text-center text-base">Black Market Rate</h6>
          <h1 className="text-center text-3xl lg:text-5xl font-bold">
            Discover black market rate of different countries as at current date
          </h1>
        </section>
        <section className="bg-white p-10 flex flex-col sm:flex-row gap-2  items-center justify-around">
          <ExchnageRateBox />
          <ExchnageRateBox />
        </section>
        <section className="text-white">
          <section className=" p-20 px-6 space-y-3 lg:px-60">
            <h2 className="text-3xl text-center font-bold ">
              Our recommended money exchange partners
            </h2>
            <p className="text-center">
              As at today 8th of December, 2023, dollar to naira black market
              rate is 1 US dollar equivalent to N1170.80 Nigeria naira, but you
              need to know that the black market rate varies by company buying
              or selling it.
            </p>
          </section>
          <section className=" py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center px-2 w-full gap-y-4 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() =>   <PartnersBox />)}
           
          </section>
        </section>
      </div>
    </>
  );
};

export default home;
