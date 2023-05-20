import Image from "next/image"
import Sigils from "../../public/sigils/Sigils.js"

const HouseCard = ({post}) => {

//     Object.values(post.houseCard).map((items, indexes) =>
//         {   
//             console.log(items.content)
//         }
//     )
    
  return (
      <div className="flex flex-col w-80 items-center housecard border-zinc-500 border-4 lg:h-fit lg:mt-24" >
    {post.houseCard ?
      <div className="">
      {post.houseCard.header.includes("House") ?
        <div className="flex flex-col">
            <div className="title text-center text-2xl p-2">{post.title}</div>
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[post.id] ? Sigils[post.id] : post.region==="Dorne" ? Sigils.None_Dorne : Sigils[post.region] ? Sigils[post.region] : Sigils.None}
                    className="px-4 pb-4"
                />
            </div>
        </div>
        :
        <div className="flex flex-row justify-between p-3">
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[post.id] ? Sigils[post.id] : post.region==="Dorne" ? Sigils.None_Dorne : Sigils[post.region] ? Sigils[post.region] : Sigils.None}
                    height="50"
                />
            </div>
            <div className="title text-2xl p-2">{post.title}</div>
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[post.id] ? Sigils[post.id] : post.region==="Dorne" ? Sigils.None_Dorne : Sigils[post.region] ? Sigils[post.region] : Sigils.None}
                    height="50"
                />
            </div>
        </div>
      }
        <div className="house-info">
            <table>
                    {
                        Object.values(post.houseCard).map((items, indexes) =>
                    <tr key={indexes}>
                        <th className="text-start align-top p-1">{items.title}</th>
                        <td className="flex flex-col p-1">
                            {typeof items.content === "object" &&
                                items.content.map((item, index) => {
                                const intermediate1 = item.replace(/\[(?<num>.*?)\]/gm, " <sup>$&</sup> ")
                                const intermediate2 = intermediate1.replace(/\((?<coat>.*\s.*?)\)/gm, "(<em>$1</em>)")
                                const result = intermediate2.replace(/\((?<text>\S*?)\)/gm, "<small>$&</small>")
                                return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p>${result}</p>`}}></div>)
                            }
                            )}
                        </td>
                    </tr>
                    )}
            </table>
        </div>
      </div>
        :
    <></>
    }
    </div>
  )
}

export default HouseCard
    
    
    
