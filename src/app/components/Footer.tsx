// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center p-4 bg-[var(--bg-color)] text-[var(--text-color)] border-t border-gray-700">
      <div className="text-sm">&copy; AgendaPro © {new Date().getFullYear()}</div>
      <p className="text-xs text-gray-400 mt-1">Facilitando seus agendamentos, um horário de cada vez.</p>
      <div className="flex space-x-4 mt-3">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)]">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
