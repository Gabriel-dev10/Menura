"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
  
    const Login = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push('/');
    };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <img src="/logoSemFundo.png" alt="Logo" className="w-30 h-30" />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-">Entrar</h2>

        <form className="space-y-4" onSubmit={Login}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Lembre-me
            </label>
            <Link href="/Login/EsqueceuSenha" className="text-pink-500 hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Entrar
          </button>

          <div className="flex items-center gap-2 my-4 text-gray-500">
            <hr className="flex-1 border-gray-700" />
            <span className="text-sm">ou continue com</span>
            <hr className="flex-1 border-gray-700" />
          </div>

          <button className="w-full bg-white text-black flex items-center justify-center gap-2 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            <img src="/googleico.svg" alt="Google" className="w-5 h-5" />
            Login com Google
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Não tem uma conta?{' '}
            <Link href="Login/CriarConta" className="text-pink-500 hover:underline">
              Criar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
