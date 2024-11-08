// src/app/[empresa]/page.tsx
"use client";

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineCalendar,
    AiOutlineClockCircle,
} from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Agendamento = () => {
    const { empresa } = useParams();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        profissional: '',
        dia: '',
        hora: '',
        notificacao: false,
    });

    const [theme, setTheme] = useState('theme-light');

    const toggleTheme = () => {
        setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    // Obter a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados do agendamento:', formData);

        // Exibe o toast de sucesso
        toast.success('Agendamento realizado com sucesso! Você receberá a confirmação por e-mail.', {
            position: "bottom-right",
            autoClose: 5000, // Fecha automaticamente após 5 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // Limpar o formulário após o envio
        setFormData({
            nome: '',
            email: '',
            profissional: '',
            dia: '',
            hora: '',
            notificacao: false,
        });
    };

    return (
        <section className="flex flex-col items-center p-6 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
            <div className="w-full max-w-md mb-8">
                <h1 className="text-3xl font-bold text-center bg-[var(--bg-card)] p-6 rounded-md shadow-md">
                    {empresa ? empresa.toUpperCase() : 'EMPRESA'}
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-6 bg-[var(--bg-card)] p-8 rounded-lg shadow-lg"
            >
                {/* Campo Nome */}
                <div className="relative">
                    <AiOutlineUser
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600"
                        size={24}
                    />
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        className="w-full pl-12 pr-4 py-3 border border-[var(--input-border)] rounded-lg bg-[var(--input-bg)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />
                </div>

                {/* Campo E-mail */}
                <div className="relative">
                    <AiOutlineMail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600"
                        size={24}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail para contato"
                        className="w-full pl-12 pr-4 py-3 border border-[var(--input-border)] rounded-lg bg-[var(--input-bg)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />
                </div>

                {/* Campo Profissional */}
                <div className="relative">
                    <select
                        name="profissional"
                        value={formData.profissional}
                        onChange={handleChange}
                        className="w-full pl-4 pr-10 py-3 border border-[var(--input-border)] rounded-lg bg-[var(--input-bg)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none"
                    >
                        <option value="">Escolha um profissional</option>
                        <option value="Profissional 1">Profissional 1</option>
                        <option value="Profissional 2">Profissional 2</option>
                        <option value="Sem preferência">Sem preferência</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 transform -translate-y-1/2 text-purple-600">
                        ▼
                    </div>
                </div>

                {/* Campo Data */}
                <div className="relative">
                    <input
                        type="date"
                        name="dia"
                        value={formData.dia}
                        onChange={handleChange}
                        min={today} // Adicionamos o atributo min com a data atual
                        className="w-full p-4 border border-[var(--input-border)] rounded-lg bg-[var(--input-bg)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer"
                        required
                    />
                </div>

                {/* Campo Hora */}
                <div className="relative">
                    <input
                        type="time"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        className="w-full p-4 border border-[var(--input-border)] rounded-lg bg-[var(--input-bg)] text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer"
                        required
                    />
                </div>

                {/* Checkbox de Notificação */}
                <div className="flex items-center">
                    <div className="flex items-center">
                        <FaBell className="text-[var(--primary-color)] mr-2" size={20} />
                        <input
                            type="checkbox"
                            name="notificacao"
                            checked={formData.notificacao}
                            onChange={handleChange}
                            className="h-5 w-5 text-purple-600 bg-[var(--input-bg)] border-[var(--input-border)] rounded focus:ring-purple-600"
                        />
                    </div>
                    <label className="ml-3 text-[var(--text-color)] text-xs">
                        Permito que me enviem notificações sobre o agendamento.
                    </label>
                </div>

                {/* Botão de Submissão */}
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                    Agendar
                </button>
            </form>

            {/* Componente ToastContainer */}
            <ToastContainer />
        </section>
    );
};

export default Agendamento;
