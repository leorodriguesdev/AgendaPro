// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto flex justify-between items-center p-4 h-[80] bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="text-lg font-bold">
        <Link href="/">AgendaPro</Link>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-[var(--text-color)]"
        aria-label="Toggle menu"
      >
        {/* Ícone do menu "hambúrguer" */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className={`flex-col md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-[var(--bg-color)] md:relative md:top-0 md:left-auto md:w-auto md:bg-transparent  flex justify-between items-center`}>
        <Link href="#features" className="block px-4 py-2 md:px-0 md:py-0 hover:text-[var(--primary-color)]">Features</Link>
        <Link href="#clients" className="block px-4 py-2 md:px-0 md:py-0 hover:text-[var(--primary-color)]">Clientes</Link>
        <Link href="#contact" className="block px-4 py-2 md:px-0 md:py-0 hover:text-[var(--primary-color)]">Contato</Link>
        <Link href="#cta" className="block bg-[var(--primary-color)] text-white px-4 py-2  rounded md:bg-transparent md:text-[var(--primary-color)] md:hover:bg-[var(--primary-color)] md:hover:text-white">
          Fale com Especialista
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
