"use client";

import { useRouter } from 'next/navigation';


export default function EsqueceuSenha() {
  const router = useRouter();

  const LidaEsqueceuSenha = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/Login/RedefinirSenha');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl p-6 shadow-lg">

        <div className="text-4xl font-bold text-center mt-6 mb-6">
          <span className="text-green-500">.</span>
          <span className="text-white">Get</span>
          <span className="text-[#ff3131]">Food</span>
        </div>

        <h2 className="text-2xl mt-10 font-bold text-white text-center mb-2">Esqueceu a Senha</h2>
        <p className="text-white text-sm text-center mt-10 mb-6">
          Não se preocupe! Isso acontece.<br />
          Insira o e-mail associado à sua conta.
        </p>

        <form className="space-y-4" onSubmit={LidaEsqueceuSenha}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff3131] hover:bg-[#e62e2e] transition text-white py-3 rounded-lg font-semibold"
          >
            Enviar Código
          </button>
        </form>
      </div>
    </div>
  );
}
