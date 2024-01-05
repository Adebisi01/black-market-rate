import {
  BoxAdvert,
  CalculateRateBox,
  MutiplePairConversion,
  SinglePairConversionBox,
} from "../components";
import PartnersBox from "../components/PartnersBox";


const BrowseAllCurrencies = () => {
  return (
    <>
      <div className=" bg-gray-950 min-w-full min-h-screen f">
        <section className=" text-white py-32 px-6 lg:px-24">
          <h6 className=" text-center text-base">
            Dollar to Naira black market rate today December 8, 2023, 09:30 pm
          </h6>
          <h1 className="text-center text-2xl lg:text-5xl font-bold">
            1 US Dollar = N1184.047 Nigeria Naira
          </h1>
        </section>
        <section className="bg-white p-10 gap-2 flex  justify-between flex-col items-center md:flex-row  ">
          <div className="flex-[2] flex flex-col items-center gap-3">
            <h1 className="text-3xl font-bold self-center text-center md:text-start ">
              Calculate the current rate of your money
            </h1>
            <CalculateRateBox />
          </div>
          <div className=" flex-1 space-y-3 justify-end">
            <BoxAdvert />
            <BoxAdvert />
          </div>
        </section>
        <section className="text-white">
          <section className=" p-20 px-6 md:px-60 space-y-6">
            <h2 className=" text-2xl md:text-3xl text-center font-bold ">
              Our recommended money exchange partners
            </h2>
            <p className="text-center">
              As at today 8th of December, 2023, dollar to naira black market
              rate is 1 US dollar equivalent to N1170.80 Nigeria naira, but you
              need to know that the black market rate varies by company buying
              or selling it.
            </p>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center px-2 w-full gap-y-4 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <PartnersBox />
            ))}
          </section>
        </section>
        <div className="text-white">
          <section className="p-2 text-center space-y-3">
            <h1 className="font-bold text-3xl">
              US Dollar & Nigeria Naira Conversion table
            </h1>
            <small>
              This conversion table represent the value of one currency in terms
              of another.
            </small>
          </section>
          <section className="flex flex-col sm:flex-row items-center gap-2 justify-evenly py-4 ">
            <SinglePairConversionBox />
            <SinglePairConversionBox />
          </section>
        </div>
        <div className="flex flex-col items-center gap-2 justify-evenly py-4 text-white ">
          <section className="p-2 text-center space-y-3">
            <h1 className="font-bold text-3xl text-center p-2">
              Check out other countries exchange rate to US Dollar
            </h1>

            <small className="p-2">
              This conversion table represent the value of one currency in terms
              of another.
            </small>
          </section>
          <section className="flex flex-col sm:flex-row items-center gap-2 justify-evenly py-4 ">
            <MutiplePairConversion />
            <MutiplePairConversion />
          </section>
        </div>
      </div>
    </>
  );
};

export default BrowseAllCurrencies;
