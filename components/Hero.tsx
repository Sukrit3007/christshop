import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-inherit">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-12 sm:px-6 md:flex-row md:py-16 lg:px-8">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mb-4 text-base sm:mb-8 sm:text-lg">
            Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.
          </p>
          <button className="mb-8 transform rounded-3xl bg-white px-4 py-2 text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:text-white sm:mb-12">
            <Link href="/search">Shop Now</Link>
          </button>
          <div className="flex flex-col items-center justify-start gap-6 sm:flex-row">
            <div className="mb-4 text-center sm:mb-0">
              <p className="text-xl font-bold sm:text-3xl">30,000+</p>
              <p className="text-base sm:text-lg">Happy Customers</p>
            </div>
            <div className="my-4 border-b border-gray-300 sm:my-0" />
            <div className="mb-4 text-center sm:mb-0">
              <p className="text-xl font-bold sm:text-3xl">2,000+</p>
              <p className="text-base sm:text-lg">High-Quality Products</p>
            </div>
            <div className="my-4 border-b border-gray-300 sm:my-0" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero.png"
            alt="Fashion models"
            className="h-auto w-full object-cover"
            width={400}
            height={400}
            style={{
              aspectRatio: '400/400',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
