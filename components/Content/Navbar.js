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
    <div class="fixed flex top-0 w-full text-center bg-zinc-700 h-20 w-full flex flex-row justify-between p-6 w-full text-black font-black items-center text-xl md:justify-around">
            <button onClick={revealNav} class="md:hidden text-gray-300 hover:text-white"><GiHamburgerMenu /></button>
            <div class={`md:hidden ${hamButton ? "flex" : "hidden"}`}>
                <div onClick={revealNav} class="absolute flex flex-col text-start left-0 top-0 text-lg h-screen z-40 w-full backdrop-blur-sm">
                    <div class="relative bg-zinc-900 w-fit  border-r-2 border-b-2 border-zinc-500 text-white h-fit z-50 p-10">
                        <Sidebar post={post}/>
                        <button onClick={() => setHamButton(false)} class="text-white absolute top-8 right-8 text-2xl hover:opacity-50 pointer-events-auto"><AiOutlineClose /></button>
                    </div>
                </div>
            </div>
            <div class="text-xl text-white">A World of Ice and Fire Wiki</div>
            <div class="text-gray-300 hover:text-white"><RiHomeFill /></div>
    </div>
  )
}

export default Navbar
