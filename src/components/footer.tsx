import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer (){
return(
    <footer className="bg-black text-white md:flex md:text-start text-center md:justify-between h-56 ">
    <div className='flex flex-col md:ml-3'>
            <h1 className="text-7xl font-bold md:justify-start justify-center md:mt-3 md:mb-24">VOID</h1>
        <div className='md:flex md:justify-between grid grid-cols-1 space-x-3'>
            <h3 className='md:text-base text-sm md:my-0 my-5'>© 2035 by VOID. Powered and secured by <Link href={"/"} className='hover:underline'>RAYS Tech & Design</Link></h3>
      <div className='flex md:justify-between space-x-3'>
             <a href="https://github.com/yumnashaikh07" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="white" className='md:ml-[670px] ml-[150px]' />
            </a>
      
            <a href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="white" />
            </a>
            </div>
        </div>
    </div>
</footer>
)
}