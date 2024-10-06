import React from 'react'
import dados from "/src/projetos.json"
import Projetos from "../components/Projetos"

export default function Projects() {
  return (
    <section className="h-screen flex flex-col flex-wrap gap-3 bg-blue-950 text-white items-center">
      <h1 className="text-2xl">Meus Projetos</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <Projetos projects={dados}/>
      </div>
    </section>
  )
}
