import History from './Content/Text/History'
import RecentEvents from './Content/Text/RecentEvents'
import Intro from './Content/Text/Intro'
import Traits from './Content/Text/Traits'
import HouseCard from './Content/HouseCard'
import Sidebar from './Content/Sidebar'
import Test from './Content/Test'
import Navbar from './Content/Navbar'
import {useState} from "react"

const WikiFrey = ({post}) => {
    
    const [hamButton, setHamButton] = useState(false)
    
    const revealNav = () => {
        setHamButton(!hamButton)
    }
    console.log()
return (
    <div class="relative w-screen h-full flex flex-col gap-0 overflow-y-auto" onClick={() => setHamButton(false)}>
    <Navbar post={post}/>
     <div class="flex flex-row overflow-hidden w-full max-w-screen-2xl mx-auto">
      <div class="hidden lg:flex h-full w-1/12 w-fit pl-10 overflow-hidden">
          <Sidebar post={post}/>
      </div>
      <div class="flex flex-1 overflow-hidden h-full top-10">
        <div class="flex-1 overflow-y-scroll mt-20">
          <h1 class="text-6xl my-5 text-center" style={{
            fontFamily: "Uncial Antiqua',cursive"
          }}>{post.title}</h1>
        <div class="flex flex-row flex-wrap sm:flex-nowrap justify-between pb-6 pr-6 lg:hidden">
          <div class="flex flex-col">
            <div class=""> <Intro post={post} /> </div>
            <div class="pl-6 pt-0 mt-0"> <Sidebar post={post}/> </div>
          </div>
          <div class="w-full pl-6 pt-6 sm:pl-0 sm:w-fit"> <HouseCard post={post} /> </div>  </div>
        <div class="hidden lg:block">
            <Intro post={post}/> 
        </div>
        <Traits post={post}/>
        <History post={post} />
        <RecentEvents post={post} />
        </div>
      </div>
        <div class="hidden lg:max-w-screen-1/12  lg:mx-6 lg:flex w-fit overflow-y-scroll">
          <HouseCard post={post} />
      </div></div>
    </div>
  )
}

export default WikiFrey
