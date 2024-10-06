import React from 'react'
import {Instagram, Github, Linkedin} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 h-44 flex justify-around items-center">
      <div className= "text-white text-2xl font-bold ml-4">
        <p>MJ.</p>
      </div>

      <div className="text-white flex flex-col items-center">
        <h1 className="text-lg">Mídias</h1>
        <div>
          <div>
            <a className="flex gap-2 hover:text-sky-500" href="https://www.instagram.com/souzaa.bee/"><Instagram/>Instagram</a>
          </div>

          <div>
            <a className="flex gap-2 hover:text-sky-500" href="https://github.com/souzabe"><Github/>Github</a>
          </div>

          <div >
            <a className="flex gap-2 hover:text-sky-500" href="https://www.linkedin.com/in/mauricio-alves-5a69b3266/"><Linkedin/>Linkedin</a>
          </div>

        </div>
        
      </div>

    </footer>
  )
}
