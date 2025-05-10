"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function CriarConta() {
    const router = useRouter();

    const LidaCriarConta = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/Login');
    };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1f1f1f] rounded-2xl p-4 shadow-lg">
        <div className="flex justify-center mb-6">
          <Image 
            src="/LogoSemFundo.png" 
            alt="Logo" 
            width={100}
            height={100} 
          />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-">Entrar</h2>

        <form className="space-y-4" onSubmit={LidaCriarConta}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              placeholder="Digite Seu Nome"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

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

          <div>
            <label className="block text-sm text-gray-300 mb-1">Confirme Sua Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
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
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
