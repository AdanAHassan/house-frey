const Traits = ({post}) => {
    
    if(post.content.traits){
        var traits = post.content.traits
    }

  return (
    <div>  
        {typeof(traits)!=="undefined" && 
            <>
        <h3 class="text-4xl mx-2 mt-4 mb-2" id={traits.id}>{traits.title}</h3>
        {traits.content.map((item, index) => {
            const result = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
            return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
        }
        )}
        </>}
    </div>
  )
}

export default Traits
