'use client';

import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Terms',
};

export default function Terms(){
  <main>
  <section className='flex items-center p-16 h-[calc(100vh - 72px)]'>
    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <div className='max-w-md text-center'>
        <h2 className='mb-8 font-bold text-9xl text-primary'>
          <span className='sr-only'>Terms</span>
        </h2>
      </div>
    </div>
  </section>
</main>;
}
