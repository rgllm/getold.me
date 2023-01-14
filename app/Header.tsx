import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full px-2 mt-10 md:mt-40">
      <Link href="/" className="flex space-x-2">
        <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-normal font-display text-slate-900 md:text-7xl">
          👵 Get
          <span className="relative whitespace-nowrap text-[#e1a416]">
            <span className="relative">Old</span>
          </span>
          .Me 👴
        </h1>
      </Link>
    </header>
  );
}
