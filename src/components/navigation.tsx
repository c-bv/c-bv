import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='flex items-center space-x-7 text-base font-semibold leading-none text-rose-100/90'>
            <NavLink to='/' title='View home page'>
                Home
            </NavLink>
            <NavLink to='/about' title='View about page'>
                About
            </NavLink>
            <NavLink to='/blog' title='View blog page'>
                Blog
            </NavLink>
            <NavLink to='/contact' title='View contact page'>
                Contact
            </NavLink>
        </div>
    );
};
