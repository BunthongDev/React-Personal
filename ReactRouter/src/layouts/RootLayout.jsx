import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className='text-3xl mb-2 '>Job Router</h1>
          <NavLink className='mr-5 bg-blue-500 p-2 rounded-md' to="/">Home</NavLink>
          <NavLink className='mr-5 bg-blue-500 p-2 rounded-md' to="/about">About</NavLink>
          <NavLink className='mr-5 bg-blue-500 p-2 rounded-md' to="/help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
    </div>
  );
}
