import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 border-2'>
            <ul className='flex justify-center gap-10'>
                <NavLink><li>Home</li></NavLink>
                <NavLink><li>Items</li></NavLink>
                <NavLink to={`/additems`}><li>Add Item</li></NavLink>
                <NavLink><li>Update Item</li></NavLink>
            </ul>
        </div>
    );
};

export default Navbar;