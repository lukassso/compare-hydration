'use client';

import Link from 'next/link';

import Button from '../buttons/Button';
import { ToggleMenu } from '../navbar/ToggleMenu';

export default function Navbar() {
  return (
    <header className='bg-white text-[#039de1] w-full ease-in duration-300 fixed top-0 z-10'>
      <nav className='max-w-[1366px] mx-auto h-[60px] flex justify-between items-center p-3'>
        <div>
          <Link href='/'>
            <span className='text-3xl font-extrabold'>Next</span>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='hidden pr-12 md:flex font-semibold text-1xl lg:text-[20px] text-slate-800'>
            <li className='mr-4 lg:mr-8 hover:text-black'>
              <Link href='/'>Pages</Link>
            </li>
            <li className='mr-4 lg:mr-8 hover:text-black'>
              <Link href='/terms'>Terms</Link>
            </li>
          </ul>
          <Button className='hidden md:flex'>Download</Button>
        </div>
        <ToggleMenu />
      </nav>
    </header>
  );
}
