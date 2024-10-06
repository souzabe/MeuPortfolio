import React from 'react';
import { Link } from 'react-router-dom';


export default function Projetos({ projects }) {
  return (
    <>
      {
        projects.map((project, index) => (
          <div key={index} className="bg-sky-900 w-80 h-72 rounded-2xl border-[2px] border-sky-500 flex flex-col p-5 items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-lg">{project.name}</h2>
              <img src={project.image} className="w-36 h-w-36"/>
            </div>
            <div>
              <Link className="text-lg hover:text-sky-500" to={`/Projetos/${project.id}`}>Ver Detalhes</Link>
            </div>
          </div>
        ))
      }
    </>
    
  );
}