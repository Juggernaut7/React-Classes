import React from 'react';
import Heading from '../components/Heading';
import WorkComponent from '../components/WorkComponent';
import { WorkComponentData, Moving } from '../Data/Constants';
import Packages from '../components/Packages';

const Home = () => {
  return (
    <section
      className="bg-primary min-h-screen text-white flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24 transition-all duration-300 ease-in-out"
      role="main"
      aria-label="Home page content"
    >
      <header className="flex flex-col gap-4 sm:gap-6 max-w-7xl mx-auto">
        <Heading>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            A{' '}
              turn-key approach
            {' '}
            to continuous user discovery
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-3 sm:mt-4 max-w-3xl leading-relaxed">
            We help you discover your users and build a product that will truly delight them. Whether you're starting from scratch or scaling up — we've got you.
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
              How we work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {WorkComponentData.map((item, index) => (
                <WorkComponent
                  key={index}
                  {...item}
                  className="hover:none sm:hover:scale-105 transform transition duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </Heading>
      </header>

      <div className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">
          Let's get{' '}
            moving
          
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {Moving.map((item, index) => (
            <Packages
              key={index}
              {...item}
              index={index}
              className="hover:none sm:hover:scale-105 transform transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;