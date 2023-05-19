import Link from 'next/link'
import { useRouter } from "next/router"

export default function header({ isDark }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useRouter().route;
    console.log(query);
    return (
        <header className={`${isDark ? "bg-black" : "bg-transparent"} fixed top-0 w-full left-0 p-3 z-[9999999999999999] transition-all transition-0.6s `}>
            <div className="flex justify-between items-center">
                <div className="flex gap-6">
                    <Link href="/" ><span className={`${query === "/" ? "text-blue-800" : "text-white"} ${query === "/" ? "hover:text-white" : "hover:text-blue-800"} cursor-pointer  transition-all transition-0.5s`}>Home</span></Link>
                    <Link href="/blogs" ><span className={`${query === "/blogs" ? "text-blue-800" : "text-white"} ${query === "/blogs" ? "hover:text-white" : "hover:text-blue-800"} cursor-pointer  transition-all transition-0.5s`}>Blogs</span></Link>
                    <Link href="/discussions" ><span className={`${query === "/discussions" ? "text-blue-800" : "text-white"} ${query === "/discussions" ? "hover:text-white" : "hover:text-blue-800"} cursor-pointer  transition-all transition-0.5s`}>Discussions</span></Link>
                    <Link href="/about" ><span className={`${query === "/about" ? "text-blue-800" : "text-white"} ${query === "/about" ? "hover:text-white" : "hover:text-blue-800"} cursor-pointer  transition-all transition-0.5s`}>About</span></Link>

                </div>
                <div className="flex items-center "><span className="p-3 block bg-blue-800  text-white">Contact</span></div>
            </div>
        </header>
    )
}
