import Image from "next/image";
import React from "react";
import image from "@/public/images/knowledge.svg";
const Awareness = () => {
  return (
    <section className="flex flex-col w-full md:flex-row lg:flex-row py-4 px-8">
      <div className="">
        <Image src={image} alt="Image" height={256} width={256} />
      </div>

      <div className="gap-2 mt-8">
        <h2 className="text-gray-700 text-2xl font-extrabold ">
          Things to Remember
        </h2>

        <p className="font-light text-gray-500">
          We use machine learning algorithms to analyze the text whether the
          text is fake or real. It is possible that the results may not be
          accurate. Therefore we do not guarantee that the prediction is always
          accurate. Please check all the other sources for correctness.
        </p>
      </div>
    </section>
  );
};

export default Awareness;
