'use client';

import React from 'react';

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

// Fazer o fetch do lado do cliente é muito mais lenta e não é bom para CEO
// porque os dados não são colocados diretamente no código.
export default function ClientFecth() {
  const [data, setData] = React.useState<Produto[]>();

  React.useEffect(() => {
    async function handleFetch() {
      const response = await fetch('https://api.origamid.online/produtos');
      const dataJson = (await response.json()) as Produto[];
      setData(dataJson);
      return;
    }
    handleFetch();
  }, []);

  return (
    <ul>
      {data &&
        data.map((produto) => (
          <li key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>Preço: R${produto.preco}</p>
            <p>{produto.descricao}</p>
          </li>
        ))}
    </ul>
  );
}
