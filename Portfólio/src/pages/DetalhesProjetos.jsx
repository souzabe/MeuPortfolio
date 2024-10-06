import dados from "/src/projetos.json"
import { useParams } from 'react-router-dom';

export default function DetalhesProjetos() {
    const { id } = useParams();
    const project = dados.find((project) => project.id === parseInt(id));
  return (
    <section className="h-screen bg-blue-950 flex justify-center">
        <div className="w-80 h-64 text-white flex flex-col gap-6">
            <h1 className="text-2xl"><strong>{project.name}</strong></h1>
            <p className="text-lg"> {project.description}</p>

            <a className="text-lg hover:text-sky-600" href={project.video}><strong>{project.video}</strong></a>
            <a className="text-lg hover:text-sky-600" href={project.projeto}><strong>{project.projeto}</strong></a>
            <p>ID do projeto: {project.id}</p>
        </div>
    </section>
  )
}
