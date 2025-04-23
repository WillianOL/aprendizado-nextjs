type TodosCursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  ordem: number;
  tempo: number;
};

interface Curso extends TodosCursos {
  aulas: Aula[];
}

export async function todosOsCursos(): Promise<TodosCursos[]> {
  const response = await fetch('https://api.origamid.online/cursos');
  const data = (await response.json()) as TodosCursos[];
  return data;
}

export async function buscaCurso(curso: string): Promise<Curso> {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  const data = (await response.json()) as Curso;
  return data;
}

export async function buscaAula(curso: string, aula: string): Promise<Aula> {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
  const data = (await response.json()) as Aula;
  return data;
}
