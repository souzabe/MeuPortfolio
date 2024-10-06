import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import { Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
