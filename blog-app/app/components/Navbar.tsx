import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl">
            <div className="flex flex-col justify-between mx-auto prose prose-xl sm:flex-row">
                <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
                    <Link href="/" className="no-underline text-white/90 hover:text-white">Emmanuel Maduakor</Link>
                </h1>
                <div className="flex flex-row justify-center gap-4 text-4xl text-white align-middle sm:justify-evenly lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/@DaveGrayTeachesCode">
                        <FaYoutube />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://courses.davegray.codes/">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}