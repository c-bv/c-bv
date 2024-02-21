import { Transition } from '@headlessui/react';
import { cx } from 'class-variance-authority';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { GradientBackground } from './gradient-background';
import { Navigation } from './navigation';
import { NoiseFilter } from './noisefilter';
import { ProfileImage } from './profile-image';

export const Layout = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='min-h-screen bg-zinc-900 antialiased selection:bg-teal-600/90 selection:text-white'>
            <button
                className='fixed right-6 top-6 z-50 rounded-full bg-teal-500/90 p-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70'
                onClick={() => setShowNav(!showNav)}
                title='Toggle navigation'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-8 w-8 text-zinc-100/90'
                    fill='currentColor'
                >
                    {showNav ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16m-7 6h7' />}
                </svg>
            </button>
            <NoiseFilter />
            <div className='pointer-events-none fixed top-6 z-30 flex w-full flex-col items-center px-4'>
                <Transition
                    className='shadow-surface-glass pointer-events-auto w-full max-w-[40rem] rounded-2xl bg-gray-800/95 px-4 py-2.5 backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]'
                    show={showNav}
                    enter='transition duration-100 ease-in-out'
                    enterFrom='opacity-0 scale-90'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in-out'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-6'>
                            <Link
                                to='/'
                                title='View home page'
                                className='rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70'
                            >
                                <ProfileImage size='small' />
                            </Link>
                        </div>
                        <Navigation />
                    </div>
                </Transition>
            </div>
            <main className='container relative z-30 flex flex-col pt-48 text-base text-zinc-100/90 md:w-[45rem]'>
                {!showNav && (
                    <div
                        className={cx('transition duration-300', {
                            'opacity-0': showNav,
                            'opacity-100': !showNav
                        })}
                    >
                        <div className='flex items-center space-x-6'>
                            <ProfileImage size='large' />
                            <div>
                                
                                <h1 className='text-3xl font-medium text-teal-100/80 sm:text-4xl'>Charles</h1>
                                <h2 className='align-middle text-lg leading-6 text-teal-100/50'>
                                    Fullstack web developer
                                </h2>
                            </div>
                        </div>
                            <p className='mt-7 text-xl text-rose-100/90 sm:mt-9'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dolorum distinctio
                                vitae optio, velit at itaque? Ut expedita nobis, nihil error molestias officiis ullam
                                dolorem id minima? Ex, perferendis accusamus.
                            </p>
                    </div>
                )}
                <Outlet />
                <Footer />
            </main>
            <GradientBackground />
        </div>
    );
};
