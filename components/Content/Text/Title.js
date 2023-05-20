// // if title has no subtitle (terminal === true ) then have a paragraph
// // else loop through the subtitle


import Paragraph from "./Paragraph.js"
import Subtitle from "./Subtitle.js"

const Title = ({titleContent}) => {
    return (
        <div>
            {titleContent.id!=="Intro" &&
                <h2 class="text-4xl mx-2 mt-4 mb-2" id={titleContent.id}>{titleContent.title}</h2>}
            {Array.isArray(titleContent.content) ? 
                titleContent.content.map(item =>(
                    <Paragraph key={`${titleContent.content.id}-${titleContent.content.indexOf(item)}`} text={item}/>
                ))
                :
                Object.values(titleContent.content).map(item => (
                    <Subtitle key={item.id} subtitleContent={item} />
                ))
            }
        </div>
    )
}

export default Title
