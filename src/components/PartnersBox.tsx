import { MdOutlineFlutterDash, MdOutlineStar } from "react-icons/md";

const PartnersBox = () => {
  return (
    <>
      <div className=" rounded-xl p-4 bg-[#363434] flex flex-col gap-2 w-60 h-56
      ">
        <section className="flex items-center gap-2">
          
          <MdOutlineFlutterDash className='bg-red-600 text-xl rounded-full border border-white ' /> <span>FlutterWave</span>
        </section>
        <p className="text-xs font-thin  ">Make payment with ease with Flutterwave Virtual card</p>
        <section></section>
        <p className="flex items-center gap-0.1">
          {[1, 2, 3, 4, 5].map(() => (
            <MdOutlineStar />
          ))}
        </p>
        <p className="text-xs font-thin">4.2 Rating</p>
        <button className="bg-white rounded-lg self-center text-[#363434] text-sm p-1 w-full mt-2">Visit Website</button>
      </div>
    </>
  );
};

export default PartnersBox;
