// // parent will loop through this

const Paragraph = ({text}) => {
    let result = text.replace(/\[(?<num>.*?)\]/gm, " <sup>$&</sup> ")
    return ( 
        <div dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>
    )
}

export default Paragraph 
