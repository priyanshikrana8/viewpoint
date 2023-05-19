import React from 'react'
import Image from 'next/image'

const index = () => {
    const bg = {
        background: "url('/images/bg.jpg') ",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }
    return (
        <div>
            <h1 className="font-bold text-4xl py-12 text-center text-white h-[50vh] flex items-center justify-center " style={bg}>About</h1>
            <div className='text-white flex justify-center items-center p-16'>
                <div className='w-1/2 text-xl'>
                    Hey there! <br />
                    I am a Priyanshika Rana, a final year BCA student at Chandigarh University with a passion for astronomy and all things related to space. I find immense joy in discussing the wonders of the world and the mysteries that surround us. Exploring the vastness of the universe and understanding the intricate workings of celestial bodies fascinates me. I am always eager to engage in conversations about space exploration, cosmic events, and the latest discoveries in astronomy. Lets embark on a journey of knowledge and marvel at the beauty that surrounds us.
                </div>
                <div className='w-1/2 flex justify-center items-center'><Image src={"/images/author/author1.jpg"} width={500} height={500} className=""></Image>
                </div>
            </div>
        </div>
    )
}

export default index