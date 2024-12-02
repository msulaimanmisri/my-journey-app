// app/page.tsx
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Website</h1>
        <div className="grid gap-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p>Welcome to my website. This is the homepage content.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Add your content here */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}