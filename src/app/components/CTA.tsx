// components/CTA.tsx
import React from 'react';

const CTA = () => {
  return (
    <section className="container justify-center mx-auto flex flex-col items-center text-center p-10 bg-[var(--bg-color)] text-[var(--text-color)]">
      <h2 className="text-3xl font-bold mb-4">Pronto para Simplificar seus Agendamentos?</h2>
      <p className="text-lg max-w-2xl mb-6">
        Experimente a eficiência e praticidade de um sistema de agendamentos online que permite que seus clientes reservem horários com facilidade, enquanto você gerencia tudo com total controle e personalização.
      </p>
      <button 
        className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      >
        Experimente Agora!
      </button>
    </section>
  );
};

export default CTA;
