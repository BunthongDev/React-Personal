import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-blue-600 p-6 shadow-md">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold text-white mb-2">Job Router</h1>
        <div className="flex space-x-4">
          <NavLink 
            className="text-white bg-blue-500 hover:bg-blue-400 p-2 rounded-md transition duration-200" 
            to="/">Home</NavLink>
          <NavLink 
            className="text-white bg-blue-500 hover:bg-blue-400 p-2 rounded-md transition duration-200" 
            to="/about">About</NavLink>
          <NavLink 
            className="text-white bg-blue-500 hover:bg-blue-400 p-2 rounded-md transition duration-200" 
            to="/help">Help</NavLink>
        </div>
      </nav>
    </header>
  
    <main className="flex-grow container mx-auto p-6">
      <Outlet /> {/* This is where the child routes will be rendered */}
    </main>
  </div>
  
  );
}
