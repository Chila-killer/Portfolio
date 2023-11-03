export default function Switcher({ colorTheme, setTheme, isShowMenu }) {

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    return (
        <>
            {colorTheme === "dark" ?
                <button onClick={toggleDarkMode} className={`hover:scale-105 active:scale-95 duration-200 md:flex ${isShowMenu ? "hidden" : "flex"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" strokeWidth="0" fill="currentColor"></path>
                    </svg>
                </button>
                :
                <button onClick={toggleDarkMode} className={`hover:scale-105 active:scale-95 duration-200 md:flex ${isShowMenu ? "hidden" : "flex"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>
                </button>
            }
        </>
    );
}