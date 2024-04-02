import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 border-2'>
            <ul className='flex justify-center gap-10'>
                <NavLink><li>Home</li></NavLink>
                <NavLink to={`/items`}><li>Items</li></NavLink>
                <NavLink to={`/additems`}><li>Add Item</li></NavLink>
                <NavLink><li>Update Item</li></NavLink>
                <NavLink to={`/usersInfo`}><li>Users</li></NavLink>
                <NavLink to={`/addUser`}><li>Add Users</li></NavLink>

            </ul>
        </div>
    );
};

export default Navbar;