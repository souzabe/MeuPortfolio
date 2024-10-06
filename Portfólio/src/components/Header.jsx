import {NavLink} from "react-router-dom"
import {Github,  GitBranch, Instagram} from "lucide-react"
import "/src/pages/style.css"
export default function Header(){
    return(
        <>
        <header className = "flex bg-blue-950 text-white h-20 flex-wrap">
            <div className= "flex justify-between items-center w-full flex-wrap">
                <div className= "text-white text-2xl font-bold ml-4">
                    <p>MJ.</p>
                </div>
                <div className = 'flex gap-10 mr-4 '>
                    <NavLink to="/" className = "faixa">Home</NavLink>
                    <NavLink to="/About" className = "faixa">About</NavLink>
                    <NavLink to="/Projects" className = "faixa">Projects</NavLink> 
                    <NavLink to="/Resume" className = "faixa">Resume</NavLink> 
                    <a href="https://github.com/souzabe/Portfolio"><GitBranch className="text-white"/></a>
                    <div className = "border border-black h-[3px] w-full"></div>
                </div>
             
                </div>
            <div/>
        </header>
        </>
    )
}