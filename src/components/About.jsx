import useMediaQuery from "../hooks/useMediaQuery";
import Frame3 from "./Frames/Frame3"
import Header from "./NavBar/Header"

const About = () => {
  const isTinyScreen = useMediaQuery('(min-width: 380px)');
  const imageTranslate = useMediaQuery('(min-width: 356px)');

  return (
    <main className="relative max-h-screen">
      <Header 
      actualPage="about"
      />
      <img className="absolute min-w-[413px] bottom-0 sm:translate-y-96" src="/images/Ellipser.png" alt="" />
      <img className="absolute right-0 -translate-y-96" src="/images/EllipseProjects.png" alt="" />
      <article className={`min-h-screen ${imageTranslate ? "pt-[97px] md:pt-36" : "pt-[77px]"} grid justify-center relative`}>
        <section className={`max-w-[320px] md:max-w-[600px] grid gap-8 mb-10 ${isTinyScreen ? "mx-auto" : "mx-5"}`}>
          <h2 className="font-bold text-[32px]"><span className="text-[#6a79e7] dark:text-[#9BA4ED]">About</span> me, myself and i</h2>
          <div className="grid gap-3 text-sm">
            <p>Im expecting to improve myself and develop new skills so i can be a better person, and always looking forward to: progression and personal growth</p>
            <p className="text-sm">I studied at Academlo with the best instructors they have to offer, and im looking to continue advancing with my self learning, and why not study a proper career to make things even more formal</p>
          </div>
        </section>
        <div className="relative flex justify-center">
          <Frame3
            maxW={"max-w-[70%]"}
          />
          <img className={`absolute bottom-10 w-[181px] -translate-y-[90px] md:-translate-y-[120px] rounded-[30px]`} src="/images/image4.jpg" alt="" />
        </div>

      </article>
    </main>
  )
}

export default About