import { MapPin, Phone, Mail } from 'lucide-react';

export default function Resume() {
  return (
    <section className="h-screen bg-blue-950 flex flex-col md:flex-row md:justify-center">
      <section className=" p-6 rounded-xl bg-azulzinho text-white flex flex-col gap-7">
        <div>
            <h2 className="text-xl"><strong>Contatos</strong></h2>
            <div className="flex gap-1">
                <MapPin/>
                <p>Zona Sul - São Paulo</p>
            </div>
            <div  className="flex gap-1">
                <Phone/>
                <p>11997266508</p>
            </div>
            <div  className="flex gap-1">
                <Mail/>
                <a href="mailto:jaja013souza@gmail.com">jaja013souza@gmail.com</a>
            </div>
        </div>

        <div>
            <h2 className="text-xl"><strong>Principais Competências</strong></h2>
            <div>
                <p>Hardware de computadores</p>
                <p>Gestão de TI</p>
                <p>Desenvolvimento de sistemas</p>
            </div>
        </div>

        <div>
            <h2 className="text-xl"><strong>Línguas</strong></h2>
            <div>
                <p>Português - Nativo</p>
                <p>Inglês - Intermediário</p>
                <p>Espanhol - Avançado</p>
            </div>
        </div>

        <div>
            <h2 className="text-xl"><strong>Skills</strong></h2>
            <div>
                <p>Dinâmico, organizado,responsável,<br/>comprometidocom a instituição e proativo.</p>
                <p>Facilidades: Comunicação,<br/>trabalhar em grupos,<br/>e facilidade de aprendizadorápido</p>
                <p>Bom relacionamento com aspessoas.</p>
            </div>
        </div>
      </section>

      <section className="text-azulzinho p-6 rounded-xl bg-white flex flex-col gap-5">
        <div>
            <h1 className="text-5xl"><strong>Mauricio<br/>Alves</strong></h1>
            <p>Estágio em Ti ou áreas correlatas</p>
        </div>

        <div>
            <h2 className="text-2xl"><strong>Sobre</strong></h2>
            <p>Sou estudante de engenharia de Software<br/>que ama programação e hardwares de
            <br/>computadores e máquinas em geral,
            <br/>tenho muita curiosidade e vontade de
            <br/>aprender coisas novas e estou sempre
            <br/>buscando novos desafios</p>
        </div>

        <div>
            <h2 className="text-2xl"><strong>Educação</strong></h2>
            <p>FIAP Bacharelado
            <br/>Engenharia de Software · (fevereiro de 2024
            <br/>até o presente momento)</p>

            <p>Colégio São Luiz - Unidade 3 Curso Técnico
            <br/>Integrado:</p>

            <p>•Curso Técnico Integrado Programação em
            <br/>JavaScript · (julho de 2023 - dezembro de
            <br/>2023)</p>

            <p>•Curso Técnico Integrado Desenvolvimento
            <br/>de web sites · (janeiro de 2023 - julho de
            <br/>2023)</p>

            <p>•Curso Técnico Integrado Programação em
            <br/>Java · (julho de 2022 - dezembro de 2022)</p>
        </div>

        <div>
            <h2 className="text-2xl"><strong>Experiência profissional</strong></h2>
            <p>Cargo: Monitor no Transporte Escolar</p>

            <p>Data de admissão: janeiro de 2021 até o
            <br/>presente momento</p>

            <p>Neste cargo eu sou responsável pelo
            <br/>monitoramento, organização e o controle de
            <br/>entrada e saída das crianças</p>
        </div>


      </section>
    </section>
  )
}
