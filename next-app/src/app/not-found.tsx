import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className="flex items-center p-16 h-[calc(100vh - 72px)]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-bold text-9xl text-primary">
            <span className="sr-only">Error</span>
            <span>404</span>
          </h2>
          <p className="text-3xl font-medium md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 text-lg text-muted">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a rel="noopener noreferrer" href="/" className="btn">
            Back to home
          </a>
        </div>
      </div>
    </section>
    </main>
  );
}
