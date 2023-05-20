import HouseCard from './Content/HouseCard'
import Sidebar from './Content/Sidebar'
import Navbar from './Content/Navbar'
import Text from './Content/Text'
import {useState} from "react"

const WikiFrey = ({post}) => {
    console.log(post.content)
    const [hamButton, setHamButton] = useState(false)
    
    const revealNav = () => {
        setHamButton(!hamButton)
    }
    
return (
    <div className="relative w-screen h-full flex flex-col gap-0 overflow-y-auto" onClick={() => setHamButton(false)}>
    <Navbar post={post}/>
     <div className="flex flex-row overflow-hidden w-full max-w-screen-2xl mx-auto">
      <div className="hidden lg:flex h-full w-1/12 w-fit pl-10 overflow-hidden">
          <Sidebar post={post}/>
      </div>
      <div className="flex flex-1 overflow-hidden h-full top-10">
        <div className="flex-1 overflow-y-scroll mt-20">
          <h1 className="text-6xl my-5 text-center" style={{
            fontFamily: "Uncial Antiqua',cursive"
          }}>{post.title}</h1>
            <Text content={post.content}/>
        </div>
      </div>
        <div className="hidden lg:max-w-screen-1/12  lg:mx-6 lg:flex w-fit overflow-y-scroll">
          <HouseCard post={post} />
      </div></div>
    </div>
  )
}

export default WikiFrey
