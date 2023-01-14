import Image from 'next/image';
import Link from 'next/link';

import Footer from './Footer';
import Header from './Header';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Header />
      <main className="flex flex-col items-center flex-1 w-full px-4 mt-4 text-center">
        <p className="max-w-xl mx-auto mt-12 text-lg leading-7 text-slate-700">
          80 years old you with the power of AI. <br />
          Upload a photo and check out how you will look.
        </p>
        <Link
          className="mt-8 inline-flex items-center rounded-md border border-transparent bg-[#e1a416] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#e1a416] focus:outline-none focus:ring-2 focus:ring-[#e1a416] focus:ring-offset-2"
          href="/now"
        >
          Check it now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-3 -mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>

        <div className="flex flex-col items-center justify-between w-full mt-6 sm:mt-10">
          <div className="flex flex-col mt-4 space-y-10"></div>
          <div className="flex flex-col mt-4 space-y-10">
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div>
                <h2 className="mb-1 text-lg font-medium">Original</h2>
                <Image
                  alt="Original Photo"
                  src="/child.jpeg"
                  className="h-80 w-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h2 className="mb-1 text-lg font-medium">80 years later</h2>
                <Image
                  alt="80 years later photo"
                  width={320}
                  height={320}
                  src="/old.png"
                  className="mt-2 h-80 w-80 rounded-2xl sm:mt-0"
                />
              </div>
            </div>
          </div>
          <p className="mt-2 mb-10 text-xs text-gray-500">
            The original photo was generated through thispersondoesnotexist.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
