import { todosOsCursos } from '@/api/cursos';
import Link from 'next/link';
import style from './style.module.css'

export default async function CursosPage() {
  const data = await todosOsCursos();

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {data.map(({ id, nome, descricao, slug, total_aulas, total_horas }) => {
          return (
            <Link href={`cursos/${slug}`} key={id} className={style.curso} >
              <h2>{nome}</h2>
              <p>{descricao}</p>
              <p>Total de aulas: {total_aulas}</p>
              <p>Total de horas: {total_horas}hrs</p>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
