"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EsqueceuSenha() {
    const router = useRouter();
  
    const LidaEsqueceuSenha = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push('/Login/RedefinirSenha');
    };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <Image 
            src="/logoSemFundo.png" 
            alt="Logo" 
            width={100}
            height={100} 
          />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-6">Esquece a Senha</h2>
        <h4 className="text-white text-center mb-6">Não se preocupe! Isso acontece. <br />Insira o e-mail associado à sua conta.</h4>

        <form className="space-y-4" onSubmit={LidaEsqueceuSenha}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Digite Seu Email"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Enviar Código
          </button>
        </form>
      </div>
    </div>
  );
}
