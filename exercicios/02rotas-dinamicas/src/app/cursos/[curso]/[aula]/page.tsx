import { buscaAula } from "@/api/cursos"
import Link from "next/link"

type AulaParams = {
  params: {
    aula: string,
    curso: string
  }
}

export default async function AulaPage({params}:AulaParams) {
  const data = await buscaAula(params.curso, params.aula)

  return (
    <main>
      <div>
        <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
        <h1>{data.nome}</h1>
        <p>{data.descricao}</p>
        <p>Tempo: {data.tempo}</p>
      </div>
    </main>
  )
}