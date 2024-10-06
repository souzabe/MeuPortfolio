import About from "./About";

export default function Home(){
    return(
      <>
        <section id="home" className="flex flex-col items-center h-screen  bg-blue-950">
          <div className="flex justify-between items-center px-20 pt-28">
            <div>
              <div className="text-white ">
                <h1 className="text-4xl lg:text-6xl">Hi There! 👋</h1>
                <p className="text-2xl lg:text-3xl mt-2">I'M Mauricio Alves</p>
                <p className="text-2xl lg:text-3xl">Software Design Student</p>
              </div>
            </div>

            <div className="w-1/3">
              <img src="/assets/grayscale_coding_man.png" alt="Personagem" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </>
    );
};