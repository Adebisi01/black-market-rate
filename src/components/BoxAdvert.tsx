import { MdStar } from "react-icons/md";

const BoxAdvert = () => {
  return (
    <>
      <div className=" p-4 bg-[#5CC38F26] flex flex-col gap-3 rounded-lg max-w-xs ">
        <h1 className="text-sm break-words font-semibold">
          Exchange your dollar to Naira at better rate on Grey.co
        </h1>
        <small className="text-xs ">
          Currently Grey.co provide the best exchange rate in Nigeria. Exchange
          your dollar on{" "}
          <a href="#" className="underline">
            {" "}
            Grey.co here
          </a>
        </small>
        <p className="flex items-center gap-2">
          <small>4.2 rating</small>{" "}
          <span className="flex items-center ">
            {[1, 2, 3, 4, 5].map(() => (
              <MdStar className="text-yellow-300" />
            ))}
          </span>
        </p>
      </div>
    </>
  );
};

export default BoxAdvert;
