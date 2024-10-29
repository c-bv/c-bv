import { cn } from '@lib/utils';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { GradientBackground } from './gradient-background';
import { NoiseFilter } from './noisefilter';
import { ProfileImage } from './profile-image';

export const Layout = () => {
    return (
        <div className='min-h-screen bg-zinc-900 antialiased selection:bg-teal-600/90 selection:text-white'>
            <NoiseFilter />
            <div className='layout-sm relative z-10 grid gap-y-8 px-4 pt-12 text-emerald-200/90 xl:layout-xl xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3'>
                {/* {showNav && (
                    <div className='sticky top-6 z-50 flex flex-col items-center px-4'>
                        <div className='shadow-surface-glass flex w-full items-center justify-between rounded-2xl bg-gray-800/95 py-2 pl-2.5 pr-6 backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]'>
                            <div className='flex items-center space-x-6'>
                                <Link
                                    to='/'
                                    title='View home page'
                                    className='rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70'
                                >
                                    <ProfileImage size='small' isInteractive />
                                </Link>
                            </div>
                            <Navigation />
                        </div>
                    </div>
                )} */}
                <main
                    className={cn(
                        'container relative z-30 flex flex-col pt-24 text-base text-zinc-100/90 md:w-[45rem]',
                        {
                            // 'pt-24': !showNav,
                            // 'pt-48': showNav
                        }
                    )}
                >
                    {/* {!showNav && ( */}
                    <div
                        className={cn('opacity-100 transition duration-300', {
                            // 'opacity-0': showNav,
                            // 'opacity-100': !showNav
                        })}
                    >
                        <div className='flex items-center space-x-6'>
                            <ProfileImage size='large' isInteractive />
                            <div>
                                <h1 className='text-3xl font-medium text-teal-100/80 sm:text-4xl'>Charles</h1>
                                <div className='items-center space-y-2 sm:flex sm:space-x-2 sm:space-y-0'>
                                    {/* class="mt-2 items-center space-y-2 text-lg font-medium leading-none text-rose-100/50 lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2" */}
                                    <h2 className='whitespace-nowrap text-lg leading-6 text-teal-100/60'>
                                        Fullstack web developer at
                                    </h2>
                                    <div className='flex space-x-2'>
                                        <a
                                            className='group flex items-center space-x-1.5'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://holis-consulting.com/'
                                        >
                                            <div className='size-6 rounded-md bg-black text-white shadow-lg shadow-teal-900/60 ring-2 ring-teal-400/20 group-hover:shadow-xl group-hover:shadow-teal-700 group-hover:ring-teal-400/30 sm:mb-1'>
                                                <img src='/public/img/holisMinimized.png' />
                                            </div>
                                            <h2 className='text-teal-100/60 group-hover:text-teal-100/90'>
                                                Holis Consulting
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* )} */}
                    <Outlet />
                    <Footer />
                </main>
            </div>
            <GradientBackground />
        </div>
    );
};
