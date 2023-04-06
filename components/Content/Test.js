const Test = ({post}) => {
    if(post.content){
        var content = post.content
    }
    const printTerminal = (terminalObj) => {
        (
            <>
            <div>{terminalObj.title}</div>
            {terminalObj.content.map((terminalArr, index) => 
                <div key={`test-${index}`}>{terminalArr}</div>
            )}
            </>
        )
    }
    
const runLoop = (input) => {
    typeof(input.title)!=="undefined"
    ?
    console.log(Object.values(input.content))
    :
    Object.values(input).map(items => 
        (
            <>
            <h3 class="text-2xl text-red-500 mx-4 mb-2" id={items.id}>{items.title}</h3>
            {items.terminal
                ?
                console.log(items)
                : 
                runLoop(items)
            }
            </>
        )
    )}
// print each title 
// obj value then map
// for each print title
// if true then map the array
// if false print each title 
//     objval then map
    
    
    
        const x = []
//     newArr.map((items, indexes) => {
//         console.log(items, indexes)
//     })
    
        const loopFunction = (num,thing) => {
            thing.splice(num, 1)
            thing.map((bruh, indy) => {return (<p key={indy} id="WTF" class="text-red-500">{bruh}</p>)} )
        }
        
    const loopArray = (arr) => {
        arr.map((items, index) =>{
            Array.isArray(items)
            ?
            loopFunction(index, arr)
            :
            loopArray(Object.values(items).map(item => 
        item.content))}
        )
    }
    console.log(Object.values(content).filter(items => items.terminal===false).map(item => Object.values(item.content)))
    

  return (
    <div class="wtf" id={content.id}>
    {typeof(content)=="object" && (
            
        <>
        <p>{content.title}</p>
        {Object.values(content).map(items => 
        (
            <>
            {items.terminal
                ?
                (
                    <>
                    {items.title!=="Intro" && <h3 class="text-4xl mx-2 mt-4 mb-2" id={items.id}>{items.title}</h3>}
                    {Object.values(items.content).map((item, index) => {
                        const result = item.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
                        return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
                    })}
                    </>
                )
                : 
                (
                    <>
                    <p class="text-4xl mx-2 mt-4 mb-2">{items.title}</p>
                    {
                        Object.values(items.content).map(item => 
                    (
                        <>
                        {item.terminal
                            ?
                            (
                                <>
                                <h3 class="text-2xl mx-4 mb-2" id={item.id}>{item.title}</h3>
                                {Object.values(item.content).map((arr, index) => {
                                    const result = arr.replace(/\[(?<num>.*?)\]/gm, "<sup>$&</sup>")
                                    return ( <div key={index} dangerouslySetInnerHTML={{__html: `<p class="mx-6 my-2">${result}</p>`}}></div>)
                                })}
                                </>
                            )
                            : 
                            console.log(`Error: ${item.id} was not rendered`)
                        }
                        </>
                    ))
                    }
                    </>
                )
            }
            </>
        ))}
        </>)
    }
    </div>
  )
}

export default Test