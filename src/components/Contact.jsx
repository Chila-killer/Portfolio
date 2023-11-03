import { useState } from "react"
import ContactInfo from "./Contact/ContactInfo"
import Header from "./NavBar/Header"

const Contact = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  const handleShowModal = () => {
    setIsShowModal(!isShowModal)
  }

  return (
    <main className="min-h-screen flex relative">
      <Header
        actualPage="contact"
      />
      <img className="absolute -translate-x-32 -translate-y-40 md:-translate-y-96 min-w-[450px]" src="/images/Ellipser.png" alt="" />
      {isShowModal ?
        <ContactInfo
          handleShowModal={handleShowModal}
        />
        :
        <article className="text-white bg-[#111114] opacity-90 z-10 relative self-center flex flex-col justify-center text-center h-[564px] w-[90%] mx-auto rounded-[40px]">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact me!</h1>
          <p className="text-sm pt-[53px] px-3">Youre doing the right choice, trust me, i can handle anything you throw at me, I won't let you down</p>
          <button className="py-1 px-[14px] mt-[35px] text-sm rounded-md border border-solid border-white z-20 relative flex max-w-max justify-center self-center" onClick={handleShowModal}>
            Click here
          </button>
        </article>
      }

      <img className="absolute -z-0 bottom-0 right-0 translate-y-60 translate-x-40 sm:translate-x-20 sm:translate-y-96 md:translate-y-[650px] md min-w-[500px]" src="/images/EllipseProjects.png" alt="" />

    </main>
  )
}

export default Contact