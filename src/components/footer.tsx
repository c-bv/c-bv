import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from '@lib/constants';
import { cn } from '@lib/utils';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='mt-36 pb-36 text-base'>
            <div className='text-gray-500'>
                <div className='flex flex-col justify-between font-medium lg:flex-row'>
                    <div className='flex space-x-5'>
                        <div>
                            <Link to='/videos' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                                Videos
                            </Link>
                        </div>

                        <div>
                            <Link to='/blog' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                                Posts
                            </Link>
                        </div>

                        <a
                            href='https://www.linkedin.com/in/charlesbouveret'
                            className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                        >
                            LinkedIn
                        </a>
                        <a href='https://github.com/c-bv' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <p className='mt-8 text-gray-600'>
                Built with{' '}
                <a href='https://nextjs.org' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                    Vite.js
                </a>
                ,{' '}
                <a href='https://mdxjs.com' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                    MDX
                </a>
                and{' '}
                <a href='https://tailwindcss.com' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                    Tailwind
                </a>{' '}
            </p>
        </div>
    );
};
