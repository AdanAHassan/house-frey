import Image from "next/image"
import Sigils from "../../public/sigils/Sigils.js"

const HouseCard = ({post}) => {

    if(post.houseInfo){
        var houseInfo = post.houseInfo.content
    }
    
  return (
      <div class="flex flex-col w-80 items-center housecard border-zinc-500 border-4 lg:h-fit lg:mt-24" >
    {typeof(houseInfo)=="object" ?
      <div class="">
      {post.houseInfo.type=="house" ?
        <div class="flex flex-col">
            <div className="title text-2xl p-2">{post.title}</div>
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[houseInfo.coatOfArms.image]}
                    class="px-4 pb-4"
                />
            </div>
        </div>
        :
        <div class="flex flex-row justify-between p-3">
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[houseInfo.coatOfArms.image]}
                    height="50"
                />
            </div>
            <div className="title text-2xl p-2">{post.title}</div>
            <div className="coat-of-arms">
                <Image 
                    alt={`${post.title} image`}
                    src={Sigils[houseInfo.coatOfArms.image]}
                    height="50"
                />
            </div>
        </div>
      }
        <div className="house-info">
            <table>
                    {Object.values(houseInfo).map((items, indexes) =>
                    <tr key={indexes}>
                        <th class="text-start align-top p-1">{items.title}</th>
                        <td class="flex flex-col p-1">
                            {items.content.map((item, index) => {
                                const intermediate1 = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
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
    
    
    
