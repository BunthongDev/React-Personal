import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
  return (
  <div className="help-layout p-8 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg space-y-6">
  <h2 className="text-3xl font-bold text-gray-800">Website Help</h2>
  <p className="text-gray-700 text-base leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque suscipit magni quas nobis ducimus natus necessitatibus incidunt, fugit aspernatur neque? Ad sequi neque adipisci quo nisi obcaecati debitis sapiente.
  </p>
  <nav className="text-lg text-pink-600 m-5 p-2 bg-pink-50 rounded-lg shadow-inner">
    <NavLink to="faq" className="hover:underline mr-6">FAQ</NavLink>
    <NavLink to="contact" className="hover:underline">Contact Us</NavLink>
  </nav>

  <Outlet />
</div>

  );
}
