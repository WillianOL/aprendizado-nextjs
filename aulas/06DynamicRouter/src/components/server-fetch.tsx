type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};
// fazer o fetch no servidor é muito mais rápido(de forma instantânea), sem mostrar
// a tela em branco pra depois exibir os resultados. Também é bom
// para CEO pois os dados são escritos no documento.
export default async function ServerFecth() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Produto[];
  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>Preço: R${produto.preco}</p>
          <p>{produto.descricao}</p>
        </li>
      ))}
    </ul>
  );
}
