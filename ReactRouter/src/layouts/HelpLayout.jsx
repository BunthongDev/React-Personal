import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
    <div className='help-layout'> 
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque suscipit magni quas nobis ducimus natus necessitatibus incidunt, fugit aspernatur neque? Ad sequi neque adipisci quo nisi obcaecati debitis sapiente.</p>
      <nav className='text-lg text-pink-600 m-5 p-2'>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
