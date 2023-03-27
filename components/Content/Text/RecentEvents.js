const RecentEvents = ({post}) => {
    if(post.content.recentEvents){
        var recentEvents = post.content.recentEvents
    }
        
  return (
    <div>
        {typeof(recentEvents)!=="undefined" && 
            <>
        <h2 class="text-4xl mx-2 mt-4 mb-2" id={recentEvents.id}>{recentEvents.title}</h2>
        {typeof(recentEvents)=="object" &&
            Object.values(recentEvents.content).map((items, indexes) => 
        (
            <>
            <h3 class="text-2xl mx-4 mb-2" id={items.id} key={indexes}>{items.title}</h3>
            {items.content.map((item, index) => {
                const result = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
                return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
            }
                )}
            </>
            ))
        }
        </>
        }
    </div>
  )
}

export default RecentEvents
