// components/Hero.tsx
"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col container mx-auto  items-center text-center p-10 bg-[var(--bg-color)] text-[var(--text-color)]">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl">
        Gerencie seus <span className="text-[var(--primary-color)]">Agendamentos</span> com Facilidade
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-[var(--text-color)]">
        Um sistema completo para agendamentos online que permite aos seus clientes agendar serviços de forma rápida e prática, enquanto você mantém o controle total e personaliza a experiência com a identidade da sua empresa.
      </p>
      <button className="mt-6 bg-[var(--primary-color)] text-white px-6 py-3 rounded-full hover:bg-opacity-90">
        Falar com Especialista
      </button>
    </section>
  );
};

export default Hero;
