import { NG, US } from "country-flag-icons/react/1x1";
import { BiTransferAlt } from "react-icons/bi";

const SinglePairConversionBox = () => {
  return (
    <>
      {" "}
      <section className="border border-white rounded-lg space-y-3 p-4 min-w-[300px] ">
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
        <div className=" text-white space-y-2 ">
          {[1, 2, 3, 4, 5].map(() => (
            <p className="flex items-center justify-between">
       
              <span>$1</span>
              <span>
                <BiTransferAlt />
              </span>
              <span>N1170.80</span>{" "}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default SinglePairConversionBox;
