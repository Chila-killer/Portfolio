import { useNavigate } from "react-router-dom"
import Frame1 from "./Frames/Frame1"
import Header from "./NavBar/Header"
import useMediaQuery from "../hooks/useMediaQuery"

const Home = () => {
  const navigate = useNavigate()

  const isTinyScreen = useMediaQuery('(min-width: 380px)');

  const isTightScreen = useMediaQuery('(min-width: 470px)');

  const spanClass = "w-[80%] h-[80%] md:w-[20%] md:h-[88%] md:max-w-[200px] m-auto md:m-0 flex flex-col bg-[#222328] rounded-2xl opacity-90 justify-center items-center "

  const handleContact = () => {
    navigate("/contact")
  }

  return (
    <main className="z-0 relative min-h-screen overflow-hidden md:h-screen lg:h-full">

      <Header 
      actualPage=""
      />

      <article className="min-h-[650px] md:min-h-[550px] lg: inline-table w-full md:flex md:flex-row-reverse md:flex-wrap">
        <Frame1 
        isTightScreen={isTightScreen}
        />
        <img className="z-0 absolute top-0 w-full max-w-[378px] left-0" src="/images/Ellipse3.png" alt="" />
        <div className={`z-10 max-w-[320px]  ${isTinyScreen ? "mx-auto" : "mx-5"} ${isTightScreen ? "-translate-y-40 md:-translate-y-0" : "-translate-y-24"} md:max-w-[300px] md:self-center md:translate-x-20 lg:max-w-[402px]`}>
          <h2 className="text-[33px] font-bold">
            <span className="text-[#6a79e7] dark:text-[#9BA4ED]">Hi </span>
            i'am Josua Garcia, frontend developer
          </h2>
          <p className="mt-10 text-sm mx-auto">I consider myself a dedicated person, with the ability and responsability to get any work done, so if you're looking for skills and commitment, you have just found what you're looking for</p>
          <button className="py-1 px-[14px] mt-5 text-sm rounded-md border border-solid border-black dark:border-white z-20 relative flex" onClick={handleContact}>Click me</button>
        </div>
      </article>
      <img className="-z-10 absolute top-36 w-full md:hidden" src="/images/Ellipse4.png" alt="" />
      <img className="absolute top-[250px] hidden md:flex w-full max-w-[747px]" src="/images/Ellipser.png" alt="" />

      <section className={`w-[90%] mx-auto mb-8 md:mb-0 h-[367px] grid grid-cols-2 grid-rows-2 md:flex justify-evenly md:max-h-[160px] lg:max-h-[227px] md:max-w-[1034px] text-center items-center rounded-[20px] bg-[#111114] opacity-[0.99] dark:opacity-[0.80] text-white lg:mb-10`}>
        <a target="blank" href="https://react.dev/" className={`${spanClass} gap-3`}>
          <img className="w-10 h-10 justify-center" src="/images/React-icon.svg.png" alt="" />
          <h2 className="">React</h2>
        </a>
        <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className={`${spanClass}`}>
          <img className="w-14 h-14 justify-center -translate-y-2" src="/images/js.png" alt="" />
          <h2 className="-translate-y-1">JavaScript</h2>
        </a>
        <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML" className={`${spanClass} gap-3`}>
          <img className="w-10 h-10 justify-center" src="/images/HTML5_Badge.svg.png" alt="" />
          <h2 className="">Html</h2>
        </a>
        <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS" className={`${spanClass} gap-3`}>
          <img className="w-10 h-10 justify-center" src="/images/CSS3_logo.svg.png" alt="" />
          <h2 className="">Css</h2>
        </a>
      </section>
    </main>
  )
}

export default Home