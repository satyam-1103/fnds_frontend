import ProcessCarousel from "@/components/ProcessCarousel";
import React from "react";

const WorkingFlow = () => {
  return (
    <section className="px-16 py-4 flex flex-col bg-grey-1 rounded-lg shadow-dark-2 md:rounded-xl">
      <div className="flex flex-col">
        <h2 className="text-gray-700 text-2xl font-extrabold text-center">
          How to proceed?
        </h2>

        <ProcessCarousel />
      </div>
    </section>
  );
};

export default WorkingFlow;
