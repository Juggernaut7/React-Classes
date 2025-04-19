// Home.jsx
import React from 'react';
import Heading from '../components/Heading';
import WorkComponent from '../components/WorkComponent';
import { WorkComponentData, Moving } from '../Data/Constants';
import Packages from '../components/Packages';

const Home = () => {
    return (
        <section className="bg-primary min-h-screen text-white flex flex-col gap-10 px-6 py-16 md:px-20 md:py-24 transition-all duration-300 ease-in-out">
            <header className="flex flex-col gap-6 max-w-7xl mx-auto">
                <Heading>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        A{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient">
                            turn-key approach
                        </span>{' '}
                        to continuous user discovery
                    </h1>

                    <p className="text-base md:text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
                        We help you discover your users and build a product that will truly delight them. Whether you're starting from scratch or scaling up — we've got you.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            How we work
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {WorkComponentData.map((item, index) => (
                                <WorkComponent
                                    key={index}
                                    {...item}
                                    className="hover:scale-105 transform transition duration-300 ease-in-out"
                                />
                            ))}
                        </div>
                    </div>
                </Heading>
            </header>

            <div className='bg-black py-16 px-6 md:px-20'>
                <h1 className='text-center text-4xl md:text-5xl font-bold mb-12'>
                    Let's get <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient'>moving</span>
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Moving.map((item, index) => (
                        <Packages
                            key={index}
                            {...item}
                            index={index}
                            className="hover:scale-105 transform transition duration-300 ease-in-out"
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Home;
