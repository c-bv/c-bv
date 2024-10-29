import { Link } from 'react-router-dom';

import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from '@lib/constants';
import { cn } from '@lib/utils';

export const Footer = () => {
    return (
        <div className='mt-36 pb-36 text-base'>
            <div className='text-gray-500'>
                <div className='flex flex-col justify-between font-medium lg:flex-row'>
                    <div className='flex space-x-5'>
                        <Link to='/contact' className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>
                            Contact
                        </Link>
                        <a
                            href='https://open.spotify.com/user/kabz_b?si=566151fa23e64aad'
                            target='_blank'
                            rel='noreferrer'
                            className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                        >
                            Music
                        </a>
                        <a
                            href='https://www.linkedin.com/in/charlesbouveret'
                            target='_blank'
                            rel='noreferrer'
                            className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                        >
                            LinkedIn
                        </a>
                        <a
                            href='https://github.com/c-bv'
                            target='_blank'
                            rel='noreferrer'
                            className={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
