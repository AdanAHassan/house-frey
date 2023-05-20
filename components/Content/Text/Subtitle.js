// // parent will loop through the different subtitles
// // child will display the text

import Paragraph from "./Paragraph.js"

const Subtitle = ({subtitleContent}) => {
    return (
        <div id={subtitleContent.id}>
            <h3 class="text-2xl mx-4 mb-2">{subtitleContent.title}</h3>
            <div>
                {Array.isArray(subtitleContent.content) ? 
                subtitleContent.content.map(item =>(
                    <Paragraph key={`${subtitleContent.content.id}-${subtitleContent.content.indexOf(item)}`} text={item}/>
                ))
                :
                <div className="bg-red-500 w-full">Error</div>
                }
            </div>
        </div>
    )
} 

export default Subtitle
