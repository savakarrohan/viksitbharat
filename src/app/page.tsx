import { Divider } from "@heroui/react";
import Image from "next/image";

import { menuItems } from "@/fixture/constants";

export default function Home() {
  return (
    <main>
      <section className="py-20" id="Home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-8xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-9xl [text-shadow:_0_4px_16px_rgb(0_0_0/_0.4)]">
                Viksit
                <span className="block text-orange-500">Bharat</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Viksit Bharath is a transformative initiative dedicated to
                building a developed and self-reliant India. It empowers
                communities, fosters innovation, and champions sustainable
                growth for a brighter, inclusive future
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"></div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <a href="#" target="_blank">
                <Image
                  className="dark:invert rounded-md "
                  src="https://picsum.photos/seed/picsum/2400/1400"
                  alt="Indian Flag logo"
                  width={2400}
                  height={900}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="py-20" id="Mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-8xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-9xl [text-shadow:_0_4px_16px_rgb(0_0_0/_0.4)]">
                Viksit
                <span className="block text-orange-500">Bharat</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Viksit Bharath is a transformative initiative dedicated to
                building a developed and self-reliant India. It empowers
                communities, fosters innovation, and champions sustainable
                growth for a brighter, inclusive future
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"></div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <a href="#" target="_blank">
                <Image
                  className="dark:invert rounded-md "
                  src="https://picsum.photos/seed/picsum/2400/1400"
                  alt="Indian Flag logo"
                  width={2400}
                  height={900}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
