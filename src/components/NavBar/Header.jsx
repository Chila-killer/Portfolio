import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Switcher from "../Switcher"
import useDarkSide from "../../hooks/useDarkSide"

const Header = ({actualPage}) => {
  const [isShowMenu, setisShowMenu] = useState(false)
  const [colorTheme, setTheme] = useDarkSide();
  const navigate = useNavigate()
  // const actualPage = localStorage.actualPage

  const handleShowMenu = () => {
    setisShowMenu(!isShowMenu)
  }

  const handleGo = (e) => {
    // localStorage.setItem('actualPage', e.target.value)
    navigate(`/${e.target.value}`)
    if (isShowMenu) {
      setisShowMenu(false)
    }
  }
  
  return (
    <header className="fixed w-full z-20 bg-slate-600/80 dark:bg-black/80 opacity-[0.97]">
      <nav className="flex justify-between items-center h-[60px] max-w-[1024px] mx-4 md:max-w-full">
        <svg className="" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
          <path className="stroke-[#7682dd] dark:stroke-white" d="M29.5 21.5C29.5 27.2785 28.4621 32.4379 26.8455 36.0965C26.0363 37.9279 25.1115 39.3166 24.1606 40.2268C23.2172 41.1299 22.3206 41.5 21.5 41.5C20.6794 41.5 19.7828 41.1299 18.8394 40.2268C17.8885 39.3166 16.9637 37.9279 16.1545 36.0965C14.5379 32.4379 13.5 27.2785 13.5 21.5C13.5 15.7215 14.5379 10.5621 16.1545 6.90345C16.9637 5.07211 17.8885 3.68344 18.8394 2.77315C19.7828 1.87009 20.6794 1.5 21.5 1.5C22.3206 1.5 23.2172 1.87009 24.1606 2.77315C25.1115 3.68344 26.0363 5.07211 26.8455 6.90345C28.4621 10.5621 29.5 15.7215 29.5 21.5Z" stroke="white" strokeWidth="3" />
          <path className="stroke-[#3c4dca] dark:stroke-[#9BA4ED]" d="M21.5 29.5C15.7215 29.5 10.5621 28.4621 6.90345 26.8455C5.07211 26.0363 3.68344 25.1115 2.77315 24.1606C1.87009 23.2172 1.5 22.3206 1.5 21.5C1.5 20.6794 1.87009 19.7828 2.77315 18.8394C3.68344 17.8885 5.07211 16.9637 6.90345 16.1545C10.5621 14.5379 15.7215 13.5 21.5 13.5C27.2785 13.5 32.4379 14.5379 36.0965 16.1545C37.9279 16.9637 39.3166 17.8885 40.2268 18.8394C41.1299 19.7828 41.5 20.6794 41.5 21.5C41.5 22.3206 41.1299 23.2172 40.2268 24.1606C39.3166 25.1115 37.9279 26.0363 36.0965 26.8455C32.4379 28.4621 27.2785 29.5 21.5 29.5Z" stroke="#9BA4ED" strokeWidth="3" />
        </svg>

        <div className={`md:bg-white/0 md:bg-none fixed md:relative md:top-0 w-[40%] md:w-full h-max font-semibold z-10 transition-[top .3s ease-in-out] md:flex items-center md:justify-center ${isShowMenu ? "rounded-bl-md top-0 flex right-0 px-5 py-2 bg-slate-300 dark:bg-black bg-cover bg-[url('/images/Ellipse4.png')] dark:opacity-[0.97]" : "hidden top-[-100%] justify-center"}`}>
          <button onClick={handleShowMenu} type="button" className="absolute top-1 right-2 sm:top-2 sm:right-3 w-4 font-semibold z-10 flex md:hidden justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="md:flex md:items-center md:gap-16 duration-200">
            <nav>
              <button disabled={actualPage === ""} onClick={handleGo} className={`${actualPage === "" ? "md:text-slate-300 dark:text-[#7682dd] " : "active:scale-95 hover:scale-105 "}flex items-center py-3 px-4 hover:text-slate-500 md:hover:text-slate-300 dark:hover:text-[#7682dd]`} value="">Home</button>
            </nav>
            <nav>
              <button disabled={actualPage === "projects"} onClick={handleGo} className={`${actualPage === "projects" ? "md:text-slate-300 dark:text-[#7682dd] " : "active:scale-95 hover:scale-105 "}flex items-center py-3 px-4 hover:text-slate-500 md:hover:text-slate-300 dark:hover:text-[#7682dd]`} value="projects">Projects</button>
            </nav>
            <nav>
              <button disabled={actualPage === "about"} onClick={handleGo} className={`${actualPage === "about" ? "md:text-slate-300 dark:text-[#7682dd] " : "active:scale-95 hover:scale-105 "}flex items-center py-3 px-4 hover:text-slate-500 md:hover:text-slate-300 dark:hover:text-[#7682dd]`} value="about">About</button>
            </nav>
            <nav>
              <button disabled={actualPage === "contact"} onClick={handleGo} className={`${actualPage === "contact" ? "md:text-slate-300 dark:text-[#7682dd] " : "active:scale-95 hover:scale-105 "}flex items-center py-3 px-4 hover:text-slate-500 md:hover:text-slate-300 dark:hover:text-[#7682dd]`} value="contact">Contact</button>
            </nav>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Switcher 
          colorTheme={colorTheme}
          setTheme={setTheme}
          isShowMenu={isShowMenu}
          />
          <button onClick={handleShowMenu} className={`text-xl hover:scale-105 active:scale-95 duration-200 md:hidden ${isShowMenu ? "hidden" : "flex"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path className="fill-black dark:fill-white" d="M4 18C3.71667 18 3.47933 17.904 3.288 17.712C3.096 17.5207 3 17.2833 3 17C3 16.7167 3.096 16.4793 3.288 16.288C3.47933 16.096 3.71667 16 4 16H20C20.2833 16 20.5207 16.096 20.712 16.288C20.904 16.4793 21 16.7167 21 17C21 17.2833 20.904 17.5207 20.712 17.712C20.5207 17.904 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47933 12.904 3.288 12.712C3.096 12.5207 3 12.2833 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.47933 11.0957 3.71667 11 4 11H20C20.2833 11 20.5207 11.0957 20.712 11.287C20.904 11.479 21 11.7167 21 12C21 12.2833 20.904 12.5207 20.712 12.712C20.5207 12.904 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4Z" fill="white" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header