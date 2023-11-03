import useMediaQuery from "../hooks/useMediaQuery";
import Frame2 from "./Frames/Frame2"
import Frame3 from "./Frames/Frame3";
import Header from "./NavBar/Header"

const Projects = () => {
  const isTinyScreen = useMediaQuery('(min-width: 380px)');

  return (
    <main>
      <Header 
      actualPage="projects"
      />
      <article className="relative">

        <img className="absolute min-w-[413px] -translate-y-60 sm:-translate-y-96" src="/images/Ellipser.png" alt="" />
        <img className="absolute right-0 sm:-translate-y-10" src="/images/EllipseProjects.png" alt="" />
        
        <section className="pt-36 relative flex flex-col-reverse">
          <div className="pt-20 flex justify-center">
            <Frame2 
            maxW={"max-w-[70%]"}
            />
            <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/image1.png" alt="" />
          </div>
          <div className={`max-w-[320px] md:max-w-[600px] grid gap-8 ${isTinyScreen ? "mx-auto" : "mx-5"}`}>
            <h2 className="font-bold text-[32px]"><span className="text-[#6a79e7] dark:text-[#9BA4ED]">Last E-Comerce</span> and website projects</h2>
            <p className="text-sm">Here you can review my latest projects from the educational and profesional area, so suit youserlf, i hope you enjoy it</p>
          </div>
        </section>

        <img className="absolute w-full max-w-[790px] -translate-y-16" src="/images/Ellipse3.png" alt="" />

        <section className="md:flex md:flex-wrap md:justify-evenly max-w-[95%] px-2 mx-auto rounded-[20px] bg-[#111114] z-10 relative mb-20 mt-10 md:mt-32 text-white">
          <div className="grid gap-8 pt-20 md:pt-10">
            <h3 className="font-bold text-2xl text-center">E-commerce</h3>
            <a className="flex relative justify-center" target="blank" href="https://e-comerceproyect.netlify.app/">
              <Frame2 
              maxW={"max-w-[65%]"}
              />
              <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/ecomerce.PNG" alt="" />
            </a>
          </div>
          <div className="grid gap-8 pt-10">
            <h3 className="font-bold text-2xl text-center">INFOGALAX</h3>
            <a className="flex relative justify-center" target="blank" href="https://josua-first-deliverable.netlify.app/">
              <Frame3 
              maxW={"max-w-[65%]"}
              />
              <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/infogalax.PNG" alt="" />
            </a>
          </div>
          <div className="grid gap-8 pt-10">
            <h3 className="font-bold text-2xl text-center">Weather App</h3>
            <a className="flex relative justify-center" target="blank" href="https://josua-weather-app.netlify.app">
              <Frame2 
              maxW={"max-w-[65%]"}
              />
              <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/weatherapp.PNG" alt="" />
            </a>
          </div>
          <div className="grid gap-8 pt-10">
            <h3 className="font-bold text-2xl text-center">CRUD Usuarios</h3>
            <a className="flex relative justify-center" target="blank" href="https://usuarios-malitos.netlify.app">
              <Frame3 
              maxW={"max-w-[65%]"}
              />
              <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/crudusuarios.PNG" alt="" />
            </a>
          </div>
          <div className="grid gap-8 pt-10">
            <h3 className="font-bold text-2xl text-center">Pokedex</h3>
            <a className="flex relative justify-center" target="blank" href="https://poke-moke.netlify.app">
              <Frame2 
              maxW={"max-w-[65%]"}
              />
              <img className="absolute bottom-10 w-[181px] -translate-y-[88px] rounded-[30px]" src="/images/pokedex.PNG" alt="" />
            </a>
          </div>
        </section>
        <img className="-z-0 absolute w-full min-w-[650px] max-w-[890px] bottom-96 -translate-y-[500px]" src="/images/Ellipser.png" alt="" />
        <img className="-z-0 absolute w-full min-w-[550px] max-w-[890px] bottom-0 -translate-y-[300px] -translate-x-20" src="/images/Ellipser.png" alt="" />
        <img className="-z-0 absolute w-full min-w-[450px] max-w-[890px] bottom-0 right-0 translate-y-52 sm:translate-y-[500px]" src="/images/Ellipser.png" alt="" />

      </article>
    </main>
  )
}

export default Projects