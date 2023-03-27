const Intro = ({post}) => {
    if(post.content.intro){
        var intro = post.content.intro
    }
    console.log(post.content.intro.content)

  return (
    <div class="" id={intro.id}> 
        {intro.content.map((item, index)  => {
            const result = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
            return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
        }
        )}
    </div>
  )
}

export default Intro
