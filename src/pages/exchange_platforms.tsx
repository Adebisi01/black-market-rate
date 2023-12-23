import { PartnersBox } from "../components"


const ExchangePlatforms = () => {
  return (
    <>
    <div className=" text-center text-white pt-8 px-10 space-y-6 ">


    <h1 className="text-3xl font-bold">20+ Best platforms to exchange Currency in Africa</h1>
    <p className="px">Discover over different currency exchange platforms in Africa hat you can use to exchange US dollar, GBP, etc.</p>
    </div>
    <div className=" py-20">

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center px-2 w-full gap-y-4 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map(() => (
              <PartnersBox />
            ))}
          </section>
    </div>
    </>
  )
}

export default ExchangePlatforms