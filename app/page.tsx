import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-10 text-center">
        <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-normal font-display text-slate-900 sm:text-7xl">
          👵 Get
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <span className="relative">Old</span>
          </span>
          .Me 👴
        </h1>
        <p className="max-w-xl mx-auto mt-12 text-lg leading-7 text-slate-700">
          80 years old you with the power of AI. <br />
          Upload a photo and check out how you will look.
        </p>
        <Link
          className="px-4 py-2 mt-8 font-medium text-white bg-black rounded-full hover:bg-black/80 sm:mt-10"
          href="/now"
        >
          Check it out
        </Link>
        <div className="flex flex-col items-center justify-between w-full mt-6 sm:mt-10">
          <div className="flex flex-col mt-4 space-y-10"></div>
          <div className="flex flex-col mt-4 space-y-10">
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div>
                <h2 className="mb-1 text-lg font-medium">Original photo</h2>
                <Image
                  alt="Original Photo"
                  src="/child.jpeg"
                  className="h-80 w-80 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h2 className="mb-1 text-lg font-medium">
                  80 years later photo
                </h2>
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
            This person was generated through thispersondoesnotexist.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
