type PageParams = {
  params: {
    ids: string[]
  }
}

export default async function CursoPage({params}: PageParams) {
  console.log(params.ids);

  return (
    <main>
      <h1>Curso</h1>
      <p>{params.ids.join('/')}</p>
    </main>
  );
}
