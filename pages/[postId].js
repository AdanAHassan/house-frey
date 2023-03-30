import Link from "next/link"
import { useRouter } from "next/router"
import WikiFrey from "../components/WikiFrey"
import { useEffect } from "react"

const Post = ({post}) => {
 
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <div>
            <WikiFrey post={post}/>
        </div>
    </div>
  )
}

export default Post

export async function getStaticProps(context){
    const {params,req, res} = context
    const response = await fetch(`https://copper-chipmunk-gear.cyclic.app/POV/${params.postId}`)
    const data = await response.json()
    console.log(data)

    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {
       const response = await fetch(`https://copper-chipmunk-gear.cyclic.app/POV`)
       const data = await response.json()
       
       const paths = data.map((post) => {
           return {
               params: {
                   postId: `${post.id}`
            }
        }
       })
       
       return {
           paths,
           fallback: false
    }
}
