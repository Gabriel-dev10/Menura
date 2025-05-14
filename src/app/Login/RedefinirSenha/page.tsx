'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function RedefinirSenha() {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMostrarPopup(true);
  };

  const voltarParaLogin = () => {
    router.push('/Login');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
      <div className="w-full max-w-md rounded-2xl p-6 shadow-lg">
        
        <div className="text-4xl font-bold text-center mt-6 mb-6">
          <span className="text-green-500">.</span>
          <span className="text-white">Get</span>
          <span className="text-[#ff3131]">Food</span>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 text-center mb-2">Redefinir Senha</h2>
        <p className="text-sm text-white mt-10 text-center mb-6">
          Por favor, digite algo que você vai lembrar.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
          />
          <input
            type="password"
            placeholder="Repita sua nova senha"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
          />
          <input
            type="text"
            placeholder="Insira seu código"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
          />
          <button
            type="submit"
            className="w-full bg-[#ff3131] hover:bg-[#e62e2e] transition text-white py-3 rounded-lg font-semibold"
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
              className="bg-[#ff3131] hover:bg-[#e62e2e] transition text-white py-2 px-4 rounded-lg font-semibold"
            >
              Voltar para o login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
