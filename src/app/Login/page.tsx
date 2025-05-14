"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl p-6 shadow-lg">

        <div className="text-4xl font-bold text-center mt-6 mb-6">
          <span className="text-green-500">.</span>
          <span className="text-white">Get</span>
          <span className="text-[#ff3131]">Food</span>
        </div>

        <h2 className="text-2xl font-bold mt-10 text-white text-center mb-6">Entrar</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3c3c]"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#ff3131]" />
              Lembre-me
            </label>
            <Link href="/Login/EsqueceuSenha" className="text-[#ff3131] hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff3131] transition text-white py-3 rounded-lg font-semibold"
          >
            Entrar
          </button>

          <div className="flex items-center gap-2 my-4 text-gray-500">
            <hr className="flex-1 border-gray-700" />
            <span className="text-sm">Ou continue com</span>
            <hr className="flex-1 border-gray-700" />
          </div>

          <button className="w-full bg-white text-black flex items-center justify-center gap-2 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            <Image 
              src="/googleico.svg" 
              alt="Google" 
              width={20}
              height={20}
            />
            Login com Google
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            Crie sua conta aqui!{' '}
            <Link href="/Login/CriarConta" className="text-[#ff3131] hover:underline">
              Criar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
