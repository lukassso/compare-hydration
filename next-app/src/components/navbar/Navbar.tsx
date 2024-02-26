"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuIcon, setIcon] = useState <boolean>(false);

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <header className='bg-white text-[#039de1] w-full ease-in duration-300 fixed top-0 z-10'>
      <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
        <div>
          <Link href='/'>
            <span className='text-3xl font-bold font-extrabold'>Next Qwik</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
