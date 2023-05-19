import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function section1() {

    // const { data, isLoading, isError } = fetcher('api/trending')

    // if (isLoading) return <Spinner></Spinner>;
    // if (isError) return <Error></Error>

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/bg.jpg') ",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }

    return (
        <section className="py-16 " style={bg}>
            <div className="container mx-auto md:px-20 ">
                <div className="h-[80vh] flex justify-center items-start flex-col">
                    <div className="py-6 flex flex-col gap-12">
                        <div className="capitalize text-[6em] text-white font-bold">The world viewpoint</div>
                        <div className=" text-md text-white ">We provide insightful and diverse perspectives on global events and issues. Our mission is to create a platform where people from all corners of the world can consume the unique viewpoints and stories, fostering cross-cultural understanding and dialouge</div>
                    </div>
                    <div>
                        <Link href={"/blogs"} className=""><div className=" w-fit bg-blue-800 p-3 text-white">Read Blogs</div></Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

// function Slide({ data }) {

//     const { id, title, category, img, published, description, author } = data;

//     return (
//         <div className="h-[80vh]">
//             <div className="flex justify-between items-center">
//                 <div className="flex  gap-6">
//                     <Link href="/" ><span className="text-white">Home</span></Link>
//                     <Link href="/" ><span className="text-white">Blogs</span></Link>
//                     <Link href="/" ><span className="text-white">Discussions</span></Link>
//                     <Link href="/" ><span className="text-white">Ideas</span></Link>
//                     <Link href="/" ><span className="text-white">About</span></Link>
//                 </div>
//                 <div className="flex items-center "><span className="p-3 block bg-blue-800  text-white">Contact</span></div>
//             </div>
//             <div className="py-6 flex flex-col gap-12">
//                 <div className="capitalize text-[6em] text-white font-bold">The world viewpoint</div>
//                 <div className=" text-md text-white ">We provide insightful and diverse perspectives on global events and issues. Our mission is to create a platform where people from all corners of the world can consume the unique viewpoints and stories, fostering cross-cultural understanding and dialouge</div>
//             </div>
//             <div>
//                 <button className="bg-blue-800 p-3 text-white">Read Blogs</button>
//             </div>
//         </div>
//     )
// }