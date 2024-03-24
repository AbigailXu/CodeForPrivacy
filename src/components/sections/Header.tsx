'use client';

import * as React from 'react';
import '@/lib/env';

export default function Header() {
  return (
    <main>
      <section>
        <div className='layout flex flex-col items-center justify-center text-center min-h-[85vh]'>
            <h1 className='mb-4 text-xxl'>Code For Privacy</h1>
            <p className='mt-2 text-ml text-gray-800'>
            A platform empowers developers with the tools, knowledge, and community support to improve privacy in AI development.
            </p>
        </div>
      </section>
    </main>
    
  );
}
