'use client';

import { useState } from 'react';
import { UploadDropzone } from 'react-uploader';
import { Uploader } from 'uploader';
import Link from 'next/link';

import Footer from '@/components/Footer';
import ResizablePanel from '@/components/ResizablePanel';

const uploader = Uploader({ apiKey: 'free' });
const options = {
  maxFileCount: 1,
  mimeTypes: ['image/jpeg', 'image/png', 'image/jpg'],
  editor: { images: { crop: false } },
  styles: { colors: { primary: '#000' } },
};

export default function Page() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  //   const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  //   const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto);
    }
    setLoading(false);
  }

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl);
          generatePhoto(file[0].fileUrl);
        }
      }}
      width="645px"
      height="320px"
    />
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <main className="mt-4 flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <Link href="/">
          <h1 className="font-display mx-auto mb-20 max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
            👵 Get
            <span className="relative whitespace-nowrap text-[#3290EE]">
              <span className="relative">Old</span>
            </span>
            .Me 👴
          </h1>
        </Link>
        <ResizablePanel>{!originalPhoto && <UploadDropZone />}</ResizablePanel>
      </main>
      <Footer />
    </div>
  );
}
