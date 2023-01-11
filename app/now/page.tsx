'use client';

import { useState } from 'react';
import { UploadDropzone } from 'react-uploader';
import { Uploader } from 'uploader';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '../Footer';
import ResizablePanel from './ResizablePanel';

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
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
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

  const UploadDropZone = () => {
    return (
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
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-4 text-center">
        <Link href="/">
          <h1 className="max-w-4xl mx-auto mb-20 text-5xl font-bold tracking-normal font-display text-slate-900 sm:text-7xl">
            👵 Get
            <span className="relative whitespace-nowrap text-[#3290EE]">
              <span className="relative">Old</span>
            </span>
            .Me 👴
          </h1>
        </Link>
        <ResizablePanel>
          {!originalPhoto && <UploadDropZone />}
          {restoredImage && originalPhoto && (
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div>
                <h2 className="mb-1 text-lg font-medium">Original Photo</h2>
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="relative rounded-2xl"
                  width={475}
                  height={475}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h2 className="mb-1 text-lg font-medium">Restored Photo</h2>
                <a href={restoredImage} target="_blank" rel="noreferrer">
                  <Image
                    alt="restored photo"
                    src={restoredImage}
                    className="relative mt-2 cursor-zoom-in rounded-2xl sm:mt-0"
                    width={475}
                    height={475}
                    onLoadingComplete={() => setRestoredLoaded(true)}
                  />
                </a>
              </div>
            </div>
          )}
          {loading && (
            <button
              disabled
              className="w-40 px-4 pt-2 pb-3 mt-8 font-medium text-white bg-black rounded-full hover:bg-black/80"
            >
              <span className="pt-4">LOADING</span>
            </button>
          )}
          {error && (
            <div
              className="relative px-4 py-3 mt-8 text-red-700 bg-red-100 border border-red-400 rounded"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
}
