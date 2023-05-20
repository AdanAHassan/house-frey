import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import {RiHomeFill} from "react-icons/ri"
import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "./Sidebar"

const Navbar = ({post}) => {
    const [hamButton, setHamButton] = useState(false)
    
    const revealNav = () => {
        setHamButton(!hamButton)
    }

  return (
    <div className="fixed flex top-0 w-full text-center bg-zinc-700 h-20 flex-row justify-between p-6 text-black font-black items-center text-xl md:justify-around z-50">
            <button onClick={revealNav} className="text-gray-300 hover:text-white"><GiHamburgerMenu /></button>
            <div className={`md:hidden ${hamButton ? "flex" : "hidden"}`}>
                <div onClick={revealNav} className="absolute flex flex-col text-start left-0 top-0 text-lg h-screen z-40 w-full backdrop-blur-sm">
                    <div className="relative bg-black w-fit  border-r-2 border-b-2 border-zinc-500 text-white h-fit z-50 p-10">
                        <Sidebar post={post}/>
                        <button onClick={() => setHamButton(false)} className="text-white absolute top-8 right-8 text-2xl hover:opacity-50 pointer-events-auto"><AiOutlineClose /></button>
                    </div>
                </div>
            </div>
            <div className="text-xl text-white">A World of Ice and Fire Wiki</div>
            <Link href={"/"} passHref key="Home">
                <div className="text-gray-300 hover:text-white"><RiHomeFill /></div>
            </Link>
    </div>
  )
}

export default Navbar
