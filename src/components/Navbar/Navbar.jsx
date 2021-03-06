import React from 'react';
import {NavLink} from "react-router-dom"
import "tailwindcss/tailwind.css"

const Navbar = () => {
    return (
        <div>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
     
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          {/* <img class="hidden lg:block h-8 w-auto" src="src/assets/ABR-logo.png" alt="ABRLogo"/> */}
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <NavLink to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
            <NavLink to="/Portfolio" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</NavLink>
            <NavLink to="/Contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
            {/* <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>

    </nav>
</div>
    );
};

export default Navbar;