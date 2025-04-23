import { buscaCurso } from '@/api/cursos';
import Link from 'next/link';
import style from '../style.module.css'

type CursoParams = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: CursoParams) {
  const data = await buscaCurso(params.curso);
  console.log(data.aulas);
  

  return (
    <main>
      <h1>{data.nome}</h1>
      <h3>{data.descricao}</h3>
      <div>
        <p style={{display:'inline-block', marginRight: "20px"}}>Aulas: {data.total_aulas}</p>
        <p style={{display:'inline-block'}}>Horas: {data.total_horas}</p>
      </div>
      <p>Sequência de aulas:</p>
      <ul>
        {data.aulas.map(({ descricao, nome, id, ordem, slug, tempo }) => {
          return (
            <Link href={`/cursos/${params.curso}/${slug}`} key={id} className={style.curso}>
              <h3>{nome} - {ordem}</h3>
              <p>{descricao}</p>
              <p>Tempo: {tempo}</p>
            </Link>
          )
        })}
      </ul>
    </main>
  );
}
