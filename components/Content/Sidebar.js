import Link from "next/link";
import {useState, useEffect} from "react";

const Sidebar = ({post}) => {

    if(post.content){
        var content = post.content
    }
    if(post.content.history){
        var history = post.content.history
    }
    if(post.content.recentEvents){
        var recentEvents = post.content.recentEvents
    }
    const [revealBool, setRevealBool] = useState(false)
    
    console.log(Object.values(content).length>1)
    
    useEffect(() => {
        setRevealBool(Object.values(content).length>1)
    },)
    
return (
    <>
    {revealBool && (
    <div class="mt-0 lg:mt-24 flex flex-col ">
        <h2 class="text-4xl md:text-xl ml-[-16px] pb-2">Content</h2>
        <div class="flex flex-col gap-2">
        {typeof(content)!=="undefined" && Object.values(content).map((items, indexes) =>
            <div class="flex flex-col gap-2">
                <Link href={`#${items.id}`}><div class="text-2xl md:text-base" key={indexes}>{items.title}</div></Link>
                <div>
                    {Object.values(items.content).map((item, index) =>
                        <Link href={`#${item.id}`}>
                            <div class="bg-white flex flex-col items-end bg-opacity-50 hover:bg-opacity-100 group" key={index}>
                                <div class="bg-zinc-900 w-[99.5%] pl-6 text-white/70 group-hover:text-white">{item.title}</div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )}
        </div>
    </div>
  )
    }
</>)
}

export default Sidebar
