const History = ({post}) => {

    
    if(post.content.history){
        var history = post.content.history
    }
    
  return (
    <div>
        <h2 class="text-4xl mx-2 mt-4 mb-2" id={typeof(history)!=="undefined" && history.id}>{typeof(history)!=="undefined" && history.title}</h2>
        {typeof(history)=="object" &&
            Object.values(history.content).map(items => 
        (
            <>
            <h3 class="text-2xl mx-4 mb-2" id={items.id}>{items.title}</h3>
            {items.content.map((item, index) => {
                const result = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
                return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
            }
            )}
            </>
        )
    )
        }
    </div>
  )
}

export default History
