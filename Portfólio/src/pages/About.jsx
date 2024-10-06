import Formulario from "../components/Formulario"
export default function About(){
    return(
        <>
        <section className="h-screen bg-blue-950 text-white flex flex-col items-center">
          <p>Sou Mauricio Alves, estudante de Engenharia de Software, e sou apaixonado por programação e tecnologia. Sempre fui curioso sobre o<br/>funcionamento de hardwares de computadores e máquinas em geral, o que me motiva a buscar constantemente novos desafios e aprender coisas novas.<br/>Estou sempre em busca de oportunidades para expandir meus conhecimentos e aprimorar minhas habilidades.</p>
          <Formulario/>
        </section>
        </>
    )
}