'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RedefinirSenha() {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMostrarPopup(true); // Mostra o popup após o envio
  };

  const voltarParaLogin = () => {
    router.push('/Login');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <img src="/logoSemFundo.png" alt="Logo" className="w-30 h-30" />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-6">Redefinir Senha</h2>
        <h4 className="text-white text-center mb-6">Por favor, digite algo que você vai lembrar.</h4>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Digite Sua Nova Senha"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Repita Sua Nova Senha"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            placeholder="Insira Seu Código"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Redefinir Senha
          </button>
        </form>
      </div>

        {mostrarPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#1f1f1f] rounded-2xl p-6 shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-white">Senha redefinida com sucesso!</h2>
            <button
                onClick={voltarParaLogin}
                className="bg-pink-600 hover:bg-pink-700 transition text-white py-2 px-4 rounded-lg font-semibold"
            >
                Voltar para o login
            </button>
            </div>
        </div>
        )}
    </div>
  );
}
