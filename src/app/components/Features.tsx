// components/Features.tsx
import React from 'react';
import { FaCalendarAlt, FaUsersCog, FaBell } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="container h-[600] justify-center mx-auto flex flex-col items-center text-center p-10 bg-[var(--bg-color)] text-[var(--text-color)]">
      <h2 className="text-3xl font-bold mb-8">Por que escolher nosso Sistema de Agendamento?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureItem 
          icon={<FaCalendarAlt />} 
          title="Gestão Completa de Agendamentos" 
          description="Permita que seus clientes agendem serviços online de forma prática e organizada, com total controle de horários e disponibilidade." 
        />
        <FeatureItem 
          icon={<FaUsersCog />} 
          title="Customização para sua Empresa" 
          description="Personalize o sistema com sua marca, cores e layout para oferecer uma experiência única e alinhada à identidade da sua empresa." 
        />
        <FeatureItem 
          icon={<FaBell />} 
          title="Notificações Automáticas" 
          description="Receba e envie notificações automáticas para lembrar seus clientes dos agendamentos e manter todos informados." 
        />
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-[var(--bg-card)] rounded-lg shadow-md">
      <div className="text-[var(--primary-color)] text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-[var(--text-color)]">{description}</p>
    </div>
  );
};

export default Features;
