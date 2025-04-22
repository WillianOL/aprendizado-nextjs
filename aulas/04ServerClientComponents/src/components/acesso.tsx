// API do node
import fs from 'fs/promises';

export default async function Acesso() {
  // criar um arquivo nodo e adicionar
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');
  // pega o texto do arquivo
  const data = await fs.readFile('acesso.txt', 'utf8');
  return <div>{data}</div>;
}
