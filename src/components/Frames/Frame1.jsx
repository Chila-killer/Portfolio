const Frame1 = ({isTightScreen}) => {
    
    return (
        <div className="flex justify-end self-end md:self-center md:max-w-[60%]">
            {isTightScreen ?
                <img className="w-full max-w-[600px] md:max-w-[600px] lg:max-w-[765px] xl:max-w-[965px] min-w-[475px] -translate-y-[25%] translate-x-32 md:translate-x-36 " src="/images/Frame.png" alt="robot icon desktop" />
                :
                <img className="w-full max-w-[375px] -translate-y-5 justify-end" src="/images/Group80.png" alt="robot icon" />
            }
        </div>
    )
}

export default Frame1