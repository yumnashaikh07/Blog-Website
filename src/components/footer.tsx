import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer (){
return(
    <footer className="bg-black text-white md:flex md:justify-between h-56 ">
    <div className='flex flex-col ml-3'>
            <h1 className="text-7xl font-bold md:mt-3 md:mb-24">VOID</h1>
        <div className='md:flex md:justify-between space-x-3'>
            <h3>© 2035 by VOID. Powered and secured by <Link href={"/"} className='hover:underline'>RAYS Tech & Design</Link></h3>
      
             <a href="https://github.com/yumnashaikh07" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="white" className='ml-[670px]' />
            </a>
      
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="white" />
            </a>
        </div>
    </div>
</footer>
)
}