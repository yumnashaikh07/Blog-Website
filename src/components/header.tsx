import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {AlignJustifyIcon } from 'lucide-react';
  import Link from "next/link";
  
export default function Header(){
    return(
        <header className="flex  justify-between md:p-10 items-center">
<Button className="bg-white rounded-none border-black text-black px-11 py-5 hover:bg-black hover:text-white border-[1px] md:flex hidden"><Link href={"/"}>Subscribe</Link></Button>
<h1 className="text-7xl text-black md:ml-0 ml-[107px] font-bold">VOID</h1>
<Sheet >
  <SheetTrigger><h1 className="md:flex hidden text-5xl font-bold  text-black">Menu</h1><AlignJustifyIcon className="md:hidden flex mr-3 text-black" size={28}/></SheetTrigger>
  <SheetContent>
<nav className="text-black text-3xl text-center font-semibold">
    <ul className="space-y-5  ">
        <li className=" hover:text-red-700 mt-24"><Link href={"/"} >Home</Link></li>
        <li className=" hover:text-red-700"><Link href={"/about"}>About</Link></li>
        <li className=" hover:text-red-700"><Link href={"/about#contact"} >Contact</Link></li>
        <li className=" hover:text-red-700"><Link href={"/blog"}>Blog</Link></li>
    </ul>
</nav>
  </SheetContent>
</Sheet>


        </header>
    )
}