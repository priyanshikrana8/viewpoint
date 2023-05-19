import Link from "next/link"
import Image from "next/image"
import Author from "../../components/_child/author"
import fetcher from "../../lib/fetcher"
import Spinner from "../../components/_child/spinner"
import Error from "../../components/_child/error"
import Head from "next/head"

export default function blogs() {

    const { data, isLoading, isError } = fetcher('api/posts')

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>
    const bg = {
        background: "url('/images/bg.jpg') ",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    }

    return (
        <section className="container mx-auto md:px-20 py-10">
            <Head>
                <title>Read blogs</title>
            </Head>

            <h1 className="font-bold text-4xl py-12 text-center text-white h-[50vh] flex items-center justify-center " style={bg}>Read our blogs</h1>
            {/* grid columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {
                    data.map((value, index) => (
                        <Post data={value} key={index}></Post>
                    ))
                }
            </div>
        </section>
    )
}


function Post({ data }) {
    const { id, title, category, img, published, author, description } = data;
    return (
        <div className="item ">
            <div className="images">
                <Link href={`/posts/${id}`}><a><Image src={img || "/"} className="" width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-gray-400 hover:text-gray-600">{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-xl font-bold text-white hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {
                        Array.from(description).splice(0, 130).join("")
                    }...
                </p>
                {author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}