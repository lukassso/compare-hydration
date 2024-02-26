'use client';

import Link from 'next/link';
import { useState } from 'react';

import Button from '../buttons/Button';

export default function Navbar() {
  const [menuIcon, setIcon] = useState<boolean>(false);

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <header className='bg-white text-[#039de1] w-full ease-in duration-300 fixed top-0 z-10'>
      <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
        <div>
          <Link href='/'>
            <span className='text-3xl font-extrabold'>Next Qwik</span>
          </Link>
        </div>
        <ul className='hidden md:flex font-semibold text-1xl lg:text-[20px] text-slate-800'>
          <li className='mr-4 lg:mr-8 hover:text-black'>
            <Link href='/home'>Pages</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-black'>
            <Link href='/terms'>Terms</Link>
          </li>
        </ul>
        <Button className="hidden md:flex">Download</Button>
      </nav>
    </header>
  );
}
