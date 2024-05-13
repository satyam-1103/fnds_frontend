import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import WorkingFlow from "@/sections/workingFlow";
import Awareness from "@/sections/awareness";

const Home = () => {
  return (
    <main className="flex flex-col md:flex md:px-16 justify-between items-start px-8 py-4 mt-8  ">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 md:justify-between items-center justify-center h-full w-full ">
        <Image
          src="/images/news.svg"
          alt="news image"
          width={100}
          height={100}
          className="w-full h-[240px] md:h-auto md:rounded-full md:p-8   rounded-lg p-4 bg-dark-1 lg:w-96 lg:h-96"
        />
        <div className="mt-8 px-5 flex flex-col md:gap-4 items-between gap-2 justify-start">
          <h2 className="text-gray-700 text-2xl font-extrabold md:text-4xl lg:text-6xl ">
            Are you afraid of fake news?
          </h2>
          <p className="text-gray-400  text-md md:text-xl lg:text-xl">
            Our application uses machine learning algorithms to combat fake
            news. Join us to gain confidence in navigating the digital landscape
            and contribute to promoting truth in media. Together, we can make a
            real difference in countering the spread of fake news.
          </p>

          <Button
            size="lg"
            className="bg-primary-blue w-36 text-white font-bold "
          >
            Join us
          </Button>
        </div>
      </div>

      <div className="w-full h-full mt-8 md:mt-16 lg:mt-20">
        <WorkingFlow />
      </div>

      <div className="w-full h-full mt-8 rounded-xl border-2 border-gray-150">
        <Awareness />
      </div>
    </main>
  );
};

export default Home;
