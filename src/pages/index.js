import Image from "next/image";
import { Inter } from "next/font/google";
import { events } from "@/constants/data";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { CiMapPin } from "react-icons/ci";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 md:p-8 lg:p-10 `}
    >
      <Banner />
      <Grid />
    </main>
  );
}

const Grid = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <h2 className=" text-center font-semibold text-blue-700 text-xl md:text-3xl">
        TODOS LOS EVENTOS
      </h2>
      <div className=" w-full mt-4">
        <p className=" text-center text-gray-600 font-light t">
          Consulta los eventos próximos que tenemos para ti:
        </p>
      </div>
      <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        {events.map((e) => (
          <div className="  shadow-lg rounded-md relative flex flex-col">
            <div
              style={{ left: "10%" }}
              className=" absolute top-0 text-white p-3 -translate-x-1/4 flex flex-col justify-center items-center font-black text-2xl  gap-1 rounded-b-md bg-gradient-to-t from-red-800 to-red-600"
            >
              <div>{e.date}</div>
              <div>{e.month}</div>
            </div>
            <div className=" w-full">
              <Image
                width={300}
                height={300}
                src={e.image}
                className=" w-full rounded-md"
              />
            </div>
            <div className=" p-3 relative">
              <div className=" absolute -top-4 w-full flex justify-center">
                <div className=" bg-blue-600 text-white text-sm  font-bold px-4 py-1 gap-2 flex justify-center items-center rounded-full">
                  <CiMapPin />
                  {e.headerTitle}
                </div>
              </div>
              <div className=" mt-4">
                <div>
                  <h3 className=" text-center text-lg font-semibold">
                    {e.title}
                  </h3>
                </div>
                <div className=" inline-flex items-center gap-3 mt-6 text-gray-700 text-sm">
                  <div className=" inline-flex gap-2 items-center">
                    <FaRegClock />
                    <span>{e.hour}</span>
                  </div>
                  <div className=" inline-flex gap-2 items-center">
                    <LuMapPin />
                    <span>{e.location}</span>
                  </div>
                </div>
                <div className=" mb-4 mt-2">
                  <p className=" text-sm">
                    <span className=" text-gray-800 font-semibold">
                      Clasificación del evento:
                    </span>
                    {e.clasifitacion}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-end flex-1 w-full">
              <div className="   cursor-pointer hover:bg-blue-700 transition duration-300 w-full p-2 rounded-b-md bg-blue-600 flex justify-center text-white font-medium">
                <span>Ver boletos</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className=" max-w-7xl w-full mx-auto mb-20">
      <div
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
        className=" w-full rounded-md"
      >
        <div className=" h-full w-full  grid grid-cols-12  ">
          <div className=" col-span-7 p-4  h-full w-full">
            <div className="flex flex-col justify-center items-center h-full w-full max-w-md mx-auto">
              <Image
                width={400}
                height={400}
                className=" w-full "
                src="/assets/bannerLeft.png"
              />
              <Image
                width={400}
                height={400}
                className=" w-full"
                src="/assets/bannerLeft2.png"
              />
            </div>
          </div>
          <div className=" col-span-5 h-full  w-full ">
            <div className="w-full h-full flex flex-col justify-end">
              <Image
                width={400}
                height={400}
                className="  "
                src="/assets/man2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
