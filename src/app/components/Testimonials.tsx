// components/Testimonials.tsx
import React from 'react';

const testimonials = [
  { name: "Lucas Almeida", company: "Salão Bella Vida", text: "O sistema de agendamento facilitou muito o atendimento dos nossos clientes. Agora é tudo muito mais organizado!" },
  { name: "Mariana Costa", company: "Academia PowerFit", text: "Finalmente conseguimos oferecer agendamentos online. Nossos alunos adoram a praticidade e eu ganho muito tempo!" },
  { name: "Fernando Silva", company: "Clínica Saúde Já", text: "O sistema é completo e super fácil de usar. Nossos pacientes conseguem marcar consultas sem precisar ligar para a recepção." },
  { name: "Sofia Ribeiro", company: "Loja de Roupas", text: "Poder personalizar o sistema com a cara da minha empresa fez toda a diferença. Recomendo para qualquer negócio que precise de agendamentos." },
];

const Testimonials = () => {
  return (
    <section id="clients" className="container mx-auto p-10 bg-[var(--bg-color)] text-[var(--text-color)]">
      <h2 className="text-3xl font-bold text-center mb-8">O que nossos clientes estão dizendo:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, company, text }: { name: string, company?: string, text: string }) => {
  return (
    <div className="flex flex-col p-6 bg-[var(--bg-card)] rounded-lg shadow-md text-center">
      <p className="text-[var(--text-color)] mb-4">"{text}"</p>
      <div className="text-sm text-[var(--text-color)] font-semibold">{name}</div>
      {company && <div className="text-xs text-[var(--text-color)]">{company}</div>}
    </div>
  );
};

export default Testimonials;
