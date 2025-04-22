import Link from 'next/link';

export default function Menu() {
  // O componente Link serve para fazer a nevegação de rotas no next
  // sem recarregar a página
  // prefetch - carrega todo link que estiver em sua viweport
  // ou seja, ao acesser o link os dados já estarão carregados
  return (
    <header>
      <ul className="menu">
        <li>
          <Link href={'/'} prefetch={true}>Home</Link>
        </li>
        <li>
          <Link href={'/sobre#mim'} scroll={false} prefetch={true}>Sobre</Link>
        </li>
        <li>
          <Link href={'/contato'} prefetch={true}>contato</Link>
        </li>
      </ul>
    </header>
  );
}
