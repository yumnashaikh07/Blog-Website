"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useInvalidPaths from "@/lib/invalid-paths";
import { AlignJustifyIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const invalidPaths: boolean = useInvalidPaths();
  if (invalidPaths) return <></>;
  return (
    <header className="flex  justify-between md:p-10 items-center">
      <Button className=" border-black text-black hover:text-white  px-11 py-5 bg-white  hover:bg-black border-[1px] md:flex hidden">
        <Link href={"/"}>Subscribe</Link>
      </Button>
      <h1 className="text-7xl text-black md:ml-0 ml-[100px] font-bold">VOID</h1>
      <Sheet>
        <SheetTrigger>
          <h1 className="md:flex hidden text-5xl font-bold  text-black">
            Menu
          </h1>
          <AlignJustifyIcon
            className="md:hidden flex mr-3 text-black"
            size={28}
          />
        </SheetTrigger>
        <SheetContent>
          <h1 className="md:text-7xl text-center text-5xl text-black font-bold">
            VOID
          </h1>
          <p className="text-xl  font text-center">Stories About Design & Fashion</p>
          <nav className="text-black text-3xl text-center font-semibold">
            <ul className="space-y-3">
              <li className=" hover:text-red-700 mt-14">
                <Link href={"/"}>Home</Link>
              </li>
              <div className="border-b-gray-300 border-b-[1px] w-full"></div>
              <li className=" hover:text-red-700">
                <Link href={"/about"}>About</Link>
              </li>
              <div className="border-b-gray-300 border-b-[1px] w-full"></div>
              <li className=" hover:text-red-700">
                <Link href={"/about#contact"}>Contact</Link>
              </li>
              <div className="border-b-gray-300 border-b-[1px] w-full"></div>
              <li className=" hover:text-red-700">
                <Link href={"/blog"}>Blog</Link>
              </li>
              <div className="border-b-gray-300 border-b-[1px] w-full"></div>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
