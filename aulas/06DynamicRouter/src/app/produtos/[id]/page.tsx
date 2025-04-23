type PageParams = {
  params: {
    id: string;
  };
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

// o params vai armazenar a chave como o que foi digitado entre [] na pasta, no caso id.(string)
export default async function ProdutoPage({ params }: PageParams) {
  const { id } = await params;
  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const data = (await response.json()) as Produto;

  return (
    <main>
      <h1>Produto</h1>
      <div>
        <h3>{data.nome}</h3>
        <p>Preço: R${data.preco}</p>
        <p>{data.descricao}</p>
      </div>
    </main>
  );
}
