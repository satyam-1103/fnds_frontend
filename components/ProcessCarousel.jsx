import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { process } from "@/constants/process";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProcessCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {process.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center">
                

                <div className="flex flex-col gap-2  px-12 py-10">
                  {/* Image to be replace here */}
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="w-[72px] h-[72px] mx-auto "
                  />

                  <h4 className="font-bold text-center">{item.title}</h4>
                  <p className="font-light text-gray-500 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={cn("bg-primary-blue text-white font-semibold")}
        />
        <CarouselNext
          className={cn("bg-primary-blue text-white font-semibold")}
        />
      </Carousel>
    </div>
  );
};

export default ProcessCarousel;
