import Footer from "../components/footer.jsx"
import Head from "next/head"

export default function format({ children }) {
    return (
        <>
            <Head>
                <title>Viewpoint</title>
            </Head>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}