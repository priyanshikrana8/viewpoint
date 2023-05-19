import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section3() {

    const { data, isLoading, isError } = fetcher('api/readbout')
    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center text-white">Read About</h1>
            {/* swiper */}
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }
                }}
            >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}


function Post({ data }) {

    const { id, title, category, img, description, published, author } = data;

    return (
        <div className="grid relative group ">
            <div className="images">
                <Link href={`/posts/${id}`}><a><Image className="object-cover" src={img || ""} width={600} height={800} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4  bg-red-900  top-0 right-0 absolute h-full opacity-80 overflow-hidden w-0 group-hover:w-3/4 transition-all transition-0.3s pointer-events-none">
                <div className="title text-center ">
                    <Link href={`/posts/${id}`}><a className="text-3xl md:text-xl font-bold text-white hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                {/* {author ? <Author {...author}></Author> : <></>} */}
            </div>
        </div>
    )
}