'use client';

import { useState } from 'react';
import ListaProdutos from './ListaProdutos';

type Categoria = 'Lanches' | 'Salgados' | 'Biscoitos' | 'Bebidas' | 'Cervejas';

export default function BarraHorizontal() {
  const categorias: Categoria[] = ['Lanches', 'Salgados', 'Biscoitos', 'Bebidas', 'Cervejas'];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>('Lanches');

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap flex gap-3 my-4 px-1">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-2 rounded-full transition whitespace-nowrap ${
              categoriaSelecionada === cat
                ? 'bg-white text-black font-semibold'
                : 'bg-gray-700 text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ListaProdutos categoria={categoriaSelecionada} />
    </>
  );
}
