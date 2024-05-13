import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LuAlignJustify } from "react-icons/lu";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="bg-grey-1 flex items-center justify-between px-16 py-4">
      {/* Logo will be replaced here */}
      <div className="logo font-semibold">
        <p>FNDS</p>
      </div>

      {/* Navigation Menu Options */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-grey-1">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col py-8 mt-20 gap-4 items-start px-4 w-full text-black text-lg">
                  <Link href="/">Home</Link>
                  <Link href="application">Application</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navbar */}

      <div className="hidden md:flex md:gap-4  ">
        <Link href="/">Home</Link>
        <Link href="application">Application</Link>
        <Link href="#">About Us</Link>
      </div>
    </main>
  );
};

export default Navbar;
