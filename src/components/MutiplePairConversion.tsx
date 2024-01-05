import { NG, US } from "country-flag-icons/react/1x1";

const MutiplePairConversion = () => {
  return (
    <>
      {" "}
      <section className="border border-white rounded-lg space-y-3 p-4 min-w-[300px] ">
        <div className=" text-white space-y-2 ">
          {[1, 2, 3, 4, 5].map(() => (
            <div className="flex items-center  text-white justify-between">
              <p className="flex items-center gap-1">
                <US title="United States" className="w-5 h-5 rounded-full" />
                <span>Us Dollars</span>
              </p>
              <p className="flex items-center gap-1">
                {" "}
                <NG title="Nigeria" className="w-5 h-5 rounded-full" />
                <span>Nigeria Naira</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MutiplePairConversion;
