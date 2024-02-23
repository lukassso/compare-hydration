'use client';

import clsx from 'clsx';
import React from 'react';


type Color = (typeof colorList)[number];

export default function ComponentPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }


  return (
    <main>
      <section
        className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}
      >
        <div
          className={clsx(
            'layout min-h-screen py-20',
            mode === 'dark' ? 'text-white' : 'text-black'
          )}
        >
        only a test
        </div>
      </section>
    </main>
  );
}
