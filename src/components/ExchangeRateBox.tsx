import { BiTransferAlt } from "react-icons/bi";
import { FaFlagUsa } from "react-icons/fa";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";

const ExchnageRateBox = () => {
  const transfers = [
    { from: "Us Dollars", to: "Nigerian Naira" },
    { from: "Us Dollars", to: "Nigerian Naira" },
    { from: "Us Dollars", to: "Nigerian Naira" },
    { from: "Us Dollars", to: "Nigerian Naira" },
    { from: "Us Dollars", to: "Nigerian Naira" },
    { from: "Us Dollars", to: "Nigerian Naira" },
  ];
  return (
    <>
      <div
        className="border border-black rounded-lg p-3 w-auto  lg:w-[40%] space-y-3
    "
      >
      
        {transfers.map((transfer) => (
          <section className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <span className="rounded-full">
                <FaFlagUsa />
              </span>{" "}
              <span>{transfer.from} </span>
            </p>
            <span> <BiTransferAlt /> </span>

            <p className="flex items-center gap-1">
              <span className="rounded-full">
                <GiSouthAfricaFlag />
              </span>{" "}
             <span>{transfer.to} </span>
            </p>
            <IoMdArrowDropright />
          </section>
        ))}
      </div>
    </>
  );
};

export default ExchnageRateBox;
