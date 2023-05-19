import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"

import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function section4() {

    const { data, isLoading, isError } = fetcher('api/links')

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="text-center text-white text-3xl font-bold py-6">Links to more sources to read from</div>
            <div className="grid lg:grid-cols-4">
                {
                    data.map((blog) => {
                        // console.log(blog);
                        return <Post key={blog.source} data={blog} />
                    })
                }
            </div>
        </section>
    )
}

function Post({ data }) {

    const { title, img, source } = data;

    return (
        <a target="blank" href={source} className="flex gap-5 h-full relative group">
            <div className="image flex flex-col justify-start">
                <img src={img} alt="" className="h-[80vh] object-cover grayscale" />
                {/* <Link href={`/posts/${id}`}><a><Image src={img || ""} className="rounded" width={300} height={250} /></a></Link> */}
            </div>
            <div className="info   flex-col absolute bottom-0 left-0 bg-gradient-to-t from-black h-2/4 w-full flex justify-end p-3 pb-16 group-hover:h-full transition-all transition-0.6s">
                <div className="title">
                    <a className="text-xl font-bold text-white">{title || "No Title"}</a>
                </div>
                {/* <div className="text-gray-500 ">{source}</div> */}
            </div>
        </a>
    )
}