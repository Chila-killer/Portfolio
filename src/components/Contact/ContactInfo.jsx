const ContactInfo = ({handleShowModal}) => {
  return (
    <article className="relative mx-auto rounded-[40px] self-center bg-[#111114] opacity-90 z-20 flex flex-col items-center justify-center h-[564px] w-[90%] gap-10 text-sm sm:text-xl text-white">
      <button onClick={handleShowModal} type="button" className="absolute top-7 right-6 w-10 z-10 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
      <p className="mx-5"><span className="text-[#6a79e7] dark:text-[#9BA4ED] font-semibold sm:font-bold">Phone: </span>5585399296 or </p>
      <p className="mx-5"><span className="text-[#6a79e7] dark:text-[#9BA4ED] font-semibold sm:font-bold">Email: </span>jgt1@yahoo.com</p>
      <p className="mx-5"><span className="text-[#6a79e7] dark:text-[#9BA4ED] font-semibold sm:font-bold">Gmail: </span>darkhonorsalvatore@gmail.com</p>
      <p className="mx-5"><span className="text-[#6a79e7] dark:text-[#9BA4ED] font-semibold sm:font-bold">Github: </span>https://github.com/Chila-killer</p>
    </article>
  )
}

export default ContactInfo