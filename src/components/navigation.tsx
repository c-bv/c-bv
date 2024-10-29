import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='flex items-center space-x-7 text-base font-semibold leading-none text-emerald-100/90'>
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
